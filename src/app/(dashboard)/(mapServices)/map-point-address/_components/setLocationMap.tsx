import useTmgStore from "@/app/(dashboard)/store";
import useGetAddress from "@/hooks/map/useGetAddress";
import { Typography } from "antd";
import React, { useEffect } from "react";

const SetLocationMap = () => {
  const { locations, setLocation, address, setAddress } = useTmgStore();

  const getAddress = useGetAddress({
    lat: locations?.latitudes,
    long: locations?.longitudes,
  });

  useEffect(() => {
    const handleMessage = async (event: any) => {
      if (event.origin === process.env.NEXT_PUBLIC_MAP_URL) {
        const data: { longitude: string; latitude: string } = JSON.parse(
          event.data
        );

        console.log(data.latitude, data.longitude);
        setLocation({
          latitudes: data.latitude,
          longitudes: data.longitude,
        });
      }
    };

    setAddress(getAddress.data?.full_address);

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [getAddress.data]);
  return (
    <>
      <div className="w-full md:w-[30%] p-4">
        <Typography.Title level={4}>موقعیت جغرافیای</Typography.Title>
        <Typography.Paragraph>
          عرض جفرافیای : {locations?.latitudes}
        </Typography.Paragraph>
        <Typography.Paragraph>
          طول جفرافیای : {locations?.longitudes}
        </Typography.Paragraph>
        <Typography.Title level={4}>موقعیت منطقه ای</Typography.Title>
        <Typography.Paragraph>آدرس : {address}</Typography.Paragraph>
      </div>
      <div className="w-full md:w-[70%] h-full md:h-auto bg-gray-50  p-4">
        <iframe
          src={`${process.env.NEXT_PUBLIC_MAP_URL}/map/getpointfrommap?zoom=14&latitude=35.72387338825216&longitude=51.431163210478864`}
          className="w-full h-full rounded-lg border-solid border-slate-400"
          style={{ border: "none" }}
        />
      </div>
    </>
  );
};

export default SetLocationMap;
