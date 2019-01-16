import * as React from "react";
import { connect } from "react-redux";
import "./style.less";
class InvitationDetail extends React.Component<any> {
  public state = {
    latitude: 1,
    longitude: 1
  };
  public test = () => {
    const { dispatch } = this.props;
    dispatch.myInvitation.getJsApiTicket();
  };
  public componentDidMount() {
    this.test();
  }
  public render() {
    return (
      <div>
        <div>test</div>
      </div>
    );
  }
}

export default connect()(InvitationDetail);
