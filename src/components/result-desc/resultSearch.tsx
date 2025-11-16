"use client";
import { ScanSearch } from "lucide-react";
import { JSONTree } from "react-json-tree";

const ResultSearch = ({
  voice,
  lang,
  extract,
  obj,
  plaque,
  other,
}: {
  other?: any;
  voice?: any;
  lang?: string;
  extract?: string;
  obj?: any;
  plaque?: any;
}) => {
  const theme = {
    scheme: "oceanHem",
    author: "yourname",
    base00: "#002b36",
    base01: "#073642",
    base02: "#586e75",
    base03: "#657b83",
    base04: "#93a1a1",
    base05: "#fdf6e3",
    base06: "#eee8d5",
    base07: "#fefae0",
    base08: "#2aa198",
    base09: "#268bd2",
    base0A: "#d33682",
    base0B: "#859900",
    base0C: "#b58900",
    base0D: "#6c71c4",
    base0E: "#dc322f",
    base0F: "#cb4b16",

    tree: {
      margin: 0,
      padding: "10px",
      direction: "ltr",
      borderRadius: "12px",
      border: "1px solid #268bd2",
      backgroundColor: "#002b36",
    },
    node: {
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      paddingLeft: "10px",
      color: "#fdf6e3",
    },
    value: {
      padding: "5px",
      color: "#fdf6e3",
    },
    label: {
      fontWeight: "bold",
      color: "#268bd2",
    },
  };
  return (
    <div className="w-full border min-h-44 h-full p-4 rounded-lg">
      <div className="flex gap-3 items-center">
        <ScanSearch className="size-6 text-gray-500" />
        <span className="text-gray-500">نتایج جستجو</span>
      </div>
      <div className="mt-3">
        {extract && (
          <>
            <div>متن استخراج شده : {extract}</div>
            <div>زبان : {lang}</div>
          </>
        )}

        {obj && Array.isArray(obj) && obj.length > 0 && (
          <div className="mt-3">
            {obj.map((item: any, index: number) => {
              return (
                <div key={index} className="p-2 border-b">
                  {/* <span>
                  آیتم {index + 1}: {JSON.stringify(item)}
                </span> */}
                  {/* <ReactJson
                  src={item}
                  theme={"ocean"}
                  indentWidth={10}
                  style={{
                    direction: "ltr",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                /> */}
                  <JSONTree data={item} theme={theme} />
                </div>
              );
            })}
          </div>
        )}
        {voice && Array.isArray(voice) && (
          <>
            {voice?.map((item: any) => (
              <>
                <div>{item.transcription}</div>
              </>
            ))}
          </>
        )}

        <div>
          {plaque?.map((i: any, index: any) => (
            <div key={index}>
              <h3 className="font-bold">گروه {index + 1}</h3>
              {i.map((i: any, index: any) => (
                <div key={index}>
                  <h4>قسمت {index + 1}</h4>
                  <div className="flex flex-wrap flex-row-reverse py-2">
                    {i.map((item: any, index: any) => (
                      <span
                        className="py-1 px-2 rounded shadow-sm bg-gray-100 m-1"
                        key={index}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ResultSearch;
