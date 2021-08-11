import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../img/logo_ramdo.png";
// import golo from "../img/logo_doram.png";
import "./NavBar.scss";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <div className="navigation-logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <Menu id="navigation-menu" mode="horizontal">
          <Menu.Item key="1" title="Home">
            <Link to="/" />
            Home
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/ramdotron" />
            Ramdotron
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/guide" />
            Guide
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
