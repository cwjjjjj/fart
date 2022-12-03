export default defineAppConfig({
  pages: ["pages/index/index", "pages/test/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    color: "#0000ff",
    selectedColor: "#00ff00",
    backgroundColor: "#ff0000",
    list: [
      {
        pagePath: "pages/index/index",
        text: "组件",
      },
      {
        pagePath: "pages/test/index",
        text: "接口",
      },
    ],
  },
  usingComponents: {},
});
