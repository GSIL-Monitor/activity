// tslint:disable
import * as React from "react";
import { connect } from "react-redux";
import { AppConfig } from "../../helper/config";
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
    navigator.geolocation.getCurrentPosition(this.test);
  };
  public render() {
    const { latitude, longitude } = this.state;
    return (
      <div>
        <div onClick={this.test2}>test</div>
        <a href={AppConfig.AppConfig}>{longitude}</a>/
        <a href={AppConfig.AppConfig}>{latitude}</a>
      </div>
    );
  }
}

const mapState = (state: any) => ({
  count: state.count
});
export default connect(mapState)(InvitationAmbassador);
