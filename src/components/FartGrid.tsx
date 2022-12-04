import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React from "react";
import { useFart } from "../hook/useFart";

const FartItem = () => {
  return <View>item</View>;
};

export default function FartGrid() {
  const { play, pause } = useFart(
    "https://media-qiniu.jellow.site/FruHln8SJsgTRJs2uiWLTYiAOHW2.mp3"
  );
  return (
    <View
      onClick={() => {
        console.log("click");
      }}
    >
      FartGrid
      <View onClick={play}>play</View>
      <View onClick={pause}>pause</View>
    </View>
  );
}
