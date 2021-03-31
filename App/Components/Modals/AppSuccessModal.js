import React, { forwardRef, useImperativeHandle, useState } from "react";
import { View, Text } from "react-native";
import { AppPromptModalStyle } from "./AppPromptModalStyle";
import { useFunctionState } from "Hooks/useFunctionState";
import AppModal from "./AppModal";
import PrimaryButton from "../Buttons/PrimaryButton";
import AntDesign from "react-native-vector-icons/AntDesign";
import { WIDTH_RATIO } from "Themes/Metrics";
import { Colors } from "Themes";

function AppSuccessModal(props, ref) {
  const { styles } = props;
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("");
  const [okText, setOkText] = useState("Đồng ý");
  const [okCallback, setOkCallback] = useFunctionState(() => {});
  const [backHandler, setBackHandler] = useFunctionState(close);

  function open(content = "", okCallback = () => {}, backHandler) {
    setContent(content);
    setOkCallback(okCallback);
    if (backHandler) {
      setBackHandler(backHandler);
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
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={backHandler}
      onBackButtonPress={backHandler}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={"checkcircle"}
            color={Colors.activePrimary}
            size={70 * WIDTH_RATIO}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.footer}>
          <PrimaryButton
            title={okText}
            onPress={closeWithCallback}
            style={styles.singleButton}
          />
        </View>
      </View>
    </AppModal>
  );
}

export default forwardRef(AppSuccessModal);
