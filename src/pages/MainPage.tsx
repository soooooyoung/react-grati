import React from "react";
import { RootStore } from "../stores";
import "./MainPage.scss";

type Props = {
  rootStore: RootStore;
};

class MainPage extends React.Component<Props> {
  render() {
    return <div className="mainpage">mainpage</div>;
  }
}

export default MainPage;
