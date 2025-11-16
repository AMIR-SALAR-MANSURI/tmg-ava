import {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import useAudioRecorder, {
  AudioRecorderProps,
  AudioRecorderRef,
} from "./useAudioRecorder";

export const AudioRecorder = forwardRef<AudioRecorderRef, AudioRecorderProps>(
  (props, ref) => {
    const { canvasRef, containerRef } = useAudioRecorder({ ...props, ref });

    return (
      <div ref={containerRef} className="mx-auto text-center">
        <canvas
          ref={canvasRef}
          className="mb-4 rounded-md border w-full"
          style={{ height: "100px" }}
        />
      </div>
    );
  }
);

AudioRecorder.displayName = "AudioRecorder";
