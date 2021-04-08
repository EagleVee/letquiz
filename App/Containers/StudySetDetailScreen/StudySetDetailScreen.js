import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { StudySetDetailScreenStyle } from "./StudySetDetailScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";

function StudySetDetailScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();

  return (
    <Container>
      <RNScrollView>
        <Text>StudySetDetailScreen</Text>
      </RNScrollView>
    </Container>
  );
}

export default compose(StudySetDetailScreenStyle)(StudySetDetailScreen)