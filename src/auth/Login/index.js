import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { intruptResponse } from "../../AuthInterceptor";
import {  CHNAGE_VALUE } from "../../Store/action";
function Login(props) {
  console.log("props from parents", props);
  React.useEffect(() => {
  }, [])
  return (
    <div>
      login
    </div>)
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    action: (val) => dispatch(CHNAGE_VALUE(val))
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(Login);
