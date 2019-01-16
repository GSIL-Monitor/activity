import * as React from "react";
import { connect } from "react-redux";
import { ModalComponent } from "../../../components";
import closeImg from "../../../images/MyInvitation/close.png";
import qrCode from "../../../images/MyInvitation/qrCode.png";
import wxImgs from "../../../images/MyInvitation/wx.png";
import wxFriends from "../../../images/MyInvitation/wxFriends.png";
import { IState, IVisible } from "../../../types";
import InvitationQRCode from "../InvitationQRCode";
import "./style.less";
const shareImgs = [
  { title: "微信", img: wxImgs },
  { title: "朋友圈", img: wxFriends },
  { title: "面对面分享", img: qrCode }
];
interface IProps {
  visible: IVisible;
  dispatch: any;
}
class ShareActions extends React.Component<IProps> {
  public onClose = () => {
    const { dispatch } = this.props;
    dispatch.visible.setState({
      ShareActions: false
    });
  };
  public showInvitationQRCode = () => {
    const { dispatch } = this.props;
    dispatch.visible.setState({
      InvitationQRCode: true
    });
  };
  public shareFriends = (index: number) => {
    if (typeof window.postMessage !== "function") {
      return;
    }
    window.postMessage(index, "share");
  };
  public actions = (index: number) => {
    if (index === 2) {
      this.showInvitationQRCode();
    } else {
      this.shareFriends(index);
    }
    this.onClose();
  };
  public render() {
    const { visible } = this.props;
    return (
      <div>
        <ModalComponent visible={visible.ShareActions} type="footer">
          <div className="share-actions">
            <div className="share-actions-content">
              {shareImgs.map((item, index) => (
                <div
                  key={item.title}
                  className="share-actions-content-item"
                  onClick={this.actions.bind(this, index)}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="share-actions-content-img"
                  />
                  <div className="share-actions-content-text">{item.title}</div>
                </div>
              ))}
            </div>
            <div className="share-actions-content-footer">
              <img
                onClick={this.onClose}
                src={closeImg}
                alt=""
                className="share-actions-content-close"
              />
            </div>
          </div>
        </ModalComponent>
        <InvitationQRCode />
      </div>
    );
  }
}
const mapState = (state: IState) => ({
  visible: state.visible
});
export default connect(mapState)(ShareActions);
