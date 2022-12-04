import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";

export default function index() {
  return (
    <View>
      index
      <Text className={styles.test}>text</Text>
    </View>
  );
}
