import React from "react";
import { connect } from "react-redux";

export const WithRedux = (OriginalComponent) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(function (props) {
    return <OriginalComponent {...props} />;
  });
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
