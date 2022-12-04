import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import "./app.scss";

const App = (props: PropsWithChildren) => {
  return <RecoilRoot>{props.children}</RecoilRoot>;
};

export default App;
