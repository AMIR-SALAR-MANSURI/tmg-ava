import { z } from "zod";

const _map = {
  GetMapAddress: {
    url: "/api/map/v1/Reverse_Geocoding",
    method: "POST",
    type: z.object({
      latitude: z.any(),
      longitude: z.any(),
    }),

    response: z.object({
      data: z.object({
        status: z.string().optional(),
        neighbourhood: z.string().optional(),
        municipality_zone: z.string().optional(),
        state: z.string().optional(),
        city: z.string().optional(),
        in_traffic_zone: z.boolean().optional(),
        in_odd_even_zone: z.boolean().optional(),
        route_name: z.string().optional(),
        route_type: z.string().optional(),
        place: z.string().optional(),
        district: z.string().optional(),
        formatted_address: z.any().optional(),
        village: z.string().optional(),
        county: z.string().optional(),
      }),
    }),
  },
  getAddress: {
    url: "/api/map/v1/Geocoding",
    method: "POST",
    type: z.object({
      address: z.string(),
    }),

    response: z.object({
      location: z.object({
        x: z.number(),
        y: z.number(),
      }),
    }),
  },
};

export { _map };
