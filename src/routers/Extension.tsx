import * as React from "react";
import { connect } from "react-redux";

const Extension = () => {
  return <div>Extension</div>;
};

export default connect(state => state)(Extension);
