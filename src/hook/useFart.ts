import Taro from "@tarojs/taro";

const DEFAULT_FART =
  "https://media-qiniu.jellow.site/FruHln8SJsgTRJs2uiWLTYiAOHW2.mp3";

export const useFart = (src: string) => {
  const innerAudioContext = Taro.createInnerAudioContext();
  // innerAudioContext.autoplay = true;
  // FIX 微信该 api 存在 bug ，音频暂时不支持本地
  // innerAudioContext.src = "../assets/fart1.mp3";
  // innerAudioContext.src = "../assets/27.mp3";
  innerAudioContext.src = src ?? DEFAULT_FART;
  innerAudioContext.onError((res) => {
    console.log(res.errMsg);
    console.log(res.errCode);
  });
  return {
    play: innerAudioContext.play,
    pause: innerAudioContext.pause,
  };
};
