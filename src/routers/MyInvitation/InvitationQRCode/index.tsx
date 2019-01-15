import QRCode from "qrcode.react";
import * as React from "react";
import { ModalComponent } from "../../../components";
import { AppConfig } from "../../../helper/config";
import closeImg from "../../../images/MyInvitation/loginClose.png";
import "./style.less";
export class InvitationQRCode extends React.Component {
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
      <ModalComponent visible={visible}>
        <div className="invitation-code">
          <QRCode value={AppConfig.SHARE_URL} size={178} />
          <img
            className="invitation-code-close"
            src={closeImg}
            onClick={this.onClose}
          />
          <div className="invitation-code-title">成功邀请好友</div>
          <div className="invitation-code-text">
            双方都可获得7日会员体验权益
          </div>
        </div>
      </ModalComponent>
    );
  }
}
