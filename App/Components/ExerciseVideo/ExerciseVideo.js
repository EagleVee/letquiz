import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  BackHandler,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { compose } from "ramda";
import { ExerciseVideoStyle } from "./ExerciseVideoStyle";
import PropTypes from "prop-types";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import CircularTimer from "../CircularTimer/CircularTimer";
import IconExpand from "Assets/Images/Icons/IconExpand.png";
import FastImage from "../RNComponents/FastImage";
import Video from "react-native-video";
import Orientation from "react-native-orientation-locker";
import IconPlayback from "../../Assets/Images/Icons/IconPlayback.png";
import IconPlay from "../../Assets/Images/Icons/IconPlayWhite.png";
import IconPause from "../../Assets/Images/Icons/IconPause.png";
import * as Animatable from "react-native-animatable";
import IconCheck from "Assets/Svgs/SharedIcons/IconCheckWhite.svg";
import PrimaryGradientBackground from "../Backgrounds/PrimaryGradientBackground";
import I18n from "../../Locales";
import { isValid } from "../../Utils/type";

function ExerciseVideo(props) {
  const {
    styles,
    source,
    thumbnailSource,
    duration,
    onFinished,
    finished,
    onToggleFullscreen,
    onPaused,
  } = props;
  const [fullscreen, setFullscreen] = useState(false);
  const [paused, setPaused] = useState(props.paused === true);
  const [ended, setEnded] = useState(false);
  const [showControlOverlay, setShowControlOverlay] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(thumbnailSource && paused);

  const videoStyle = fullscreen ? styles.fullscreenVideo : styles.video;
  const containerStyle = fullscreen
    ? styles.fullscreenContainer
    : styles.container;

  const timerContainerStyle = fullscreen
    ? styles.timerContainer
    : styles.hidden;

  function toggleFullscreen() {
    if (fullscreen) {
      setFullscreen(false);
      Orientation.lockToPortrait();
    } else {
      setFullscreen(true);
      Orientation.lockToLandscape();
    }
  }

  function handleOrientation(orientation) {
    if (orientation === "LANDSCAPE-LEFT" || orientation === "LANDSCAPE-RIGHT") {
      setFullscreen(true);
      StatusBar.setHidden(true);
    } else {
      setFullscreen(false);
      StatusBar.setHidden(false);
    }
  }

  const handleBack = () => {
    if (fullscreen) {
      setFullscreen(false);
      return true;
    }

    return false;
  };

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);
    BackHandler.addEventListener("hardwareBackPress", handleBack);

    return () => {
      Orientation.removeOrientationListener(handleOrientation);
      BackHandler.removeEventListener("hardwareBackPress", handleBack);
    };
  }, []);

  function onLoad(nativeEvent) {}

  function onVideoEnd() {
    setEnded(true);
  }

  function onPlayPress() {
    if (paused) {
      setShowThumbnail(false);
      setPaused(false);
      onPaused(false);
    } else {
      setPaused(true);
      onPaused(true);
    }
  }

  useEffect(() => {
    const showControlTimeout = setTimeout(() => {
      if (!ended && showControlOverlay) {
        setShowControlOverlay(false);
      }
    }, 2000);

    return () => {
      clearTimeout(showControlTimeout);
    };
  }, [paused, showControlOverlay]);

  useEffect(() => {
    onToggleFullscreen(fullscreen);
  }, [fullscreen]);

  useEffect(() => {
    if (props.paused !== paused) {
      onPlayPress();
    }
  }, [props.paused]);

  function onOverlayPress() {
    setShowControlOverlay(!showControlOverlay);
  }

  function renderOverlay() {
    const TouchableComponent = showControlOverlay ? TouchableOpacity : View;
    return (
      <TouchableWithoutFeedback onPress={onOverlayPress}>
        <Animatable.View
          style={[videoStyle, styles.overlay]}
          animation={showControlOverlay ? "fadeIn" : "fadeOut"}
          duration={500}>
          <View style={styles.flexOne}>
            <View style={styles.overlayMid}>
              <TouchableComponent
                onPress={onPlayPress}
                style={styles.controlButton}>
                {ended ? (
                  <FastImage
                    source={IconPlayback}
                    resizeMode="contain"
                    resizeMethod="resize"
                    style={styles.controlIcon}
                  />
                ) : paused ? (
                  <FastImage
                    source={IconPlay}
                    resizeMode="contain"
                    resizeMethod="resize"
                    style={styles.controlIcon}
                  />
                ) : (
                  <FastImage
                    source={IconPause}
                    resizeMode="contain"
                    style={styles.controlIconLarge}
                  />
                )}
              </TouchableComponent>
            </View>
          </View>
        </Animatable.View>
      </TouchableWithoutFeedback>
    );
  }

  function renderToggleFullscreenButton() {
    return fullscreen ? (
      <TouchableOpacity style={styles.shrinkButton} onPress={toggleFullscreen}>
        <FastImage
          source={IconExpand}
          style={styles.iconExpand}
          resizeMode="contain"
        />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.expandButton} onPress={toggleFullscreen}>
        <FastImage
          source={IconExpand}
          style={styles.iconExpand}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }

  function renderTimer() {
    return (
      duration && (
        <View style={timerContainerStyle}>
          <CircularTimer
            paused={paused}
            onFinished={onFinished}
            size={100 * WIDTH_RATIO}
            lineSize={10 * WIDTH_RATIO}
            maxTime={duration}
          />
        </View>
      )
    );
  }

  function renderFinished() {
    return fullscreen && finished ? (
      <PrimaryGradientBackground
        style={styles.finishedContainer}
        size={48 * WIDTH_RATIO}>
        <IconCheck width={22 * WIDTH_RATIO} height={16 * WIDTH_RATIO} />
      </PrimaryGradientBackground>
    ) : (
      <View />
    );
  }

  function renderThumbnail() {
    return (
      showThumbnail && (
        <ImageBackground
          source={thumbnailSource}
          resizeMode={"cover"}
          style={styles.thumbnail}
          imageStyle={videoStyle}>
          <TouchableOpacity
            style={styles.thumbnailTouchable}
            onPress={onPlayPress}>
            <View style={styles.controlButton}>
              <FastImage
                source={IconPlay}
                style={styles.controlIcon}
                resizeMode="contain"
                resizeMethod="resize"
              />
            </View>
          </TouchableOpacity>
        </ImageBackground>
      )
    );
  }

  function renderError() {
    return (
      <View style={videoStyle}>
        <View style={styles.errorContainer}>
          <Text style={styles.description}>
            {I18n.t("Error.InvalidVideoSource")}
          </Text>
        </View>
      </View>
    );
  }

  return isValid(source) ? (
    <View style={containerStyle}>
      <Video
        source={source}
        style={videoStyle}
        paused={paused}
        onLoad={onLoad}
        onEnd={onVideoEnd}
        controls={false}
      />
      {renderThumbnail()}
      {renderToggleFullscreenButton()}
      {renderTimer()}
      {renderFinished()}
      {renderOverlay()}
    </View>
  ) : (
    renderError()
  );
}

ExerciseVideo.propTypes = {
  finished: PropTypes.bool,
  onToggleFullscreen: PropTypes.func,
  source: PropTypes.any,
  thumbnailSource: PropTypes.any,
  onPaused: PropTypes.func,
};

ExerciseVideo.defaultProps = {
  finished: false,
  onToggleFullscreen: () => {},
  source: null,
  thumbnailSource: null,
  onPaused: () => {},
};

export default compose(ExerciseVideoStyle)(ExerciseVideo);
