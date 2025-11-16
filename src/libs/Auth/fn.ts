import { jwtDecode } from "jwt-decode";
import { z } from "zod";

const schema = z.object({
  iss: z.string().url(),
  nbf: z.number(),
  iat: z.number(),
  exp: z.number(),
  aud: z.array(z.string()),
  scope: z.array(z.string()),
  amr: z.array(z.string()),
  client_id: z.string().uuid(),
  sub: z.string().uuid(),
  auth_time: z.number(),
  idp: z.string(),
  access_client: z.string(),
  family_name: z.string(),
  given_name: z.string(),
  id: z.string(),
  executive_position: z.string().nullable(),
  province_id: z.string(),
  login_type: z.string(),
  code: z.string(),
  current_client: z.string(),
  user_client_id: z.string(),
  role: z.array(z.string()),
  sid: z.string(),
});

const key = "accessToken";

const authFn = {
  getToken() {
    return localStorage.getItem(key);
  },
  login: (token: string) => {
    localStorage.setItem(key, token);
  },
  logout: () => {
    localStorage.removeItem(key);
    window.location.reload();
  },
  getData: () => {
    try {
      const accessToken = sessionStorage.getItem(key);

      if (!accessToken) return null;

      return jwtDecode(accessToken) as z.infer<typeof schema>;
    } catch (error) {
      return null;
    }
  },
};

export { authFn };
