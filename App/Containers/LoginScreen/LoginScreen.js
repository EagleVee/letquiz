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

function LoginScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const [state, setState] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  function onTextChange(key, value) {
    setState({
      [key]: value,
    });
  }

  function onLoginPress() {}

  function onForgotPasswordPress() {}

  return (
    <Container statusBarColor={Colors.cardBackground}>
      <BackHeaderBar />
      <View style={styles.main}>
        <Text style={styles.h7}>LOGIN WITH YOUR ACCOUNT</Text>
        <BlockDivider height={24 * WIDTH_RATIO} />
        <LoginInput
          value={state.username}
          onChangeText={onTextChange}
          inputKey={"email"}
          placeholder={"Your email"}
          title={"EMAIL"}
        />
        <BlockDivider height={12 * WIDTH_RATIO} />
        <LoginInput
          value={state.password}
          onChangeText={onTextChange}
          inputKey={"password"}
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
      </View>
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
