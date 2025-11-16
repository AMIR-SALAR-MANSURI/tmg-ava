"use client";

import { Col, Image, Row, Tag } from "antd";
import { ScanSearch } from "lucide-react";
import React from "react";

const ImageSearch = ({ arraySimilarity }: { arraySimilarity?: any }) => {
  return (
    <div className="min-w-72 border h-full min-h-44 p-2 rounded-lg gap-2 justify-between">
      <div>
        <div className="flex gap-3 items-center">
          <ScanSearch className="size-6 text-gray-500" />
          <span className="text-gray-500">نمایش تصویر</span>
        </div>
      </div>

      <div className="items-center mt-3 flex w-full">
        <Row gutter={[16, 16]}>
          {arraySimilarity?.map((data: any, index: any) => (
            <div className="items-center">
              <Col
                xs={24}
                sm={24}
                lg={24}
                md={24}
                className="flex flex-col gap-2 items-center"
              >
                <img
                  key={index}
                  src={`data:image/jpg;base64,${data.IMG}`}
                  alt="Result Preview"
                  className="w-full max-h-96 object-contain rounded-lg"
                />

                <Tag color="blue" className="items-center text-center w-full">
                  درصد شباهت : {data.similarity}
                </Tag>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ImageSearch;
