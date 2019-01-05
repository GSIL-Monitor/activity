import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const { lazy, Suspense, Component } = React;
const Extension = lazy(() => import("./routers/Extension"));
class RouterDom extends Component {
  public render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact={true} path="/" component={Extension} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
export default RouterDom;
