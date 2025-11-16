type DomainNames =
  | "support"
  | "srd"
  | "str"
  | "samen"
  | "validate"
  | "validator"
  | "business"
  | "hr"
  | "trafficManagement"
  | "employeeRecruitmentProcess";

type TDomain = {
  id: string;
  name: string;
};

type TDomains = Record<DomainNames, TDomain>;

const domains: TDomains = {
  support: {
    id: "24b2d3ea-c3d3-41d3-bda0-309a952297d3",
    name: "شرکت بنیان آوا",
  },
  srd: {
    id: "ed712426-6fab-4502-9138-bbe7f2225c04",
    name: "درگاه ملی حمل بار",
  },
  str: {
    id: "cb0f4d42-e9d7-44ca-ba37-bfffc996ec99",
    name: "تراکنش های مشکوک",
  },
  samen: {
    id: "53ef05c7-aed0-4699-8f4c-1d1b56b8e488",
    name: "ثامن",
  },
  validate: {
    id: "8f57f07c-cd17-4c4d-88c0-2acbeb4ae3d5",
    name: "اعتبارسنجی",
  },
  validator: {
    id: "ff3fa44d-ab11-4610-998a-aad88429d35b",
    name: "اعتبارینو",
  },

  business: {
    id: "97975565-a75e-4a3e-88e3-13037cd2d8bd",
    name: "تجارت",
  },
  hr: {
    id: "2f0187d3-10e8-4e59-af8a-acb5302cb6f7",
    name: "معاونت سرمایه انسانی",
  },
  trafficManagement: {
    id: "ce1272fd-0d7c-4dc4-9b1b-70ab33f2d4ab",
    name: "پشتیبان هوشمند مدیریت تردد و محاسبه کارکرد در نرم افزار نرم نگاران",
  },
  employeeRecruitmentProcess: {
    id: "CE55BCB1-1EDF-4F67-9537-6A23841AD234",
    name: "پشتیبان هوشمند فرآیند کاریابی کارکنان",
  },
};

export type { DomainNames };
export { domains };
