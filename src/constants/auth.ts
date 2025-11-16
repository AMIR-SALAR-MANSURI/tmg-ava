import { z } from "zod";

const ssoApi = {
  GetUserInfo: {
    url: "/UserManagement/GetUserInfo",
    method: "GET",
    response: z.object({
      userInfo: z.object({
        phoneNumber: z.number(),
        nationalCode: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        fatherName: z.string(),
        genderId: z.number(),
        birthDate: z.string(),
        birthCertificateNumber: z.string(),
        postCode: z.string(),
        mobile: z.string(),
        address: z.string(),
        nationalId: z.string(),
        companyName: z.string(),
        companyAddress: z.string(),
        issuanceDate: z.string(),
        registerDate: z.string(),
        registerNumber: z.string(),
      }),
      permissions: z.array(
        z.object({
          id: z.number(),
          name: z.string(),
          persianName: z.string(),
          parentPermissionId: z.string().nullable(),
          typeId: z.number(),
          url: z.string(),
          accessId: z.number().nullable(),
          isDelegated: z.boolean().nullable(),
        })
      ),
    }),
  },
};

export { ssoApi };
