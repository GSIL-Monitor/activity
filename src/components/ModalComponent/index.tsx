import * as React from "react";
import "./style.less";
interface IProps {
  visible: boolean;
  type?: string;
}
export class ModalComponent extends React.Component<IProps> {
  public render() {
    const { visible, children, type } = this.props;
    return (
      <div>{visible && <div className={type || "modal"}>{children}</div>}</div>
    );
  }
}
