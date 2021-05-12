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
import { studySets } from "../../Fixtures/StudySet";
import StudySetNavigator from "./StudySetNavigator/StudySetNavigator";
import { useSelector } from "react-redux";

function StudySetDetailScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const paramStudySet = NavigationMethods.getParam(
    "studySet",
    new StudySetTransform(),
  );
  const { studySetDetail, customer } = useSelector(state => state);
  const studySet = studySetDetail[paramStudySet._id] || paramStudySet;
  const { transformedCards, title } = studySet;

  async function onSharePress() {
    await ShareService.shareURL({
      message: "Check out this awesome study set!",
      url: "https://quizlet.com",
    });
  }

  function onEditPress() {
    NavigationMethods.goToScreen("StudySetEditScreen", {
      studySet: studySet,
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
        {studySet.transformedCreator._id === customer._id && (
          <TouchableOpacity style={styles.utilButton} onPress={onEditPress}>
            <Feather
              name={"edit"}
              size={20 * WIDTH_RATIO}
              color={Colors.primaryTitle}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }

  function onFlashCardPress() {
    NavigationMethods.goToScreen("FlashCardScreen", {
      cards: transformedCards,
    });
  }

  return (
    <Container statusBarColor={Colors.cardBackground}>
      <BackHeaderBar renderRight={renderRightHeader} title={title} />
      <RNScrollView>
        <StudySetCarousel cards={transformedCards} />
        <StudySetNavigator cards={transformedCards} />
        <StudySetCardList cards={transformedCards} />
      </RNScrollView>
      <View style={styles.footer}>
        <PrimaryButton
          title={"Study this set"}
          isAvailable={true}
          onPress={onFlashCardPress}
          labelStyle={styles.h8Bold}
        />
      </View>
    </Container>
  );
}

export default compose(StudySetDetailScreenStyle)(StudySetDetailScreen);
