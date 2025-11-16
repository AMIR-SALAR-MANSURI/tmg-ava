// "use client";

// import { _analizer } from "@/constants/analizer";
// import useGetConversation from "@/hooks/analizer/useGetConversation";
// import {
//   TCreateType,
//   useNewConversation,
// } from "@/hooks/analizer/useNewConversation";
// import { queryClient } from "@/libs/queryClient";
// import { SendOutlined } from "@ant-design/icons";
// import {
//   Button,
//   Col,
//   Divider,
//   Form,
//   Input,
//   InputRef,
//   Row,
//   Skeleton,
//   message,
// } from "antd";
// import { MessageCirclePlus } from "lucide-react";
// import { parseAsString, useQueryState } from "nuqs";
// import { useEffect, useRef } from "react";
// import { DomainNames, domains } from "../domain";
// import useOpenDrawerHistory from "../open-drawer-history";
// import ChatBlocks from "./chat-blocks";
// import ChatDrawer from "./chat-drawer";
// import History from "./history";

// interface ChatBox {
//   domain?: DomainNames;
// }

// const ChatBox = ({ domain }: ChatBox) => {
//   const domainData = domain ? domains[domain] : null;

//   const [chatID, setChatID] = useQueryState("uuid", parseAsString);

//   const inputRef = useRef<InputRef>(null);
//   const { open, setOpen } = useOpenDrawerHistory();
//   const [form] = Form.useForm();

//   const chat = useNewConversation();

//   const { data, isPending, isFetching } = useGetConversation({
//     uid: chatID as string,
//   });

//   const handleSendMessage = async (value: TCreateType) => {
//     if (!value.userInput?.trim()) {
//       message.warning("Please enter a message");
//       return;
//     }

//     form.resetFields();

//     const res = await chat.mutateAsync({
//       userInput: value.userInput,
//       conversationId: chatID,
//     });

//     if (res.isSuccess) {
//       setChatID(res.data.id);
//     }
//   };

//   useEffect(() => {
//     if (!isFetching && !chat.isPending) {
//       inputRef.current?.focus();
//     }
//   }, [chat.isPending, isFetching]);

//   useEffect(() => {
//     const handleKeyPress = (e: KeyboardEvent) => {
//       if (e.key === "Enter") {
//         e.preventDefault();
//         form.submit();
//       }
//     };
//     window.addEventListener("keydown", handleKeyPress);

//     return () => {
//       window.removeEventListener("keydown", handleKeyPress);
//     };
//   }, [form]);

//   const handleNewChat = (id: string | null) => {
//     form.resetFields();
//     queryClient.removeQueries({
//       queryKey: [_analizer.GetConver.url],
//       exact: false,
//     });

//     // chatHistory.refetch();

//     setChatID(id);
//   };

//   return (
//     <>
//       <div className="hidden 2xl:block w-full lg:w-[20%] bg-white border rounded-lg min-w-72">
//         <div className="p-4 flex flex-col justify-between md:flex-row xl:flex-row xl:justify-between gap-4 xl:gap-2">
//           <span style={{ color: "black" }} className="w-16 text-lg font-bold">
//             تاریخچه
//           </span>
//           <Button
//             icon={<MessageCirclePlus />}
//             type="primary"
//             onClick={() => handleNewChat(null)}
//           >
//             درخواست جدید
//           </Button>
//         </div>
//         <Divider />
//         <History handleNewChat={handleNewChat} />
//       </div>

//       <div className="w-full md:w-[100%] h-screen md:h-auto p-4 pb-0 flex flex-col justify-between items-center mx-auto max-2xl:border max-2xl:shadow-md lg:w-full sm:w-full">
//         <div className="flex flex-col h-full bg-white w-full">
//           <div className="flex justify-between items-center">
//             <div className="hidden max-2xl:block">
//               <Button type="primary" onClick={() => handleNewChat(null)}>
//                 <MessageCirclePlus className="size-4 lg:size-5" />
//               </Button>
//             </div>
//             <div className="hidden max-2xl:block">
//               <ChatDrawer handleNewChat={handleNewChat} />
//             </div>
//           </div>
//           <Divider className="hidden max-2xl:block" />
//           {isPending && chatID ? (
//             <>
//               <div className="h-screen flex-1 overflow-y-auto p-4 space-y-4">
//                 {[...Array(10)].map((_, index) => (
//                   <div
//                     key={index}
//                     className={`flex ${
//                       index % 2 === 0 ? "justify-start" : "justify-end"
//                     }`}
//                   >
//                     <div
//                       className={`p-3 rounded-lg shadow max-w-xs ${
//                         index % 2 === 0 ? "bg-black" : "bg-gray-100"
//                       }`}
//                     >
//                       <Skeleton
//                         active
//                         paragraph={{ rows: 1 }}
//                         title={false}
//                         className="w-40"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </>
//           ) : (
//             <ChatBlocks data={data} />
//           )}
//           <Form form={form} onFinish={handleSendMessage}>
//             <Row gutter={[16, 16]}>
//               <Col xs={24} sm={24} lg={24} md={24}>
//                 <Form.Item name="userInput">
//                   <div className="pt-4 border-t mb-1 flex items-center gap-2">
//                     <Input.TextArea
//                       autoSize={{ maxRows: 4 }}
//                       placeholder="پیام خود را بنویسید..."
//                       className="min-h-11 flex-1 rounded-lg"
//                       disabled={chat.isPending || isFetching}
//                       ref={inputRef}
//                       onChange={(e) => {
//                         const value = e.target.value;
//                         const masked = value.replace(
//                           /[^\u0600-\u06FFa-zA-Z0-9 \n]/g,
//                           ""
//                         );
//                         form.setFieldsValue({ userInput: masked });
//                       }}
//                     />
//                     <Button
//                       className="min-h-10 min-w-10 mb-0.5 ml-0.5"
//                       type="primary"
//                       iconPosition="end"
//                       htmlType="submit"
//                       size="large"
//                       shape="circle"
//                       icon={
//                         <SendOutlined className="rotate-180 [&>svg]:size-5" />
//                       }
//                       disabled={chat.isPending || isFetching}
//                     />
//                   </div>
//                 </Form.Item>
//               </Col>
//             </Row>
//           </Form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChatBox;
