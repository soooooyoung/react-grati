import React from "react";
import { Route } from "react-router";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import "antd/dist/antd.css";
function App() {
  return (
    <>
      <NavBar />
      <Route path="/" component={MainPage} />
    </>
  );
}

export default App;
