import React from "react";
import { Route } from "react-router";
import { Affix } from "antd";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import "antd/dist/antd.css";
import "./App.scss";

function App() {
  return (
    <>
      <Affix>
        <NavBar />{" "}
      </Affix>
      <Route path="/" component={MainPage} />
    </>
  );
}

export default App;
