import Taro from "@tarojs/taro";

export const useFart = (src: string) => {
  if (!src) {
    return;
  }
  const innerAudioContext = Taro.createInnerAudioContext();
  // innerAudioContext.autoplay = true;
  // FIX 微信该 api 存在 bug ，音频暂时不支持本地
  // innerAudioContext.src = "../assets/fart1.mp3";
  // innerAudioContext.src = "../assets/27.mp3";
  innerAudioContext.src = src;
  innerAudioContext.onError((res) => {
    console.log(res.errMsg);
    console.log(res.errCode);
  });
  return {
    play: innerAudioContext.play,
    pause: innerAudioContext.pause,
  };
};
