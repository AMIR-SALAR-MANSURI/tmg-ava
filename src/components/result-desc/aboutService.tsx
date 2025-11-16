import React from "react";
import { Collapse, Typography } from "antd";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";

const { Paragraph } = Typography;

interface Props {
  text?: string;
}

const AboutService = ({ text }: Props) => {
  return (
    <Collapse
      size="large"
      defaultActiveKey={["1"]}
      accordion
      style={{ background: "#fff", borderRadius: "8px" }}
      items={[
        // {
        //   key: "1",
        //   label: (
        //     <div className="flex items-center gap-2">
        //       <ClipboardDocumentListIcon className="text-primary-500 mr-2 size-6" />
        //       <span className="font-semibold text-primary-500">
        //         توضیحات در خصوص سرویس
        //       </span>
        //     </div>
        //   ),
        //   children: (
        //     <Paragraph
        //       style={{
        //         backgroundColor: "#F6F6F6",
        //         border: "1px solid #E0E0E0",
        //         borderRadius: "8px",
        //         padding: "12px",
        //         fontSize: "14px",
        //         lineHeight: "2",
        //         textAlign: "justify",
        //       }}
        //     >
        //       (محتوای دلخواه برای پنل اول)
        //     </Paragraph>
        //   ),
        // },
        // {
        //   key: "2",
        //   label: (
        //     <div className="flex items-center gap-2">
        //       <ClipboardDocumentListIcon className="text-primary-500 mr-2 size-6" />
        //       <span className="font-semibold text-primary-500">
        //         توضیحات در خصوص سرویس
        //       </span>
        //     </div>
        //   ),
        //   children: (
        //     <Paragraph
        //       style={{
        //         backgroundColor: "#F6F6F6",
        //         border: "1px solid #E0E0E0",
        //         borderRadius: "8px",
        //         padding: "12px",
        //         fontSize: "14px",
        //         lineHeight: "2",
        //         textAlign: "justify",
        //       }}
        //     >
        //       (محتوای دلخواه برای پنل دوم)
        //     </Paragraph>
        //   ),
        // },
        {
          key: "1",
          label: (
            <div className="flex items-center gap-2">
              <ClipboardDocumentListIcon className="text-primary-500 mr-2 size-6" />
              <span className="font-semibold text-primary-500">
                توضیحات در خصوص سرویس
              </span>
            </div>
          ),
          children: (
            <Paragraph
              style={{
                backgroundColor: "#F6F6F6",
                border: "1px solid #E0E0E0",
                borderRadius: "8px",
                padding: "12px",
                fontSize: "14px",
                lineHeight: "2",
                textAlign: "justify",
                direction: "rtl",
              }}
            >
              {text || "توضیحات در خصوص سرویس"}
            </Paragraph>
          ),
        },
      ]}
    />
  );
};

export default AboutService;
