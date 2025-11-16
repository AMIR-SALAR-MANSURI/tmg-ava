import useTmgStore from "@/app/(dashboard)/store";
import { useAssistantSummary } from "@/hooks/analizer/assistant/useAssistantSummary";
import { Button, Card, Input, notification, Skeleton } from "antd";
import Image from "next/image";
import { useState } from "react";

const SummarySection = () => {
  const { summary, setSummary } = useTmgStore();

  const [text, setText] = useState<string>("");

  const summarize = useAssistantSummary();

  const handleSummary = async () => {
    try {
      handleValidation(text);
    } catch (e: unknown) {
      if (e instanceof Error) notification.error({ message: e.message });

      return;
    }

    const res = await summarize.mutateAsync({ content: text });
    if (res.isSuccess == true) {
      setSummary({
        content: res.data?.content,
        keywords: res.data?.keywords,
      });
    }
  };

  const handleValidation = (str: string) => {
    if (str.length < 2) throw new Error("لطفا متن را وارد کنید");
    return;
  };

  return (
    <>
      <div className="w-full md:w-[30%] p-4 overflow-y-auto">
        <div className="flex flex-col gap-4 h-full">
          <div className="flex-grow flex gap-2 flex-col">
            <label className="font-medium">متن</label>
            <Input.TextArea
              className="flex-grow"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <Button
              id="confirm-summary"
              className="w-full"
              type="primary"
              htmlType="submit"
              onClick={handleSummary}
              loading={summarize.isPending}
            >
              ثبت
            </Button>
            <Button
              className="w-full"
              type="default"
              danger
              onClick={() => setText("")}
            >
              حذف متن
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[70%] h-full md:h-auto bg-gray-50 p-4 space-y-4 overflow-y-auto">
        <div className="h-[70%]">
          <Card
            title="📝 متن خلاصه‌شده"
            className="h-full rounded-xl shadow-md border border-gray-200"
            bodyStyle={{
              height: "100%",
              overflowY: "auto",
              fontSize: "16px",
              lineHeight: "1.8",
            }}
          >
            {summarize.isPending ? (
              <Skeleton active paragraph={{ rows: 10 }} title={false} />
            ) : !summary.content ? (
              <div className="h-full flex flex-col gap-2 items-center justify-center">
                <Image
                  width={240}
                  height={240}
                  alt="empty-chat"
                  src="/images/empty-chat.webp"
                />
                <div className="text-center text-gray-500">
                  محتوایی وجود ندارد.
                </div>
              </div>
            ) : (
              summary.content
            )}
          </Card>
        </div>

        <div className="h-[25%]">
          <Card
            title="🔑 کلیدواژه‌ها"
            className="h-full rounded-xl shadow-md border border-gray-200"
            bodyStyle={{ overflowY: "auto", fontSize: "15px" }}
          >
            <div className="flex flex-wrap gap-3">
              {summary.keywords.length > 0 ? (
                summary.keywords.map((item, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm"
                  >
                    {index + 1}. {item}
                  </span>
                ))
              ) : (
                <span className="text-gray-400">کلیدواژه‌ای وجود ندارد.</span>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SummarySection;
