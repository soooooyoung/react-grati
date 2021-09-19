import React, { CSSProperties } from "react";
import { Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { RootStore } from "../stores";
import { inject } from "mobx-react";
import logo from "../img/logo_navy.png";

import "./NavBar.scss";

type Props = {
  rootStore?: RootStore;
};

@inject((rootStore: RootStore) => ({
  rootStore: rootStore,
}))
export default class NavBar extends React.Component<Props> {
  render() {
    const { rootStore } = this.props;
    const sideMenuStyle: CSSProperties = {
      color: "#d6d6d6",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      fontWeight: 300,
    };

    const menu = (
      <Menu>
        <Menu.Item key="home" title="Home">
          <Link to="/" />
          HOME
        </Menu.Item>
        <Menu.Item key="journal" disabled={!rootStore?.loginStore.loginStatus}>
          <Link to="/journal" />
          JOURNALS
        </Menu.Item>
        <Menu.Item key="review">
          <Link to="/review" />
          REVIEW
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about" />
          ABOUT
        </Menu.Item>
        {/* login / logout */}
        <Menu.Item
          key="log"
          style={{
            ...sideMenuStyle,
            borderTopStyle: "dashed",
            borderTopWidth: 1,
            marginTop: 20,
          }}
        >
          <Link to="/login" />
          Log In
        </Menu.Item>
        <Menu.Item key="signup" style={sideMenuStyle}>
          <Link to="/signup" />
          Sign Up
        </Menu.Item>
      </Menu>
    );
    return (
      <>
        <div id="navigation-bar-xs">
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <MenuOutlined />
            </a>
          </Dropdown>
        </div>
        <div className="navigation-bar noselect">
          <div className="navigation-logo">
            <img className="logo" src={logo} alt="" />
          </div>
          <Menu
            id="navigation-menu"
            mode="horizontal"
            triggerSubMenuAction="click"
          >
            <Menu.Item key="home" title="Home">
              <Link to="/" />
              HOME
            </Menu.Item>
            <Menu.Item
              key="journal"
              disabled={!rootStore?.loginStore.loginStatus}
            >
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
            {/* login / logout */}
            <Menu.Item key="log" style={sideMenuStyle}>
              <Link to="/login" />
              {rootStore?.loginStore.loginStatus ? "Log Out" : "Log In"}
            </Menu.Item>
            <Menu.Item key="signup" style={sideMenuStyle}>
              <Link to="/signup" />
              Sign Up
            </Menu.Item>
          </Menu>
        </div>
      </>
    );
  }
}
