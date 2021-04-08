import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { TestScreenStyle } from "./TestScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";

function TestScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();

  return (
    <Container>
      <RNScrollView>
        <Text>TestScreen</Text>
      </RNScrollView>
    </Container>
  );
}

export default compose(TestScreenStyle)(TestScreen)