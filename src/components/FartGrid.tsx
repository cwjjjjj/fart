import { css } from "@linaria/core";
import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React from "react";
import { useFart } from "../hook/useFart";

export const FartItem = () => {
  const { play, pause } = useFart(
    "https://media-qiniu.jellow.site/FruHln8SJsgTRJs2uiWLTYiAOHW2.mp3"
  );
  return (
    <View
      className={css`
     height:200px
     width:200px;
     background-color:rgba(0,0,0,0.3); 
     border-radius:50%;
     display:grid;
     justify-items:center;
     align-items:center;

     .icon{
      height:140px;
      width:140px;
     }
    `}
      onClick={play}
    >
      <Image className="icon" src={require("../assets/fart-icon.svg")} />
      经典
    </View>
  );
};

export default function FartGrid() {
  return (
    <View
      className={css`
        display: grid;
        grid-template: 1fr 1fr 1fr/1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
        gap: 4px;
      `}
    >
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
      <FartItem />
    </View>
  );
}
