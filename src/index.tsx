import { init } from "@rematch/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.less";
import * as models from "./models";
import Router from "./Router";
// 初始化 store
const store = init({
  models
});

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
