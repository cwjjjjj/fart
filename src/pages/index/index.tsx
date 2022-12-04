import { Button as BasicButton, View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import "taro-ui/dist/style/components/button.scss";
import { css, cx } from "@linaria/core";
import { useRecoilState } from "recoil";
import { testState } from "../../store/store";

const test = css`
  color: red;
`;

export default function Index() {
  const [testRecoil, setTestRecoil] = useRecoilState(testState);
  return (
    <View
      className={css`
        color: pink;
      `}
      onClick={() => {
        setTestRecoil("testtttt");
      }}
    >
      {testRecoil}
      123
    </View>
  );
}
