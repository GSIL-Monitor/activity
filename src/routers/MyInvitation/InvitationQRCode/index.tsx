import QRCode from "qrcode.react";
import * as React from "react";
import { connect } from "react-redux";
import { ModalComponent } from "../../../components";
import { AppConfig } from "../../../helper/config";
import closeImg from "../../../images/MyInvitation/loginClose.png";
import { IState, IVisible } from "../../../types";
import "./style.less";

interface IProps {
  visible: IVisible;
  dispatch: any;
}
class InvitationQRCode extends React.Component<IProps> {
  public onClose = () => {
    const { dispatch } = this.props;
    dispatch.visible.setState({
      InvitationQRCode: false
    });
  };
  public render() {
    const { visible } = this.props;
    return (
      <ModalComponent visible={visible.InvitationQRCode}>
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
const mapState = (state: IState) => ({
  visible: state.visible
});
export default connect(mapState)(InvitationQRCode);
