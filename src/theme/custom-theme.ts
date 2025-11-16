import { ThemeConfig } from "antd";

const CustomTheme: ThemeConfig = {
  components: {
    Divider: {
      margin: 50,
    },
    Card: {
      boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.12)",
    },
    Menu: {
      borderRadius: 0,
      borderRadiusLG: 0,
      itemBorderRadius: 0,
      subMenuItemBorderRadius: 0,
      itemSelectedColor: "rgb(67,67,71)",
      itemSelectedBg: "rgba(213, 215, 215, 1)",
      groupTitleColor: "rgba(67, 67, 71, 1)",
      itemActiveBg: "rgba(213, 215, 215, 1)",
      itemColor: "rgb(67,67,71)",
      colorSplit: "rgba(5,5,5,0)",
      iconSize: 16,
      itemHeight: 44,
      itemMarginBlock: 2,
    },
    Table: {
      rowSelectedBg: "rgb(228,242,241)",
      rowSelectedHoverBg: "rgb(213,237,235)",
    },
  },
  token: {
    fontFamily: "IRANSansfanum",
    colorBgLayout: "#F0EFEF",
    colorPrimary: "#303434",
    colorLink: "#4564DF",
    colorError: "#F43F5E",
    fontSize: 16,
    wireframe: false,
  },
};

export default CustomTheme;
