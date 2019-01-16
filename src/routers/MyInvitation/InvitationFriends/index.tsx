import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../../types";
import "./style.less";

interface IProps {
  friends: any[];
}
class InvitationFriends extends React.Component<IProps> {
  public render() {
    console.log(this.props);
    const { friends = [] } = this.props;
    return (
      <div className="my-invitation-friends">
        <div className="my-invitation-friends-title">成功邀请好友列表</div>
        <div className="my-invitation-friends-split" />
        <div className="my-invitation-friends-list">
          {friends.length > 0 ? (
            friends.map((item, index) => (
              <div key={index} className="my-invitation-friends-item">
                <div className="my-invitation-friends-left">
                  <img
                    src={item.img}
                    alt="header"
                    className="my-invitation-friends-img"
                  />
                  <div className="my-invitation-friends-mobile">
                    {item.mobile}
                  </div>
                </div>
                <div className="my-invitation-friends-status">
                  {item.status}
                </div>
              </div>
            ))
          ) : (
            <div className="my-invitation-friends-nofriends">
              还没有好友哦，快去分享吧～
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapState = (state: IState) => ({
  friends: state.myInvitation.friends
});
export default connect(mapState)(InvitationFriends);
