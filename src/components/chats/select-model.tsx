import { Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { Bot } from "lucide-react";
import React from "react";

interface Props {
  className: string;
  placeholder?: string;
  option: DefaultOptionType[] | undefined;
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: any;
  loading: boolean;
  disable?: boolean;
}

// [&_.ant-select-arrow]:hidden [&_.ant-select-clear]:hidden
const SelectModel = ({
  option,
  className,
  placeholder,
  onChange,
  value,
  defaultValue,
  loading,
  disable,
}: Props) => {
  return (
    <>
      <Select
        className={`${className} [&_.ant-select-selector]:!border-none [&_.ant-select-selector]:!shadow-none [&_.ant-select-selector]:hover:bg-gray-50
    [&_.ant-select-selector]:!bg-gradient-to-r 
    [&_.ant-select-selector]:!from-gray-50 
    [&_.ant-select-selector]:!to-gray-100 
    [&_.ant-select-selector]:hover:!from-gray-100 
    [&_.ant-select-selector]:hover:!to-gray-200
    [&_.ant-select-selector]:!rounded-xl
    [&_.ant-select-selector]:!transition-all
    [&_.ant-select-selector]:!duration-300
    `}
        size="large"
        placeholder={placeholder}
        allowClear={false}
        options={option}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        loading={loading}
        suffixIcon={<Bot className="w-5 h-5 text-gray-500" />}
        disabled={disable}
      />
    </>
  );
};

export default SelectModel;
