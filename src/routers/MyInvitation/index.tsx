import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../types";
import ActivityRules from "./ActivityRules";
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
      <div>
        <div onClick={this.ShowModal.bind(this, "ShareActions")}>分享</div>
        <div onClick={this.ShowModal.bind(this, "ActivityRules")}>活动规则</div>
        <ActivityRules />
        <ShareActions />
      </div>
    );
  }
}

const mapState = (state: IState) => ({});
export default connect(mapState)(MyInvitation);
