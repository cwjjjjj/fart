import { CoverView } from "@tarojs/components";

export const list = [
  {
    pagePath: "/pages/index/index",
    text: "首页",
  },
  {
    pagePath: "/pages/test/index",
    text: "分类",
  },
];
export default function index() {
  return (
    <CoverView>
      {list.map((item, index) => {
        return (
          <CoverView key={index}>
            <CoverView>{item.text}</CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
}
