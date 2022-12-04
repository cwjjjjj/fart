export default defineAppConfig({
  pages: ["pages/index/index", "pages/test/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: false,
    color: "#0000ff",
    selectedColor: "#00ff00",
    backgroundColor: "#ff0000",
    list: [
      {
        pagePath: "pages/index/index",
        text: "主页",
        iconPath: "./assets/haha.png",
        selectedIconPath: "./assets/mask.png",
      },
      {
        pagePath: "pages/test/index",
        text: "我的",
        iconPath: "./assets/smell.png",
        selectedIconPath: "./assets/x_x.png",
      },
    ],
  },
});
