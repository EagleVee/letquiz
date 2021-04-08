import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { LoginScreenStyle } from "./LoginScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";
import BackHeaderBar from "../../Components/Headers/BackHeaderBar";
import LoginInput from "../../Components/LoginInput/LoginInput";
import BlockDivider from "../../Components/Dividers/BlockDivider";
import { WIDTH_RATIO } from "../../Themes/Metrics";

function LoginScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();
  const [state, setState] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  function onTextChange(key, value) {
    setState({
      [key]: value,
    });
  }

  return (
    <Container>
      <BackHeaderBar />
      <RNScrollView>
        <View style={styles.main}>
          <Text style={styles.h7}>LOGIN WITH YOUR ACCOUNT</Text>
          <BlockDivider height={24 * WIDTH_RATIO} />
          <LoginInput
            value={state.username}
            onChangeText={onTextChange}
            inputKey={"username"}
            placeholder={"Your username"}
            title={"USERNAME"}
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
        </View>
      </RNScrollView>
    </Container>
  );
}

export default compose(LoginScreenStyle)(LoginScreen);
