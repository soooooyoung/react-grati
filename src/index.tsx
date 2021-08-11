import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import { Provider } from "mobx-react";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "mobx-react-router";
import { Router } from "react-router";
import { RootStore } from "./stores";
import koKR from "antd/lib/locale/ko_KR";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

const rootStore = new RootStore();

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, rootStore.routing);
ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={koKR}>
      <Provider {...rootStore}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
