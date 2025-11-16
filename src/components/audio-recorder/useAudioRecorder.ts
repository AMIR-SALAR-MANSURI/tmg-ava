import {
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import RecordPlugin from "wavesurfer.js/dist/plugins/record.esm.js";

export interface AudioRecorderProps {
  onAudioSegment?: (blob: Blob) => void;
  onTimeChange?: (time: number) => void;
}

export interface AudioRecorderRef {
  startRecording: () => Promise<void>;
  stopRecording: () => void;
}

export default function useAudioRecorder({
  onAudioSegment,
  onTimeChange,
  ref,
}: AudioRecorderProps & { ref: ForwardedRef<AudioRecorderRef> }) {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordTime, setRecordTime] = useState<number>(0);

  const recordPluginRef = useRef<any>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heightsRef = useRef<number[]>([]);
  const audioChunksRef = useRef<Float32Array[]>([]);
  const silenceStartRef = useRef<number | null>(null);
  const audioStartRef = useRef<number | null>(null);

  useEffect(() => {
    const record = RecordPlugin.create();
    recordPluginRef.current = record;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const updateSizes = () => {
      const containerWidth = containerRef.current?.offsetWidth || 300;
      const canvasHeight = 100;
      canvas.width = containerWidth * window.devicePixelRatio;
      canvas.height = canvasHeight * window.devicePixelRatio;
      canvas.style.width = `${containerWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);

    const animate = () => {
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;

      if (isRecording && analyserRef.current) {
        drawRecordingVisualizer(ctx, canvasWidth, canvasHeight);
      } else {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        drawDefaultVisualizer(ctx, canvasWidth, canvasHeight);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSizes);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRecording]);

  // تابع شروع ضبط
  const handleStartRecording = async (): Promise<void> => {
    try {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      const audioContext: AudioContext = new AudioContext();
      const source: MediaStreamAudioSourceNode =
        audioContext.createMediaStreamSource(stream);
      const analyser: AnalyserNode = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.3;
      source.connect(analyser);

      analyserRef.current = analyser;
      setIsRecording(true);
      recordPluginRef.current.startRecording({ stream });

      intervalRef.current = setInterval(() => {
        setRecordTime((prev: number) => {
          const newTime = prev + 1;
          if (onTimeChange) onTimeChange(newTime);
          return newTime;
        });
      }, 1000);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  // تابع توقف ضبط
  const handleStopRecording = (): void => {
    if (!recordPluginRef.current) return;

    recordPluginRef.current.stopRecording();
    setIsRecording(false);

    if (intervalRef.current) clearInterval(intervalRef.current);
    setRecordTime(0);
    heightsRef.current = [];
    audioChunksRef.current = [];
    silenceStartRef.current = null;
    audioStartRef.current = null;
    analyserRef.current = null;
  };

  useImperativeHandle(ref, () => ({
    startRecording: handleStartRecording,
    stopRecording: handleStopRecording,
  }));

  const drawDefaultVisualizer = (
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ): void => {
    ctx.fillStyle = "#ccc";
    const barWidth = 3;
    const gap = 3;
    const step = barWidth + gap;
    const centerY = canvasHeight / 2;
    const minHeight = 2;

    for (let x = 0; x < canvasWidth; x += step) {
      const halfBarHeight = minHeight / 2;
      const yTop = centerY - halfBarHeight;
      ctx.fillRect(x, yTop, barWidth, minHeight);
    }
  };

  let frameCounter = 0;
  const addEveryNFrames = 5;

  const drawRecordingVisualizer = (
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ): void => {
    const analyser = analyserRef.current;
    if (!analyser) return;

    const bufferLength: number = analyser.frequencyBinCount;
    const dataArray: Uint8Array = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);
    const floatData: Float32Array = new Float32Array(bufferLength);
    analyser.getFloatTimeDomainData(floatData);

    const barWidth = 3;
    const gap = 3;
    const step = barWidth + gap;
    const centerY = canvasHeight / 2;

    const rms: number = Math.sqrt(
      floatData.reduce((sum: number, val: number) => sum + val * val, 0) /
        bufferLength
    );
    const silenceThreshold = 0.02;
    const currentTime: number = performance.now();

    if (rms < silenceThreshold) {
      if (!silenceStartRef.current) {
        silenceStartRef.current = currentTime;
      }
      if (
        audioStartRef.current &&
        audioChunksRef.current.length > 0 &&
        currentTime - silenceStartRef.current > 100
      ) {
        handleAudioSegment();
      }
    } else {
      if (!audioStartRef.current) {
        audioStartRef.current = currentTime;
      }
      silenceStartRef.current = null;
      audioChunksRef.current.push(floatData.slice());

      if (audioStartRef.current && currentTime - audioStartRef.current > 1000) {
        handleAudioSegment();
      }
    }

    const lowFreq: number =
      dataArray
        .slice(0, bufferLength / 3)
        .reduce((a: number, b: number) => a + b, 0) /
      (bufferLength / 3);
    const midFreq: number =
      dataArray
        .slice(bufferLength / 3, (2 * bufferLength) / 3)
        .reduce((a: number, b: number) => a + b, 0) /
      (bufferLength / 3);
    const highFreq: number =
      dataArray
        .slice((2 * bufferLength) / 3, bufferLength)
        .reduce((a: number, b: number) => a + b, 0) /
      (bufferLength / 3);

    const avg: number = (lowFreq * 0.4 + midFreq * 0.4 + highFreq * 0.2) / 255;
    const minHeight = 2;
    const maxHeight = canvasHeight * 1.5;
    const targetHeight: number = Math.max(avg * maxHeight, minHeight);

    frameCounter++;
    if (frameCounter % addEveryNFrames === 0) {
      heightsRef.current.push(targetHeight);
      frameCounter = 0;
    }

    const maxBars: number = Math.ceil(canvasWidth / step);
    while (heightsRef.current.length > maxBars) {
      heightsRef.current.shift();
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawDefaultVisualizer(ctx, canvasWidth, canvasHeight);

    for (let i = heightsRef.current.length - 1; i >= 0; i--) {
      const height: number = heightsRef.current[i];
      const x: number = canvasWidth - (heightsRef.current.length - i) * step;
      if (x >= 0) {
        const halfBarHeight = height / 2;
        const yTop = centerY - halfBarHeight;
        ctx.fillStyle = "black";
        ctx.fillRect(x, yTop, barWidth, height);
      }
    }
  };

  const handleAudioSegment = (): void => {
    if (audioChunksRef.current.length === 0) return;

    const audioContext: AudioContext = new AudioContext();
    const sampleRate: number = audioContext.sampleRate;
    const totalLength: number = audioChunksRef.current.length * 2048;
    const audioBuffer: AudioBuffer = audioContext.createBuffer(
      1,
      totalLength,
      sampleRate
    );

    const channelData: Float32Array = audioBuffer.getChannelData(0);
    audioChunksRef.current.forEach((chunk: Float32Array, index: number) => {
      channelData.set(chunk, index * 2048);
    });

    const wavBlob: Blob = audioBufferToWav(audioBuffer);
    if (onAudioSegment) {
      onAudioSegment(wavBlob);
    }

    audioChunksRef.current = [];
    audioStartRef.current = null;
  };

  const audioBufferToWav = (buffer: AudioBuffer): Blob => {
    const numChannels: number = buffer.numberOfChannels;
    const sampleRate: number = buffer.sampleRate;
    const length: number = buffer.length * numChannels * 2 + 44;
    const arrayBuffer: ArrayBuffer = new ArrayBuffer(length);
    const view: DataView = new DataView(arrayBuffer);

    writeString(view, 0, "RIFF");
    view.setUint32(4, 36 + buffer.length * 2, true);
    writeString(view, 8, "WAVE");
    writeString(view, 12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2 * numChannels, true);
    view.setUint16(32, 2 * numChannels, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, "data");
    view.setUint32(40, buffer.length * 2, true);

    const channelData: Float32Array = buffer.getChannelData(0);
    for (let i = 0; i < buffer.length; i++) {
      view.setInt16(44 + i * 2, channelData[i] * 0x7fff, true);
    }

    return new Blob([arrayBuffer], { type: "audio/wav" });
  };

  const writeString = (view: DataView, offset: number, str: string): void => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  return { canvasRef, containerRef };
}
