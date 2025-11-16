import { z } from "zod";



const _ocr = {
  create: {
    url: "/Service/OcrServiceByBase64",
    method: "POST",
    type: z.object({
      base64Image: z.string(),
      language:z.enum(["fa", "en"]),
    }),
    response: z.object({
      data: z.object({
      extracted_text: z.string(),
      language:z.string(),
    }),      
    })
  },

};

export { _ocr };

