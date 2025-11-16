import { permissionType } from "@/types/permission-type";

export interface ItemMenu {
  key: string;
  url?: string;
  label?: string;
  type?: "divider" | "group";
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: ItemMenu[];
  permission?: permissionType;
}
