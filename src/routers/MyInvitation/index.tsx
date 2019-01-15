// import QRCode from "qrcode.react";
import * as React from "react";
import { connect } from "react-redux";
// import { ActivityRules } from "./ActivityRules";
// import { InvitationQRCode } from "./InvitationQRCode";
import { ShareActions } from "./ShareActions";
import "./style.less";
class MyInvitation extends React.Component {
  public render() {
    return (
      <div>
        {/* <ActivityRules /> */}
        {/* <InvitationQRCode /> */}
        <ShareActions />
      </div>
    );
  }
}

const mapState = (state: any) => ({
  count: state.count
});
export default connect(mapState)(MyInvitation);
