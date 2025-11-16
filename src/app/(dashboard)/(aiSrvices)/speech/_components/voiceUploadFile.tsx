import { Button, Col, Row } from "antd";
import ResultSearch from "../../../../../components/result-desc/resultSearch";
import { AudioRecorder } from "@/components/audio-recorder/audio-recorder";
import { AudioRecorderRef } from "@/components/audio-recorder/useAudioRecorder";
import { useEffect, useRef, useState } from "react";
import useTmgStore from "@/app/(dashboard)/store";

const VoiceUploadFile = () => {
  const { extarctSpeech, setExtarctSpeech } = useTmgStore();
  const [blob, setBlob] = useState<Blob | null>(null);

  useEffect(() => {
    if (blob) {
      const formData = new FormData();
      formData.append("file", blob);

      fetch("http://192.168.52.62:8003/upload_and_process_audio/", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          let newText = data?.[0].transcription;
          let sum = extarctSpeech + newText;
          console.log({ extarctSpeech, newText, sum });
          setExtarctSpeech(sum);
        })
        .catch((error) => console.error("خطا در ارسال:", error));
    }
  }, [blob]);

  const audioRecorderRef = useRef<AudioRecorderRef>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const handleAudioSegment = (blob: Blob): void => {
    setBlob(blob);
  };

  const handleTimeChange = (time: number): void => {};

  const handleStart = () => {
    if (audioRecorderRef.current) {
      audioRecorderRef.current.startRecording().then(() => {
        setIsRecording(true);
      });
    }
  };

  const handleStop = () => {
    if (audioRecorderRef.current) {
      audioRecorderRef.current.stopRecording();
      setIsRecording(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 min-h-[390px]">
      <div className="flex-grow">
        <Row justify="end" gutter={[16, 16]}>
          <Col xs={24}>
            <AudioRecorder
              ref={audioRecorderRef}
              onAudioSegment={handleAudioSegment}
              onTimeChange={handleTimeChange}
            />
          </Col>
          <Col xs={24} sm={24} lg={4} md={24}>
            <Button
              className="w-full"
              type="primary"
              htmlType="submit"
              onClick={isRecording ? handleStop : handleStart}
            >
              {isRecording ? "توقف گفتگو" : "شروع گفتگو"}
            </Button>
          </Col>
        </Row>
      </div>

      <div className="mt-6">
        <ResultSearch voice={[{ transcription: extarctSpeech }]} />
      </div>
    </div>
  );
};

export default VoiceUploadFile;
