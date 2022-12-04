import { Button as BasicButton, View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import "taro-ui/dist/style/components/button.scss";
import { css, cx } from "@linaria/core";

const test = css`
  color: red;
`;

export default function index() {
  return (
    <View
      className={css`
        color: pink;
      `}
    >
      index
      <BasicButton>basic button</BasicButton>
      <AtButton>按钮文案</AtButton>
    </View>
  );
}
