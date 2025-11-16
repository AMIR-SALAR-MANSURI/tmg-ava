import { usePathname } from "next/navigation";
import { ItemMenu } from "./menu-type";
import { useEffect, useState } from "react";

const findKeys = (
  pathname: string,
  items: ItemMenu[]
): { openKeys: string[]; selectedKey: string } => {
  let openKeys: string[] = [];
  let selectedKey: string = "";

  const traverse = (items: ItemMenu[], parentKey: string[] = []) => {
    for (const item of items) {
      const currentKey = [...parentKey, item.key];

      if (item.children) {
        traverse(item.children, currentKey);
      }

      if (item.url && pathname.startsWith(item.url)) {
        if (!selectedKey && item.url.length > selectedKey.length) {
          selectedKey = item.key;
          openKeys = currentKey;
        }
      }
    }
  };

  traverse(items);
  return { openKeys, selectedKey };
};

export function useMenuHook(items: ItemMenu[]) {
  const pathname = usePathname();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKey, setSelectedKey] = useState<string>("");

  useEffect(() => {
    const { openKeys, selectedKey } = findKeys(pathname, items);
    setOpenKeys(openKeys);
    setSelectedKey(selectedKey);
  }, [pathname, items.find((i) => i.key == "directory")?.children?.length]);

  return { openKeys, setOpenKeys, selectedKey, setSelectedKey, pathname };
}
