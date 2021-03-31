import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { SubscriptionCodeInputStyle } from "./SubscriptionCodeInputStyle";
import PropTypes from "prop-types";
import TitledTextInput from "../TitledTextInput/TitledTextInput";
import I18n from "../../Locales";

function SubscriptionCodeInput(props) {
  const { styles } = props;

  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  function onCodeChange(text) {
    setCode(text);
  }

  return (
    <TitledTextInput
      title={I18n.t("ProfileScreen.CodeInputTitle")}
      value={code}
      onChangeText={onCodeChange}
      showButton={true}
      onButtonPress={() => {
        // setCodeError("Mã không đúng định dạng, vui lòng kiểm tra lại.");
      }}
      error={codeError}
      {...props}
    />
  );
}

SubscriptionCodeInput.propTypes = {
  titleBackgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
};

SubscriptionCodeInput.defaultProps = {};

export default compose(SubscriptionCodeInputStyle)(SubscriptionCodeInput);
