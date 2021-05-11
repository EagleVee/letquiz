import React, { forwardRef, useImperativeHandle, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFunctionState } from "Hooks/useFunctionState";
import AppModal from "./AppModal";
import I18n from "Locales";
import { useSetState } from "Hooks/useSetState";
import { useThemeColors } from "../../Hooks/useThemeColors";

export interface OptionModalProps {
  title: string;
  content: string;
  okText: string;
  cancelText: string;
  okCallback: () => {};
  cancelCallback: () => {};
  backHandler: boolean;
}

function AppOptionModal(props, ref) {
  const { styles } = props;
  const Colors = useThemeColors();
  const [state, setState] = useSetState({
    visible: false,
    title: I18n.t("RegularTerm.Confirm"),
    content: "",
    okText: I18n.t("RegularTerm.OK"),
    cancelText: I18n.t("RegularTerm.Cancel"),
  });
  const [okCallback, setOkCallback] = useFunctionState(() => {});
  const [cancelCallback, setCancelCallback] = useFunctionState(() => {});
  const [backHandler, setBackHandler] = useFunctionState(close);

  function open({
    title = state.title,
    content = state.content,
    okText = state.okText,
    cancelText = state.cancelText,
    okCallback = () => {},
    cancelCallback = () => {},
    backHandler = true,
  }) {
    setOkCallback(okCallback);
    setCancelCallback(cancelCallback);
    if (backHandler === false) {
      setBackHandler(() => {});
    } else {
      setBackHandler(close);
    }
    setState({
      title: title,
      content: content,
      okText: okText,
      cancelText: cancelText,
      visible: true,
    });
  }

  function close() {
    setState({
      visible: false,
    });
  }

  function onOkPress() {
    setState({
      visible: false,
    });
    okCallback();
  }

  function onCancelPress() {
    setState({
      visible: false,
    });
    cancelCallback();
  }

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  const { title, content, okText, cancelText, visible } = state;

  function renderButton(title, onPress) {
    return (
      <TouchableOpacity onPress={onOkPress} style={styles.dualButton}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }

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
          <TouchableOpacity onPress={onOkPress} style={styles.dualButton}>
            <Text style={styles.okText}>{okText}</Text>
          </TouchableOpacity>
          <View style={styles.footerDivider} />
          <TouchableOpacity onPress={onCancelPress} style={styles.dualButton}>
            <Text style={styles.h8}>{cancelText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppModal>
  );
}

export default forwardRef(AppOptionModal);
