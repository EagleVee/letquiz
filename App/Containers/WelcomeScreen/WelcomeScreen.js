import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { WelcomeScreenStyle } from "./WelcomeScreenStyle";
import Container from "Components/Container/Container";
import { RNFlatList, RNScrollView } from "Components/RNComponents";
import FastImage from "Components/RNComponents/FastImage";
import WelcomeImage from "Assets/Images/welcome_image.png";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { deviceWidth, WIDTH_RATIO } from "../../Themes/Metrics";
import BlockDivider from "../../Components/Dividers/BlockDivider";
import { useThemeColors } from "../../Hooks/useThemeColors";

const welcomeText = [
  "90% of students who use Quizlet report higher grades",
  "You bring the brains, we’ll bring everything else",
  "Your next win is just a fact away",
];

function WelcomeScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const [activeCarousel, setActiveCarousel] = useState(0);

  function renderTextItem({ item, index }) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  }

  function onSnapToItem(index) {
    setActiveCarousel(index);
  }

  function onRegisterPress() {
    NavigationMethods.resetStackToTab();
  }

  function onLoginPress() {
    NavigationMethods.resetStackToTab();
  }

  return (
    <Container>
      <RNScrollView>
        <View style={styles.main}>
          <Text style={styles.h4Bold}>Quizlet</Text>
          <FastImage source={WelcomeImage} style={styles.welcomeImage} />
          <BlockDivider height={24 * WIDTH_RATIO} />
          <Pagination
            dotsLength={welcomeText.length}
            activeDotIndex={activeCarousel}
            dotColor={Colors.primary}
            inactiveDotColor={Colors.inactivePrimary}
            dotStyle={styles.activeDot}
            inactiveDotStyle={styles.dot}
          />
          <Carousel
            data={welcomeText}
            renderItem={renderTextItem}
            onSnapToItem={onSnapToItem}
            sliderWidth={deviceWidth}
            contentContainerCustomStyle={styles.contentContainer}
            itemWidth={deviceWidth}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={onRegisterPress}>
            <Text style={styles.registerText}>Register FREE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
            <Text style={styles.loginText}>Or login</Text>
          </TouchableOpacity>
        </View>
      </RNScrollView>
    </Container>
  );
}

export default compose(WelcomeScreenStyle)(WelcomeScreen);
