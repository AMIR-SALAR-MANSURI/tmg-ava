import { z } from "zod";
const _obj = {
  create: {
    url: "/Service/ObjectDetectionServiceByFile",
    method: "POST",
    type: z.object({
      File: z.string(),
      Confidence:z.number(),
      ReturnBase64Result:z.boolean(),

    }),
    response: z.object({
      data: z.object({
      data: z.any(),
       base64_result_image:z.string(),
    }),      
    })
  },

};

export { _obj };
