import * as React from "react";
import { connect } from "react-redux";
import "./style.less";
class InvitationAmbassador extends React.Component {
  public state = {
    latitude: 1,
    longitude: 1
  };
  public test = (position: any) => {
    const { longitude, latitude } = position.coords;
    this.setState({
      latitude,
      longitude
    });
  };
  public test2 = () => {
    if (window.postMessage) {
      window.postMessage("11111", "111");
    }
  };
  public render() {
    return (
      <div>
        <div onClick={this.test2}>test</div>
      </div>
    );
  }
}

const mapState = (state: any) => ({
  count: state.count
});
export default connect(mapState)(InvitationAmbassador);
