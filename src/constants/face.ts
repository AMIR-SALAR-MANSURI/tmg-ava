import { z } from "zod";
const _face = {
  create: {
    url: "/Service/FaceDetect",
    method: "POST",
    type: z.object({
      File: z.string(),
    }),
    response: z.object({
      data: z.object({
      data: z.object({
        success: z.boolean().optional(),
        face:z.string(),
      }),
    }),      
    })
  },

    add: {
    url: "/Service/RepositoryAdd",
    method: "POST",
    type: z.object({
      File: z.string(),
    }),
    response: z.object({
      data: z.object({
      data: z.object({
        success: z.boolean().optional(),
        Index:z.number().optional(),
        Face:z.string(),
      }),
    }),      
    })
  },
   search: {
    url: "/Service/RepositorySearch",
    method: "POST",
    type: z.object({
      File: z.string(),
    }),
    response: z.object({
      data: z.object({
      data: z.array(
        z.object({
        uid: z.boolean().optional(),
        similarity:z.number().optional(),
        IMG:z.string(),
      }))
    }),      
    })
  },
     status: {
    url: "/Service/RepositoryStatus",
    method: "POST",
    response: z.object({
      data: z.object({
      data: z.object({
        Count:z.number(),
        Last_UID:z.string(),
      }),
    }),      
    })
  },

};

export { _face };
