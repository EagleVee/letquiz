import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { HomeScreenStyle } from "./HomeScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";

function HomeScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();

  return (
    <Container>
      <RNScrollView>
        <Text>HomeScreen</Text>
      </RNScrollView>
    </Container>
  );
}

export default compose(HomeScreenStyle)(HomeScreen)