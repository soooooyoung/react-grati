import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../img/logo_navy.png";

import "./NavBar.scss";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <div className="navigation-logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <Menu id="navigation-menu" mode="horizontal">
          <Menu.Item key="home" title="Home">
            <Link to="/" />
            HOME
          </Menu.Item>
          <Menu.Item key="journal">
            <Link to="/journal" />
            JOURNAL
          </Menu.Item>
          <Menu.Item key="review">
            <Link to="/review" />
            REVIEW
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about" />
            ABOUT
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
