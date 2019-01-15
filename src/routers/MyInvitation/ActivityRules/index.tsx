import * as React from "react";
import { ModalComponent } from "../../../components/ModalComponent";
import closeImg from "../../../images/MyInvitation/loginClose.png";
import "./style.less";
export class ActivityRules extends React.Component {
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
        <div className="rules-content">
          <div className="rules-content-title">活动规则</div>
          <img
            className="rules-content-close"
            src={closeImg}
            onClick={this.onClose}
          />
          <div className="rules-content-texts">
            <div className="rules-content-tite2">活动时间</div>
            <span className="rules-content-text">
              即日起2019年只12月31日24:00
            </span>
            <div className="rules-content-tite2">活动规则</div>
            <div className="rules-content-tite3">一、如何获得奖励</div>
            <div className="rules-content-text">
              1.点击邀请好友，分享页面，邀请新用户加入爱享到。新用户通过邀请页面领取7日会员权益，注册成功后，双方均可获得7日会员权益，累计无上限。
            </div>
            <div className="rules-content-text">
              2.邀请多名好友则可多次获得奖励。
            </div>
            <div className="rules-content-tite3">二、会员权益使用规范</div>
            <div className="rules-content-text">
              1.邀请及邀请成功后会员权益自动到账，不能提现，不能转增他人，如遇发放延迟，请您耐心等待。
            </div>
            <div className="rules-content-text">
              2.会员权益可在【我的】页面【plus会员】中查看。
            </div>
            <div className="rules-content-tite3">三、其他注意事项</div>
            <div className="rules-content-text">
              1.用户界定：同一登录账号、同一手机号、同一终端设备号、同一支付账号、同一收货地址、同一IP、或其他合理显示同一用户的情形，均视为同一用户，新人礼包仅限新用户领取使用。
            </div>
            <div className="rules-content-text">
              2.用户在活动期间存在违规行为（包括但不限于机器作弊、刷IP等），爱享到有权取消用户的活动参与资格，并收回用户获得的优惠券，必要时有权追究法律责任。
            </div>
            <div className="rules-content-text">
              3.爱享到有权根据活动实际情况对活动规则进行变动或调整。
            </div>
            <div className="rules-content-text">
              4.该活动最终解释权由爱享到平台所有。
            </div>
          </div>
        </div>
      </ModalComponent>
    );
  }
}
