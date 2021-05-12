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

function FlashCardScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const cards = NavigationMethods.getParam("cards", []);
  const [progress, setProgress] = useState(0);
  const [shuffle, setShuffle] = useState(true);
  const [studyCount, setStudyCount] = useState(0);
  const [learnData, setLearnData] = useState([]);
  const [unlearned, setUnlearned] = useState([]);
  const [learned, setLearned] = useState([]);
  const swiperRef = useRef();

  useEffect(() => {
    randomizeCard(cards);
  }, [studyCount]);

  function randomizeCard(cards) {
    const randomCards = [...cards].sort(() => (Math.random() > 0.5 ? 1 : -1));
    setLearnData(randomCards);
  }

  function onShufflePress() {
    const _shuffle = !shuffle;
    setShuffle(_shuffle);
    if (_shuffle) {
      randomizeCard(cards);
    } else {
      setLearnData(cards);
    }
  }

  function renderProgressBar() {
    const progressBarStyle = {
      width: `${((progress + 1) / learnData.length) * 100}%`,
      backgroundColor: Colors.primaryNeon,
      height: 2 * WIDTH_RATIO,
    };

    return (
      <View style={styles.progressBarContainer}>
        <View style={styles.progressTrack}>
          <View style={progressBarStyle}>
            <View style={styles.progressThumb} />
          </View>
        </View>
      </View>
    );
  }

  function onSwipedLeft(index) {
    const _unlearned = [...unlearned];
    _unlearned.push(learnData[index]);
    setUnlearned(_unlearned);
    setProgress(progress + 1);
  }

  function onSwipedRight(index) {
    const _learned = [...learned];
    _learned.push(learnData[index]);
    setLearned(_learned);
    setProgress(progress + 1);
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
    randomizeCard(unlearned);
    setUnlearned([]);
    setProgress(0);
  }

  function onReset() {
    if (shuffle) {
      randomizeCard(cards);
    } else {
      setLearnData(cards);
    }
    setUnlearned([]);
    setLearned([]);
    setProgress(0);
  }

  function renderStack() {
    return (
      <CardStack
        style={styles.cardStack}
        verticalSwipe={false}
        horizontalSwipe={true}
        renderNoMoreCards={renderEmpty}
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

  return (
    <Container statusBarColor={Colors.cardBackground}>
      <BackHeaderBar
        backgroundColor={Colors.cardBackground}
        titleStyle={styles.headerTitle}
        title={`${progress + 1} / ${cards.length}`}
      />
      <View style={styles.container}>
        {renderProgressBar()}
        {progress === learnData.length ? renderEmpty() : renderStack()}
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
