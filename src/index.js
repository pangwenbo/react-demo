import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import { mainRoutes } from "./routes";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <Switch>
          {/* 访问admin开头的组件都需要经过app */}
          {/*render={()=>{组件}}本身就是个组件，组件内部在引用你定义的组件，相当于又加了一层； */}
          <Route
            path="/admin"
            render={(routerProps) => {
              {
                /*此处传递的是路由信息，在组件中接受props,控制路由跳转传参等*/
              }
              console.log(routerProps);
              return <App {...routerProps} />;
            }}
          />
          {/* 路由白名单比如login */}
          {mainRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              ></Route>
            );
          })}
          {/* /路由重定向到admin */}
          <Redirect to="/admin" from="/" />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
