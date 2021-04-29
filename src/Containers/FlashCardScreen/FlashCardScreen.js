import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { FlashCardScreenStyle } from "./FlashCardScreenStyle";
import Container from "Components/Container/Container";
import { useThemeColors } from "../../Hooks/useThemeColors";
import { deviceWidth, WIDTH_RATIO } from "../../Themes/Metrics";
import BackHeaderBar from "../../Components/Headers/BackHeaderBar";
import CardStack, { Card } from "react-native-card-stack-swiper";
import FlipCardLargeItem from "../../Components/FlipCardLargeItem/FlipCardLargeItem";

function FlashCardScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const cards = NavigationMethods.getParam("cards", []);
  const [progress, setProgress] = useState(0);
  const [studyCount, setStudyCount] = useState(0);
  const data = useMemo(() => {
    return [...cards].sort(() => (Math.random() > 0.5 ? 1 : -1));
  }, [studyCount]);
  const swiperRef = useRef();

  function renderProgressBar() {
    const progressBarStyle = {
      width: `${(progress / cards.length) * 100}%`,
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

  function onSwipedLeft(index) {}

  function onSwipedRight(index) {}

  function renderEmpty() {
    return <View />;
  }

  return (
    <Container statusBarColor={Colors.cardBackground}>
      <BackHeaderBar
        backgroundColor={Colors.cardBackground}
        title={`${progress} / ${cards.length}`}
      />
      <View style={styles.flexOne}>{renderProgressBar()}</View>
      <CardStack
        verticalSwipe={false}
        renderNoMoreCards={renderEmpty}
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
        ref={swiperRef}>
        {data.map((item, index) => {
          return (
            <Card key={index.toString()}>
              <FlipCardLargeItem card={item} />
            </Card>
          );
        })}
      </CardStack>
    </Container>
  );
}

export default compose(FlashCardScreenStyle)(FlashCardScreen);
