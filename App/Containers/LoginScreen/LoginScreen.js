import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { LoginScreenStyle } from "./LoginScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";

function LoginScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();

  return (
    <Container>
      <RNScrollView>
        <Text>LoginScreen</Text>
      </RNScrollView>
    </Container>
  );
}

export default compose(LoginScreenStyle)(LoginScreen)