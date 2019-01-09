import Button from "antd-mobile/lib/button"; // 加载 JS
import "antd-mobile/lib/button/style/css";
import * as React from "react";
import { connect } from "react-redux";
import "./style.less";
class Extension extends React.Component {
  public render() {
    return (
      <div className="test">
        <Button type="primary">111</Button>
      </div>
    );
  }
}

const mapState = (state: any) => ({
  count: state.count
});
export default connect(mapState)(Extension);
