import * as React from "react";
import { connect } from "react-redux";
import spotImg from "../../images/InvitationDetail/spot.png";
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
      <div className="invitation-detail">
        <div className="invitation-detail-header" />
        <div className="invitation-detail-button">
          <div className="invitation-detail-button-image" />
        </div>
        <div className="invitation-detail-border">
          <div className="invitation-detail-border-header">
            <img
              src={spotImg}
              alt=""
              className="invitation-detail-border-spot"
            />
            <div className="invitation-detail-border-title">精选餐厅</div>
            <img
              src={spotImg}
              alt=""
              className="invitation-detail-border-spot"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(InvitationDetail);
