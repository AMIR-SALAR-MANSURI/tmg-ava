import React from "react";
import AccountMenu from "@/components/account-menu/account-menu";
import MenuRender from "@/components/menu-render/menu-render";
import useOpenDrawer from "./open-drawer-menu";
import { Drawer } from "antd";

export default function Sidebar() {
  const open = useOpenDrawer((i) => i.open);
  const setOpen = useOpenDrawer((i) => i.setOpen);

  const SidebarContent: React.FC = () => (
    <div
      className="rounded-2xl h-full shadow-sm"
      style={{
        background:
          "linear-gradient(174.36deg, #303434 0.32%, #303434 3.33%, #303434 6.34%, #303434 10.79%, rgba(250, 250, 250, 0.6) 33.11%)",
      }}
    >
      <AccountMenu />
      <MenuRender
        onClose={() => setOpen(false)}
        className="overflow-y-auto overflow-x-hidden h-full md:h-[calc(100vh-328px)]"
      />
    </div>
  );

  return (
    <>
      <SidebarContent />
      <Drawer width={360} open={open} onClose={() => setOpen(false)}>
        <SidebarContent />
      </Drawer>
    </>
  );
}
