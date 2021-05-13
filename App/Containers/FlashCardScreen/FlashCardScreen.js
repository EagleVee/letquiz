import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { FlashCardScreenStyle } from "./FlashCardScreenStyle";
import Container from "Components/Container/Container";
import { useThemeColors } from "../../Hooks/useThemeColors";
import { deviceWidth, WIDTH_RATIO } from "../../Themes/Metrics";
import BackHeaderBar from "../../Components/Headers/BackHeaderBar";
import CardStack, { Card } from "react-native-card-stack-swiper";
import FlipCardLargeItem from "../../Components/FlipCardLargeItem/FlipCardLargeItem";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import BlockDivider from "../../Components/Dividers/BlockDivider";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "../../Components/RNComponents/RNVectorIcons";
import RNProgressBar from "../../Components/RNComponents/RNProgressBar";
import { randomizeCards } from "../../Utils/cardShuffler";

function FlashCardScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const cards = NavigationMethods.getParam("cards", []);
  const [progress, setProgress] = useState(1);
  const [shuffle, setShuffle] = useState(true);
  const [learnData, setLearnData] = useState([]);
  const [learnCount, setLearnCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [unlearned, setUnlearned] = useState([]);
  const [learned, setLearned] = useState([]);
  const swiperRef = useRef();

  function randomizeLearnData(cards) {
    const randomCards = randomizeCards(cards);
    setLearnSet(randomCards);
  }

  function setLearnSet(cards) {
    setLearnData(cards);
    setLearnCount(learnCount + 1);
    setFinished(false);
    setProgress(1);
  }

  function onShufflePress() {
    const _shuffle = !shuffle;
    setShuffle(_shuffle);
    if (_shuffle) {
      randomizeLearnData(cards);
    } else {
      setLearnSet(cards);
    }
  }

  function renderProgressBar() {
    const progressDivided =
      learnData.length > 0 ? progress / learnData.length : 0;
    return (
      <View style={styles.progressBarContainer}>
        <RNProgressBar progress={progressDivided * 100} />
      </View>
    );
  }

  function onSwipedLeft(index) {
    const _unlearned = [...unlearned];
    _unlearned.push(learnData[index]);
    setUnlearned(_unlearned);
    increaseProgress();
  }

  function onSwipedRight(index) {
    const _learned = [...learned];
    _learned.push(learnData[index]);
    setLearned(_learned);
    increaseProgress();
  }

  function increaseProgress() {
    if (progress < learnData.length) {
      setProgress(progress);
    } else {
      setFinished(true);
    }
  }

  function renderEmpty() {
    return (
      <View style={styles.cardStack}>
        <View style={styles.empty}>
          <View style={styles.emptyMain}>
            <AntDesign
              name={"smileo"}
              color={Colors.primaryTitle}
              size={56 * WIDTH_RATIO}
            />
            <BlockDivider height={12 * WIDTH_RATIO} />
            <Text style={styles.h7Bold}>Nice work!</Text>
            {unlearned.length > 0 ? (
              <Text style={styles.h8}>
                Keep practicing to master the remaining {unlearned.length}.
              </Text>
            ) : (
              <Text style={styles.h8}>
                Congratulations, you have mastered your lesson!
              </Text>
            )}
          </View>
          {unlearned.length > 0 ? (
            <View style={styles.emptyFooter}>
              <PrimaryButton title={"Continue"} onPress={onContinue} />
              <BlockDivider height={12 * WIDTH_RATIO} />
              <PrimaryButton
                title={"Reset"}
                onPress={onReset}
                isAvailable={false}
              />
            </View>
          ) : (
            <View style={styles.emptyFooter}>
              <PrimaryButton title={"Learn again"} onPress={onReset} />
              <BlockDivider height={12 * WIDTH_RATIO} />
              <PrimaryButton
                title={"Go back"}
                onPress={NavigationMethods.goBack}
                isAvailable={false}
              />
            </View>
          )}
        </View>
      </View>
    );
  }

  function onContinue() {
    randomizeLearnData(unlearned);
    setUnlearned([]);
  }

  function onReset() {
    if (shuffle) {
      randomizeLearnData(cards);
    } else {
      setLearnSet(cards);
    }
    setUnlearned([]);
    setLearned([]);
  }

  function renderStack() {
    return (
      <CardStack
        key={learnCount.toString()}
        style={styles.cardStack}
        verticalSwipe={false}
        horizontalSwipe={true}
        renderNoMoreCards={() => <View />}
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
        ref={swiperRef}>
        {learnData.map((item, index) => {
          return (
            <Card key={Date.now() + index}>
              <FlipCardLargeItem card={item} />
            </Card>
          );
        })}
      </CardStack>
    );
  }

  useEffect(() => {
    randomizeLearnData(cards);
  }, []);

  return (
    <Container statusBarColor={Colors.cardBackground}>
      <BackHeaderBar
        backgroundColor={Colors.cardBackground}
        titleStyle={styles.headerTitle}
        title={`${progress} / ${learnData.length}`}
      />
      <View style={styles.container}>
        {renderProgressBar()}
        {finished ? renderEmpty() : renderStack()}
      </View>
      <View style={styles.footer}>
        <View style={styles.centerRow}>
          <View style={styles.unlearnedContainer}>
            <Text style={styles.unlearnedNumber}>{unlearned.length}</Text>
          </View>
          <View style={styles.flexOne} />
          <View style={styles.learnedContainer}>
            <Text style={styles.learnedNumber}>{learned.length}</Text>
          </View>
        </View>
        <BlockDivider height={12 * WIDTH_RATIO} />
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity onPress={onReset} style={styles.footerButton}>
            <MaterialCommunityIcons
              name={"restart"}
              size={32 * WIDTH_RATIO}
              color={Colors.primaryTitle}
            />
          </TouchableOpacity>
          <BlockDivider width={16 * WIDTH_RATIO} />
          <TouchableOpacity
            onPress={onShufflePress}
            style={styles.footerButton}>
            <Ionicons
              name={"shuffle"}
              size={32 * WIDTH_RATIO}
              color={shuffle ? Colors.primaryNeon : Colors.primaryTitle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

export default compose(FlashCardScreenStyle)(FlashCardScreen);
