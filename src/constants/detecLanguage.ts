import { z } from "zod";

const _detectLanguage = {
  create: {
    url: "/Service/DetectLanguage",
    method: "POST",
    type: z.object({
      text: z.string(),
    }),
    item: z.object({
      data: z.object({
        detectedLanguage: z.string(),
      }),
    }),
    response: z.object({
      data: z.object({
        detectedLanguage: z.string(),
      }),
    }),
  },
};

export { _detectLanguage };
