import React from "react";
import { Dropdown, Layout, Menu, Avatar, message } from "antd";
import { withRouter } from "react-router-dom";
import * as Icon from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { adminRoutes } from "../../routes";
import { connect } from "react-redux";
import logo from "./logo.png";
import "./frame.css";
import { clearToken } from "../../utils/auth";
const { Header, Content, Sider } = Layout;

const routes = adminRoutes.filter((route) => route.isShow);

function Index(props) {
  const popMenu = (
    <Menu
      onClick={(p) => {
        if (p.key === "logOut") {
          clearToken();
          props.history.push("/login");
        } else {
          message.info(p.key);
        }
      }}
    >
      <Menu.Item key="notice">通知中心</Menu.Item>
      <Menu.Item key="setting">设置</Menu.Item>
      <Menu.Item key="logOut">退出</Menu.Item>
    </Menu>
  );
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <img src={logo} alt="logo" style={{ height: "50px" }}></img>
        </div>
        <Dropdown overlay={popMenu}>
          <span
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            <Avatar></Avatar> 超级管理员
            <DownOutlined />
          </span>
        </Dropdown>
        ,
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {routes.map((route) => {
              return (
                <Menu.Item
                  key={route.path}
                  onClick={(p) => props.history.push(p.key)}
                >
                  {React.createElement(Icon[route.icon], {
                    style: { fontSize: "16px", color: "#08c" },
                  })}
                  {route.title}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              padding: 10,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(withRouter(Index));
