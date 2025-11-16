"use client";
import SelectModel from "@/components/chats/select-model";
import { Button, Col, Divider, Form, Row, Skeleton } from "antd";
import { Bot, MessageCirclePlus } from "lucide-react";
import React from "react";
import { SendOutlined } from "@ant-design/icons";
import ChatBlocks from "./chat-blocks-support";

export default function ChatLayoutNoHooks(props: any) {
  const {
    handleNewChat,
    handleSendMessage,
    hideHistory,
    isPending,
    isFetching,
    data,
    chatID,
    models,
    uid,
    onUidChange,
    ChatDrawer,
    form,
  } = props;

  return (
    <div className="w-full md:w-[100%] h-screen md:h-auto p-4 pb-0 flex flex-col justify-between items-center mx-auto max-2xl:border max-2xl:shadow-md lg:w-full sm:w-full">
      <div className="flex flex-col h-full bg-white w-full">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div className="hidden max-2xl:block">
            <Button
              type="primary"
              // onClick={() => handleNewChat(null)}
            >
              <MessageCirclePlus className="size-4 lg:size-5" />
            </Button>
          </div>
          {/* 
          {!hideHistory && (
            <div className="hidden max-2xl:block">
              {ChatDrawer && <ChatDrawer handleNewChat={handleNewChat} />}
            </div>
          )} */}
        </div>

        <Divider className="hidden max-2xl:block" />

        {/* MESSAGES OR SKELETON */}
        {isPending ? (
          <div className="h-screen flex-1 overflow-y-auto p-4 space-y-4">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`p-3 rounded-lg shadow max-w-xs ${
                    index % 2 === 0 ? "bg-black" : "bg-gray-100"
                  }`}
                >
                  <Skeleton
                    active
                    paragraph={{ rows: 1 }}
                    title={false}
                    className="w-40"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ChatBlocks data={data} />
        )}

        {/* FORM */}
        <Form
        //   form={form}

        // onFinish={handleSendMessage}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item name="userInput">
                <div className="flex flex-col border-2 p-2 rounded-2xl gap-2">
                  {/* TEXTAREA */}
                  <textarea
                    autoFocus
                    disabled={isPending || isFetching}
                    className="w-full resize-none bg-transparent px-2 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none min-h-[44px] max-h-32 leading-relaxed overflow-y-auto"
                    placeholder="پیام خود را بنویسید..."
                    rows={1}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        form.submit();
                      }
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      target.style.height = `${Math.min(
                        target.scrollHeight,
                        4 * 24 + 20
                      )}px`;
                    }}
                    onChange={(e) => {
                      // Remove unwanted chars
                      const masked = e.target.value.replace(
                        /[^\u0600-\u06FFa-zA-Z0-9 \n]/g,
                        ""
                      );
                      //   form.setFieldsValue({ userInput: masked });
                    }}
                  />

                  {/* BOTTOM BAR */}
                  <div className="flex justify-between gap-2 items-center">
                    {/* MODEL SELECT */}
                    {!data?.length ? (
                      <div className="flex items-center min-w-44 p-1 gap-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl min-h-10">
                        <div className="text-[15px]">مدل پیش فرض کوئن</div>
                        <Bot className="w-5 h-5 text-gray-500 ml-2" />
                      </div> // <SelectModel
                    ) : //   className="max-w-40 rounded-full"
                    //   option={models.options}
                    //   value={uid}
                    //   defaultValue={models.options?.[0]?.value}
                    //   onChange={onUidChange}
                    //   loading={models.isFetching || models.isLoading}
                    //   disable={isFetching}
                    // />
                    data ? (
                      <div className="flex items-center min-w-40 p-1 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl min-h-10">
                        <div className="text-[16px]">{data}</div>
                        <Bot className="w-5 h-5 text-gray-500 ml-2" />
                      </div>
                    ) : (
                      <div className="flex items-center min-w-44 p-1 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl min-h-10">
                        <div className="text-[15px]">مدل پیش فرض کوئن</div>
                        <Bot className="w-5 h-5 text-gray-500 ml-2" />
                      </div>
                    )}

                    {/* SEND BUTTON */}
                    <Button
                      className="min-h-10 min-w-10"
                      type="primary"
                      iconPosition="end"
                      htmlType="submit"
                      size="large"
                      shape="circle"
                      icon={
                        <SendOutlined className="rotate-180 [&>svg]:size-3" />
                      }
                      disabled={isPending || isFetching}
                    />
                  </div>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
