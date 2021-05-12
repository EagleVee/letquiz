import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { RegisterScreenStyle } from "./RegisterScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";
import BackHeaderBar from "../../Components/Headers/BackHeaderBar";
import BlockDivider from "../../Components/Dividers/BlockDivider";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import LoginInput from "../../Components/LoginInput/LoginInput";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import UnderlineTextInput from "../../Components/UnderlineTextInput/UnderlineTextInput";
import { useThemeColors } from "../../Hooks/useThemeColors";
import { useModal } from "../../Hooks/useModal";
import { validateEmail } from "../../Utils/validator";
import { WithAuth } from "../../Business/WithAuth";
import { useSetState } from "../../Hooks/useSetState";

function RegisterScreen(props) {
  const { styles, register } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const Modal = useModal();
  const [state, setState] = useSetState({
    email: "",
    password: "",
    name: "",
    school: "",
  });

  function onRegisterPress() {
    if (state.email.length === 0 || state.password.length === 0) {
      Modal.showFailedModal({ content: "Email and password are required" });
      return;
    }

    if (!validateEmail(state.email)) {
      Modal.showFailedModal({ content: "Please enter an valid email" });
      return;
    }

    if (state.password.length < 6) {
      Modal.showFailedModal({
        content: "Your password need to have more than 6 characters",
      });
      return;
    }

    register(state, NavigationMethods.resetStackToTab, onRegisterFailed);
  }

  function onRegisterFailed(response) {
    if (response.message) {
      Modal.showFailedModal({
        content: response.message,
      });
    } else {
      Modal.showFailedModal({
        content:
          "Some error happened while creating your account, please try again",
      });
    }
  }

  return (
    <Container statusBarColor={Colors.cardBackground}>
      <BackHeaderBar />
      <View style={styles.main}>
        <Text style={styles.h7}>REGISTER A NEW ACCOUNT</Text>
        <BlockDivider height={24 * WIDTH_RATIO} />
        <UnderlineTextInput
          value={state.username}
          onChangeText={text => {
            setState({
              email: text,
            });
          }}
          placeholder={"Your email"}
          title={"EMAIL"}
        />
        <BlockDivider height={12 * WIDTH_RATIO} />
        <UnderlineTextInput
          value={state.password}
          onChangeText={text => {
            setState({
              password: text,
            });
          }}
          secureTextEntry={true}
          placeholder={"Your password"}
          title={"PASSWORD"}
        />
        <BlockDivider height={40 * WIDTH_RATIO} />
        <UnderlineTextInput
          value={state.name}
          onChangeText={text => {
            setState({
              name: text,
            });
          }}
          placeholder={"Your name"}
          title={"NAME"}
        />
        <BlockDivider height={40 * WIDTH_RATIO} />
        <UnderlineTextInput
          value={state.school}
          onChangeText={text => {
            setState({
              school: text,
            });
          }}
          placeholder={"Your school"}
          title={"SCHOOL"}
        />
        <BlockDivider height={40 * WIDTH_RATIO} />
        <PrimaryButton title={"Register"} onPress={onRegisterPress} />
      </View>
      <View style={styles.footer}>
        <Text style={[styles.h8Bold, styles.alignCenter]}>
          By register, I accept{" "}
          <Text style={styles.h8BoldPrimary}>
            terms of service and privacy policy
          </Text>{" "}
          of Quizlet
        </Text>
      </View>
    </Container>
  );
}

export default compose(
  RegisterScreenStyle,
  WithAuth,
)(RegisterScreen);
