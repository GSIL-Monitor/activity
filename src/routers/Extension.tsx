import * as React from "react";
import { connect } from "react-redux";
import "./style.less";
class Extension extends React.Component {
  public render() {
    return <div className="test">111</div>;
  }
}

const mapState = (state: any) => ({
  count: state.count
});
export default connect(mapState)(Extension);
