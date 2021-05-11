import React, { forwardRef, useImperativeHandle, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFunctionState } from "Hooks/useFunctionState";
import AppModal from "./AppModal";

function AppFailedModal(props, ref) {
  const { styles } = props;
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("");
  const [okText, setOkText] = useState("OK");
  const [okCallback, setOkCallback] = useFunctionState(() => {});
  const [backHandler, setBackHandler] = useFunctionState(close);

  function open({
    content = "",
    okCallback = () => {},
    okText = "OK",
    backHandler = null,
  }) {
    setContent(content);
    setOkText(okText);
    setOkCallback(okCallback);
    if (backHandler === false) {
      setBackHandler(() => {});
    } else {
      setBackHandler(close);
    }
    setVisible(true);
  }

  function close() {
    setVisible(false);
  }

  function closeWithCallback() {
    setVisible(false);
    okCallback();
  }

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return (
    <AppModal
      isVisible={visible}
      position={"middle"}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
      onBackdropPress={backHandler}
      onBackButtonPress={backHandler}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={closeWithCallback}
            style={styles.dualButton}>
            <Text style={styles.okText}>{okText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppModal>
  );
}

export default forwardRef(AppFailedModal);
