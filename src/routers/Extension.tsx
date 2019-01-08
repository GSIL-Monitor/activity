import * as React from "react";
import { connect } from "react-redux";
import './style.css'
class Extension extends React.Component {
  public render() {
    console.log(this.props);
    return <div className="test">Extension</div>;
  }
}

const mapState = (state: any) => ({
  count: state.count
});
export default connect(mapState)(Extension);
