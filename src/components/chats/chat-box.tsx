"use client";

import { SendOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Row, Skeleton } from "antd";
import { Bot, MessageCirclePlus } from "lucide-react";
import ChatBlocks from "./chat-blocks";
import ChatDrawer from "./chat-drawer";
import History from "./history";
import { useChatBoxLogic } from "./hooks/actions";
import { DomainNames, domains } from "./hooks/domain";
import SelectModel from "./select-model";

interface ChatBoxProps {
  hideHistory?: boolean;
  domainName?: DomainNames;
}

const ChatBox = ({ hideHistory, domainName }: ChatBoxProps) => {
  const domain = domainName ? domains[domainName] : undefined;

  const {
    form,
    inputRef,
    chat,
    chatID,
    data,
    isPending,
    isFetching,
    handleSendMessage,
    handleNewChat,
    models,
    setUid,
    uid,
  } = useChatBoxLogic(domain?.id);

  return (
    <>
      {/* Sidebar History */}
      {!hideHistory && (
        <div className="hidden 2xl:block w-full lg:w-[20%] bg-white border rounded-lg min-w-72">
          <div className="p-4 flex flex-col justify-between md:flex-row xl:flex-row xl:justify-between gap-4 xl:gap-2">
            <span style={{ color: "black" }} className="w-16 text-lg font-bold">
              تاریخچه
            </span>
            <Button
              icon={<MessageCirclePlus />}
              type="primary"
              onClick={() => handleNewChat(null)}
            >
              درخواست جدید
            </Button>
          </div>
          <Divider />
          <History handleNewChat={handleNewChat} chatId={chatID as string} />
        </div>
      )}

      {/* Main Chat */}
      <div className="w-full md:w-[100%] h-screen md:h-auto p-4 pb-0 flex flex-col justify-between items-center mx-auto max-2xl:border max-2xl:shadow-md lg:w-full sm:w-full">
        <div className="flex flex-col h-full bg-white w-full">
          <div className="flex justify-between items-center">
            <div className="hidden max-2xl:block">
              <Button type="primary" onClick={() => handleNewChat(null)}>
                <MessageCirclePlus className="size-4 lg:size-5" />
              </Button>
            </div>
            {!hideHistory && (
              <div className="hidden max-2xl:block">
                <ChatDrawer handleNewChat={handleNewChat} />
              </div>
            )}
          </div>
          <Divider className="hidden max-2xl:block" />
          {isPending && chatID ? (
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

          <Form form={form} onFinish={handleSendMessage}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item name="userInput">
                  <div className="flex flex-col border-2 p-2 rounded-2xl gap-2">
                    <div className="w-full h-full flex-1 items-center ">
                      <textarea
                        autoFocus
                        disabled={chat.isPending || isFetching}
                        ref={inputRef}
                        // className="w-full border-0 focus:outline-none resize-none bg-transparent"
                        className="w-full resize-none bg-transparent px-2 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none min-h-[44px] max-h-32 leading-relaxed overflow-y-auto"
                        placeholder="پیام خود را بنویسید..."
                        // maxLength={10000}
                        rows={1}
                        onChange={(e) => {
                          const value = e.target.value;
                          const masked = value.replace(
                            /[^\u0600-\u06FFa-zA-Z0-9 \n]/g,
                            ""
                          );
                          form.setFieldsValue({ userInput: masked });
                        }}
                        style={{
                          height: "auto",
                          minHeight: "44px",
                          maxHeight: "calc(1.5em * 4 + 20px)",
                        }}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement;
                          target.style.height = "auto";
                          target.style.height = `${Math.min(
                            target.scrollHeight,
                            4 * 24 + 20
                          )}px`;
                        }}
                      />
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      {data?.messages.length == null ? (
                        <SelectModel
                          className="max-w-40 rounded-full"
                          option={models.options}
                          value={uid}
                          defaultValue={models.options?.[0].value}
                          onChange={(value) => setUid(value)}
                          loading={models.isFetching || models.isLoading}
                          disable={isFetching}
                        />
                      ) : data?.modelName ? (
                        <div className="flex justify-between items-center min-w-40 p-1 bg-gradient-to-r from-gray-50 transition-all rounded-xl to-gray-100  duration-300 min-h-10">
                          <div className="text-[16px]">{data?.modelName}</div>
                          <Bot className="w-5 h-5 text-gray-500" />
                        </div>
                      ) : (
                        <div className="flex justify-between items-center min-w-44 p-1 bg-gradient-to-r from-gray-50 transition-all rounded-xl to-gray-100  duration-300 min-h-10">
                          <div className="text-[15px]"> مدل پیش فرض کوئن</div>
                          <Bot className="w-5 h-5 text-gray-500" />
                        </div>
                      )}
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
                        disabled={chat.isPending || isFetching}
                      />
                    </div>
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
