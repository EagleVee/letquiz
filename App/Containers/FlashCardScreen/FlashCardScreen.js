import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { FlashCardScreenStyle } from "./FlashCardScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";

function FlashCardScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();

  return (
    <Container>
      <RNScrollView>
        <Text>FlashCardScreen</Text>
      </RNScrollView>
    </Container>
  );
}

export default compose(FlashCardScreenStyle)(FlashCardScreen)