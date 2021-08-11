import React from "react";
import { Menu } from "antd";
import "./NavBar.scss";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <Menu className="navigation-menu" mode="horizontal">
          <Menu.Item key="1">menu1</Menu.Item>
          <Menu.Item key="2">menu2</Menu.Item>
          <Menu.Item key="3">menu3</Menu.Item>
        </Menu>
      </div>
    );
  }
}
