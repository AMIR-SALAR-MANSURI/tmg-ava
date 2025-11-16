import { Skeleton } from "antd";

const HistoryItemSkeleton: React.FC = () => (
  <div className="p-4 flex justify-between rtl text-right">
    <div className="flex-1 mx-2">
      <Skeleton.Input active size="small" style={{ width: 200 }} />
      <Skeleton.Input
        active
        size="small"
        style={{ width: 140, marginTop: 8 }}
      />
    </div>
    {/* <Skeleton.Avatar shape="circle" size="small" active /> */}
  </div>
);

export default HistoryItemSkeleton;
