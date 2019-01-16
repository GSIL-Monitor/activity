import * as React from "react";
import { connect } from "react-redux";
import activityImg from "../../images/MyInvitation/activity.png";
import invitationImg from "../../images/MyInvitation/invitation.png";
import { IState } from "../../types";
import ActivityRules from "./ActivityRules";
import InvitationFriends from "./InvitationFriends";
import ShareActions from "./ShareActions";
import "./style.less";

interface IProps {
  dispatch: any;
}
class MyInvitation extends React.Component<IProps> {
  public ShowModal = (key: string) => {
    const { dispatch } = this.props;
    dispatch.visible.setState({
      [key]: true
    });
  };
  public render() {
    return (
      <div className="my-invitation">
        <div className="my-invitation-banner">
          <img
            src={activityImg}
            className="my-invitation-activity"
            onClick={this.ShowModal.bind(this, "ActivityRules")}
          />
        </div>
        <img src={invitationImg} className="my-invitation-invitation" />
        <InvitationFriends />
        <div className="my-invitation-padding-bottom" />

        <div className="my-invitation-footer">
          <div
            className="my-invitation-footer-button"
            onClick={this.ShowModal.bind(this, "ShareActions")}
          >
            邀请好友
          </div>
        </div>
        {/* 活动规则 */}
        <ActivityRules />

        {/* 分享弹出窗 */}
        <ShareActions />
      </div>
    );
  }
}

const mapState = (state: IState) => ({});
export default connect(mapState)(MyInvitation);
