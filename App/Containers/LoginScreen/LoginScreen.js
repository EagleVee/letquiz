import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { LoginScreenStyle } from "./LoginScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";
import BackHeaderBar from "../../Components/Headers/BackHeaderBar";
import LoginInput from "../../Components/LoginInput/LoginInput";
import BlockDivider from "../../Components/Dividers/BlockDivider";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { useThemeColors } from "../../Hooks/useThemeColors";
import { WithAuth } from "../../Business/WithAuth";
import lodash from "lodash";
import { validateEmail } from "../../Utils/validator";
import { useModal } from "../../Hooks/useModal";
import { useSetState } from "../../Hooks/useSetState";
import UnderlineTextInput from "../../Components/UnderlineTextInput/UnderlineTextInput";

function LoginScreen(props) {
  const { styles, login } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const Modal = useModal();
  const [state, setState] = useSetState({
    email: "",
    password: "",
  });

  function onLoginPress() {
    if (validateEmail(state.email)) {
      login(
        state.email,
        state.password,
        NavigationMethods.resetStackToTab,
        onLoginFailed,
      );
    } else {
      Modal.showFailedModal({
        content:
          "Your email is invalid, please enter a valid email and try again",
      });
    }
  }

  function onLoginFailed(response) {
    if (response.message) {
      Modal.showFailedModal({
        content: response.message,
      });
    } else {
      Modal.showFailedModal({
        content: "Some errors happened, please try again",
      });
    }
  }

  function onForgotPasswordPress() {}

  return (
    <Container statusBarColor={Colors.cardBackground}>
      <BackHeaderBar />
      <RNScrollView style={styles.main}>
        <Text style={styles.h7}>LOGIN WITH YOUR ACCOUNT</Text>
        <BlockDivider height={24 * WIDTH_RATIO} />
        <UnderlineTextInput
          value={state.email}
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
        <PrimaryButton title={"Login"} onPress={onLoginPress} />
        <TouchableOpacity
          onPress={onForgotPasswordPress}
          style={styles.forgotPasswordButton}>
          <Text style={styles.h8BoldPrimary}>Forgot your password?</Text>
        </TouchableOpacity>
      </RNScrollView>
      <View style={styles.footer}>
        <Text style={[styles.h8Bold, styles.alignCenter]}>
          By login, I accept{" "}
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
  LoginScreenStyle,
  WithAuth,
)(LoginScreen);
