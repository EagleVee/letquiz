import React, { useContext, useEffect, useMemo, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { StudySetDetailScreenStyle } from "./StudySetDetailScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";
import BackHeaderBar from "../../Components/Headers/BackHeaderBar";
import { useThemeColors } from "../../Hooks/useThemeColors";
import StudySetTransform from "../../Transforms/StudySetTransform";
import StudySetCarousel from "./StudySetCardCarousel/StudySetCardCarousel";
import StudySetCardList from "../../Components/StudySetCardList/StudySetCardList";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

function StudySetDetailScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const studySet = NavigationMethods.getParam(
    "studySet",
    new StudySetTransform(),
  );
  const { transformedCards } = studySet;

  return (
    <Container statusBarColor={Colors.cardBackground}>
      <BackHeaderBar />
      <RNScrollView>
        <StudySetCarousel cards={transformedCards} />
        <StudySetCardList cards={transformedCards} />
        <View style={styles.footer}>
          <PrimaryButton
            title={"Study this set"}
            isAvailable={true}
            labelStyle={styles.h8Bold}
          />
        </View>
      </RNScrollView>
    </Container>
  );
}

export default compose(StudySetDetailScreenStyle)(StudySetDetailScreen);
