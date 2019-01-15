import * as React from "react";
import { ModalComponent } from "../../../components";
import closeImg from "../../../images/MyInvitation/close.png";
import qrCode from "../../../images/MyInvitation/qrCode.png";
import wxImgs from "../../../images/MyInvitation/wx.png";
import wxFriends from "../../../images/MyInvitation/wxFriends.png";
import "./style.less";
const shareImgs = [
  { title: "微信", img: wxImgs },
  { title: "朋友圈", img: wxFriends },
  { title: "面对面分享", img: qrCode }
];
export class ShareActions extends React.Component {
  public state = {
    visible: true
  };
  public onClose = () => {
    this.setState({
      visible: false
    });
  };
  public render() {
    const { visible } = this.state;
    return (
      <ModalComponent visible={visible} type="footer">
        <div className="share-actions">
          <div className="share-actions-content">
            {shareImgs.map(item => (
              <div key={item.title} className="share-actions-content-item">
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
    );
  }
}
