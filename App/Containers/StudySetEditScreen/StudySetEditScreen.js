import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { StudySetEditScreenStyle } from "./StudySetEditScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";
import { useThemeColors } from "../../Hooks/useThemeColors";
import BackHeaderBar from "../../Components/Headers/BackHeaderBar";
import { useSetState } from "../../Hooks/useSetState";
import StudySetTransform from "../../Transforms/StudySetTransform";
import {
  AntDesign,
  MaterialCommunityIcons,
} from "../../Components/RNComponents/RNVectorIcons";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import { WithStudySetFetch } from "../../Business/WithStudySetFetch";
import RNFlatList from "../../Components/RNComponents/RNFlatList";
import UnderlineTextInput from "../../Components/UnderlineTextInput/UnderlineTextInput";
import BlockDivider from "../../Components/Dividers/BlockDivider";
import CardTransform from "../../Transforms/CardTransform";
import ShareService from "../../Services/ShareService";
import Entypo from "react-native-vector-icons/Entypo";
import { useModal } from "../../Hooks/useModal";

function StudySetEditScreen(props) {
  const { styles, createStudySet, updateStudySet } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const Modal = useModal();
  const paramStudySet = NavigationMethods.getParam("studySet", null);
  const [studySet, setStudySet] = useSetState(
    paramStudySet || new StudySetTransform(),
  );
  const [cards, setCards] = useState(studySet.transformedCards);
  const [state, setState] = useSetState({
    title: "",
  });

  useEffect(() => {
    if (paramStudySet) {
      setState({
        title: "Edit set",
      });
    } else {
      setState({
        title: "Create set",
      });
    }
  }, []);

  function onCreateSuccess(response) {
    NavigationMethods.goBack();
  }

  function onCreateFailed(response) {
    if (response.message) {
      Modal.showFailedModal({ content: response.message });
    } else {
      Modal.showFailedModal({
        content: "Some errors happened while creating your set",
      });
    }
  }

  function onDonePress() {
    const verifiedCards = getVerifiedCards();
    if (studySet.title.length === 0) {
      Modal.showFailedModal({ content: "Please give your study set a title" });
      return;
    } else if (verifiedCards.length < 2) {
      Modal.showFailedModal({
        content: "You need at least 2 cards to create a study set",
      });
      return;
    }
    const params = {
      ...studySet,
      cards: verifiedCards,
    };
    if (studySet._id.length > 0) {
      updateStudySet(studySet._id, params, onCreateSuccess, onCreateFailed);
    } else {
      createStudySet(params, onCreateSuccess, onCreateFailed);
    }
  }

  function getVerifiedCards() {
    return cards.filter(e => e.term.length > 0 && e.definition.length > 0);
  }

  async function onSharePress() {
    await ShareService.shareURL({
      message: "Check out this awesome study set!",
      url: "https://quizlet.com",
    });
  }

  function renderRightHeader() {
    return (
      <View style={styles.centerRow}>
        <TouchableOpacity style={styles.doneButton} onPress={onSharePress}>
          <Entypo
            name={"share"}
            size={20 * WIDTH_RATIO}
            color={Colors.primaryTitle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDonePress} style={styles.doneButton}>
          <MaterialCommunityIcons
            name={"check"}
            size={21 * WIDTH_RATIO}
            color={Colors.primaryTitle}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function onTitleChange(text) {
    setStudySet({
      title: text,
    });
  }
  function onDescriptionChange(text) {
    setStudySet({
      description: text,
    });
  }

  function onTermChange(index, text) {
    const _cards = [...cards];
    _cards[index] = {
      ..._cards[index],
      term: text,
    };
    setCards(_cards);
  }

  function onDefinitionChange(index, text) {
    const _cards = [...cards];
    _cards[index] = {
      ..._cards[index],
      definition: text,
    };
    setCards(_cards);
  }

  function onCardDelete(index) {
    const _cards = [...cards];
    _cards.splice(index, 1);
    setCards(_cards);
  }

  function onAddPress() {
    const _cards = [...cards];
    _cards.push(new CardTransform());
    setCards(_cards);
  }

  function renderCardItem({ item, index }) {
    return (
      <View style={styles.card}>
        <View style={styles.deleteButtonContainer}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={onCardDelete.bind(this, index)}>
            <MaterialCommunityIcons
              name={"close"}
              color={Colors.white}
              size={16 * WIDTH_RATIO}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardMain}>
          <UnderlineTextInput
            value={item.term}
            multiline={true}
            onChangeText={text => onTermChange(index, text)}
            title={"TERM"}
          />
          <BlockDivider height={12 * WIDTH_RATIO} />
          <UnderlineTextInput
            value={item.definition}
            multiline={true}
            onChangeText={text => onDefinitionChange(index, text)}
            title={"DEFINITION"}
          />
        </View>
      </View>
    );
  }

  function renderAddButton() {
    return (
      <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
        <View style={styles.plusCircle}>
          <AntDesign
            name={"plus"}
            size={24 * WIDTH_RATIO}
            color={Colors.white}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <Container statusBarColor={Colors.cardBackground}>
      <BackHeaderBar title={state.title} renderRight={renderRightHeader} />
      <RNScrollView>
        <View style={styles.header}>
          <UnderlineTextInput
            value={studySet.title}
            onChangeText={onTitleChange}
            title={"TITLE"}
          />
          <UnderlineTextInput
            value={studySet.description}
            onChangeText={onDescriptionChange}
            title={"DESCRIPTION"}
          />
        </View>
        <RNFlatList
          scrollEnabled={false}
          dividerHeight={16 * WIDTH_RATIO}
          data={cards}
          renderItem={renderCardItem}
          contentContainerStyle={styles.listContent}
          ListFooterComponent={renderAddButton}
        />
      </RNScrollView>
    </Container>
  );
}

export default compose(
  StudySetEditScreenStyle,
  WithStudySetFetch,
)(StudySetEditScreen);
