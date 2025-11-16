import { Button, Drawer } from "antd";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { useState } from "react";
import History, { HistoryProps } from "./history";

export default function ChatDrawer({ handleNewChat }: HistoryProps) {
  const [open, setOpen] = useState<boolean>();
  return (
    <>
      <Button type="primary" onClick={() => setOpen(!open)}>
        <PanelRightClose className="size-4 lg:size-5" />
      </Button>
      <Drawer
        closeIcon={false}
        open={open}
        onClose={() => setOpen(false)}
        placement="left"
        title={
          <>
            <div className="flex justify-between items-center">
              <div className="p-4 flex flex-col justify-between md:flex-row xl:flex-row xl:justify-between gap-4 xl:gap-2">
                <span
                  style={{ color: "black" }}
                  className="w-16 text-lg font-bold"
                >
                  تاریخچه
                </span>
              </div>
              <Button type="primary" onClick={() => setOpen(!open)}>
                <PanelRightOpen className="size-4 lg:size-5" />
              </Button>
            </div>
          </>
        }
      >
        <History
          handleNewChat={(id) => {
            handleNewChat(id);
            setOpen(false);
          }}
        />
      </Drawer>
    </>
  );
}
