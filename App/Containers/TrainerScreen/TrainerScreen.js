import React, { useContext, useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { TrainerScreenStyle } from "./TrainerScreenStyle";
import Container from "Components/Container/Container";
import { RNFlatList, RNScrollView, RNVideo } from "Components/RNComponents";
import images from "Themes/Images";
import I18n from "Locales";
import BlockTitle from "Components/Dividers/BlockTitle";
import BlockDivider from "Components/Dividers/BlockDivider";
import InstructionStep from "./InstructionStep";
import { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import TrainerLargeCardItem from "Components/TrainerLargeCardItem/TrainerLargeCardItem";
import { useSelector } from "react-redux";
import Instruction from "Config/Instruction";

function TrainerScreen(props) {
  const { styles } = props;
  const NavigationMethods = useNavigationMethods();
  const featuredTrainers = useSelector(state => state.trainer.featuredTrainers);
  const [videoSource, setVideoSource] = useState(null);
  const [videoPlay, setVideoPlay] = useState(false);

  function onTrainerPress(item) {
    NavigationMethods.goToTrainerDetail(item);
  }

  function onPlayPress(item) {
    setVideoSource(item.videoSource);
    setVideoPlay(true);
  }

  function onVideoPlay(paused) {
    setVideoPlay(!paused);
  }

  function renderInstructionItem({ item, index }) {
    return <InstructionStep item={item} index={index} />;
  }

  function renderTrainerItem({ item, index }) {
    return (
      <TrainerLargeCardItem
        item={item}
        onPress={onTrainerPress}
        onPlayPress={onPlayPress}
      />
    );
  }

  return (
    <Container notSafeArea>
      <RNScrollView style={styles.container}>
        <ImageBackground
          source={images.Background.instructionBackground}
          style={styles.banner}>
          <Text style={styles.title}>{I18n.t("TrainerScreen.Title")}</Text>
          <Text style={styles.subTitle}>
            {I18n.t("TrainerScreen.SubTitle")}
          </Text>
        </ImageBackground>
        <BlockDivider />
        <BlockTitle title={I18n.t("TrainerScreen.InstructionTitle")} />
        <RNFlatList
          contentContainerStyle={styles.listContent}
          data={Instruction}
          renderItem={renderInstructionItem}
          horizontal
        />
        <BlockDivider height={40 * WIDTH_RATIO} />
        <RNFlatList
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={featuredTrainers}
          renderItem={renderTrainerItem}
          dividerHeight={32 * WIDTH_RATIO}
        />
      </RNScrollView>
    </Container>
  );
}

export default compose(TrainerScreenStyle)(TrainerScreen);
