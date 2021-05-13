import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { useThemeColors } from "Hooks/useThemeColors";
import { LearnScreenStyle } from "./LearnScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";
import BackHeaderBar from "../../Components/Headers/BackHeaderBar";
import RNProgressBar from "../../Components/RNComponents/RNProgressBar";
import { useSetState } from "../../Hooks/useSetState";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import {
  FontAwesome,
  MaterialCommunityIcons,
} from "../../Components/RNComponents/RNVectorIcons";
import StudySetTransform from "../../Transforms/StudySetTransform";
import { getLearnSet, randomizeCards } from "../../Utils/cardShuffler";

function LearnScreen(props) {
  const { styles, getHeaderTextStyle } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const cards = NavigationMethods.getParam("cards", [
    {
      term: "123",
      definition: "456",
    },
    {
      term: "abc",
      definition: "xyz",
    },
    {
      term: "1007",
      definition: "0108",
    },
  ]);
  const [state, setState] = useSetState({
    progress: 0,
    firstRunResult: 0,
    secondRunResult: 0,
    unlearned: [],
    learned: [],
    learnData: [],
    stage: 0,
  });
  const {
    progress,
    firstRunResult,
    secondRunResult,
    unlearned,
    stage,
    learned,
    learnData,
  } = state;

  useEffect(() => {
    const randomCards = randomizeCards(cards);
    const learnSet = getLearnSet(cards, true, true, true);
    console.log("LEARN SET", learnSet);
    setState({
      learnData: learnSet,
    });
  }, []);

  function renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.centerRow}>
          <TouchableOpacity
            onPress={NavigationMethods.goBack}
            style={styles.closeButton}>
            <MaterialCommunityIcons
              name={"close"}
              color={Colors.primaryTitle}
              size={24 * WIDTH_RATIO}
            />
          </TouchableOpacity>
          <View style={styles.headerRow}>
            <View style={styles.headerItem}>
              <Text style={styles.headerTextInactive}>
                {state.learnData.length}
              </Text>
            </View>
            <FontAwesome
              name={"long-arrow-right"}
              size={16 * WIDTH_RATIO}
              color={Colors.inactive}
            />
            <View style={styles.headerItem}>
              <Text style={getHeaderTextStyle(stage, 1)}>
                {state.firstRunResult}
              </Text>
              <MaterialCommunityIcons
                name={"check"}
                size={16 * WIDTH_RATIO}
                color={stage === 1 ? Colors.active : Colors.inactive}
              />
            </View>
            <FontAwesome
              name={"long-arrow-right"}
              size={16 * WIDTH_RATIO}
              color={Colors.inactive}
            />
            <View>
              <Text style={getHeaderTextStyle(stage, 2)}>
                {state.secondRunResult}
              </Text>
              <MaterialCommunityIcons
                name={"check-all"}
                size={16 * WIDTH_RATIO}
                color={stage === 2 ? Colors.active : Colors.inactive}
              />
            </View>
          </View>
        </View>
        {renderProgressBar()}
      </View>
    );
  }

  function renderProgressBar() {
    const progressDivided =
      learnData.length > 0 ? progress / learnData.length : 0;
    return (
      <View style={styles.progressBarContainer}>
        <RNProgressBar progress={progressDivided * 100} showThumb={false} />
      </View>
    );
  }

  return (
    <Container>
      {renderHeader()}
      {/*<View style={styles.container}>{renderProgressBar()}</View>*/}
    </Container>
  );
}

export default compose(LearnScreenStyle)(LearnScreen);
