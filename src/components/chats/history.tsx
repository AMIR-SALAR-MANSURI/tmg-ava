import useGetConversationList from "@/hooks/analizer/useGetConversationList";
import { Popover } from "antd";
import { EllipsisIcon } from "lucide-react";
import moment from "moment-jalaali";
import HistoryItemSkeleton from "./skeleton";
import ModalEdit from "./modal-edit";
import ModalRemove from "./modal-remove";

export type HistoryProps = {
  handleNewChat: (id: string | null) => void;
  chatId?: string | undefined;
};

const History = ({ handleNewChat, chatId }: HistoryProps) => {
  const { data: chatHistory, isLoading } = useGetConversationList();

  return (
    <>
      <div className="cursor-pointer overflow-y-auto max-h-[calc(100%-100px)]">
        {isLoading ? (
          Array.from({ length: 9 }).map((_, i) => (
            <HistoryItemSkeleton key={i} />
          ))
        ) : chatHistory?.length === 0 ? (
          <div className="text-center text-gray-500 py-4">
            تاریخچه‌ای وجود ندارد.
          </div>
        ) : (
          chatHistory?.map((item, index) => (
            <div
              key={index + "_ali"}
              className="flex justify-between text-right p-4"
            >
              <div
                className={`w-full flex items-center justify-between h-full p-2  ${
                  item.id == chatId
                    ? "bg-black bg-opacity-5 dark:bg-opacity-5 rounded-lg shadow-sm"
                    : ""
                }`}
              >
                <div
                  className="flex-1 mx-2"
                  onClick={() => handleNewChat(item.id as string)}
                >
                  <div className="text-black truncate w-40">
                    {item.title || "متن آزمایشی برای چت"}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {moment
                      .utc(item.createdAt)
                      .local()
                      .format("jYYYY/jMM/jDD - HH:mm")}
                  </div>
                </div>
                <div className="text-xl text-gray-500 flex flex-col">
                  <Popover
                    trigger="hover"
                    content={
                      <>
                        <ModalEdit uid={item.id} />
                        {!item.isLocked ? (
                          <ModalRemove uid={item.id} />
                        ) : (
                          <div className="text-gray-500">
                            دسترسی حذف غیرفعال
                          </div>
                        )}
                      </>
                    }
                    placement="left"
                  >
                    <EllipsisIcon className="size-6" />
                  </Popover>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default History;
