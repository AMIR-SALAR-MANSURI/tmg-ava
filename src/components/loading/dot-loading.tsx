import React from "react";

const DotLoading = () => {
  return (
    <>
      <div className="flex gap-1.5 py-0.5">
        <span className="sr-only">Loading...</span>
        <div className="size-2 bg-transparent/65 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="size-2 bg-transparent/65 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="size-2 bg-transparent/65 rounded-full animate-bounce"></div>
      </div>
    </>
  );
};

export default DotLoading;
