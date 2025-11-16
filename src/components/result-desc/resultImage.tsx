"use client";

import { Image } from "antd";
import { ScanSearch } from "lucide-react";
import React from "react";

const ResultImage = ({
  base,
  base64,
  baseArray,
  arraySimilarity,
}: {
  base?: string;
  base64?: string;
  baseArray?: any;
  arraySimilarity?: any;
}) => {
  const isValidBase64 = base64?.startsWith("data:image");

  return (
    <div className="min-w-72 border h-full min-h-44 p-2 rounded-lg flex flex-col gap-2 justify-between">
      <div>
        <div className="flex gap-3 items-center">
          <ScanSearch className="size-6 text-gray-500" />
          <span className="text-gray-500">نمایش تصویر</span>
        </div>
      </div>

      <div className="items-center mt-3 flex-grow w-full">
        {base64 ? (
          <Image
            src={`data:image/jpg;base64,${base64 || ""}`}
            alt="نمایش عکس"
            className="bg-white rounded-lg"
            rootClassName="w-full"
          />
        ) : (
          <></>
          // <Image
          //   src={`data:image/jpg;base64,${base64 || ""}`}
          //   alt="نمایش عکس"
          //   className="bg-white rounded-lg"
          //   rootClassName="w-full"
          // />
        )}
        {base ? (
          <Image
            src={`data:image/jpg;base64,${base || ""}`}
            alt="نمایش عکس"
            className="bg-white rounded-lg"
            rootClassName="w-full"
          />
        ) : (
          <></>
          // <Image
          //   src={`data:image/jpg;base64,${base64 || ""}`}
          //   alt="نمایش عکس"
          //   className="bg-white rounded-lg"
          //   rootClassName="w-full"
          // />
        )}
        {baseArray?.map((data: any, index: any) => (
          <div className="flex flex-col gap-4">
            <img
              key={index}
              src={`data:image/jpg;base64,${data}`}
              alt="Result Preview"
              className="w-full max-h-96 object-contain rounded-lg"
            />
          </div>
        ))}

        {arraySimilarity?.map((data: any, index: any) => (
          <div className="flex gap-4">
            <img
              key={index}
              src={`data:image/jpg;base64,${data.IMG}`}
              alt="Result Preview"
              className="w-full max-h-96 object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultImage;
