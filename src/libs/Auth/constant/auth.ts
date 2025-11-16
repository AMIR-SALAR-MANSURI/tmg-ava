import { z } from "zod";

const _auth = {
  login: {
    url: "/Auth/login",
    method: "POST",
    type: z.object({
      userName: z.string(),
      password: z.string(),
    }),
    response: z.array(
      z.object({
        token: z.string(),
      })
    ),
  },
};

export { _auth };
