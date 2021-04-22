import React, { useContext, useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
import Feather from "react-native-vector-icons/Feather";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import Entypo from "react-native-vector-icons/Entypo";
import ShareService from "../../Services/ShareService";

function StudySetDetailScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const studySet = NavigationMethods.getParam(
    "studySet",
    new StudySetTransform(),
  );
  const { transformedCards } = studySet;

  async function onSharePress() {
    await ShareService.shareURL({
      message: "Check out this awesome study set!",
      url: "https://quizlet.com",
    });
  }

  function renderRightHeader() {
    return (
      <View style={styles.centerRow}>
        <TouchableOpacity style={styles.utilButton} onPress={onSharePress}>
          <Entypo
            name={"share"}
            size={20 * WIDTH_RATIO}
            color={Colors.primaryTitle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.utilButton}>
          <Feather
            name={"more-vertical"}
            size={20 * WIDTH_RATIO}
            color={Colors.primaryTitle}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Container statusBarColor={Colors.cardBackground}>
      <BackHeaderBar renderRight={renderRightHeader} />
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
