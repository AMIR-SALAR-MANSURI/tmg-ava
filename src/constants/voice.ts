import { z } from "zod";

const _voice = {
  create: {
    url: "/Service/VoiceToTextServiceByFile",
    method: "POST",
    type: z.object({
      File: z.string(),
    }),
    response: z.object({
      data: z.array(
        z.object({
          transcription: z.string(),
          gender: z.string(),
        })
      ),
    }),
  },
};

export { _voice };
