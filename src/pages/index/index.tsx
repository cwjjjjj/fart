import { Button as BasicButton, View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import "taro-ui/dist/style/components/button.scss";

export default function index() {
  return (
    <View>
      index
      <BasicButton>basic button</BasicButton>
      <AtButton>按钮文案</AtButton>
    </View>
  );
}
