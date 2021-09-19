import React from "react";
import { Route, Switch } from "react-router";
import { Affix } from "antd";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/login/LoginPage";
import NavBar from "./components/NavBar";
import "antd/dist/antd.css";
import "./App.scss";

function App() {
  return (
    <>
      <Affix>
        <NavBar />
      </Affix>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
