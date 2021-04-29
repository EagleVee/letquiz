import React from "react";
import { compose } from "ramda";
import { Text, View } from "react-native";
import { LaunchScreenStyle } from "./LaunchScreenStyle";
import Container from "Components/Container/Container";
import { WithStartup } from "../../Business/WithStartup";
import AppLogo from "Assets/Svgs/VectorImages/AppLogoGradient.svg";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import I18n from "../../Locales";
import { APP_VERSION_NAME } from "../../Config/MetaData";
import { useThemeColors } from "../../Hooks/useThemeColors";

function LaunchScreen(props) {
  const { styles } = props;
  const Colors = useThemeColors();

  return (
    <Container
      notSafeArea={true}
      style={styles.container}
      statusBarColor={Colors.primary}>
      <View style={styles.main}>
        <Text style={styles.appName}>QUIZLET</Text>
      </View>
      <Text style={styles.description}>
        {I18n.t("RegularTerm.Version")} {APP_VERSION_NAME}
      </Text>
    </Container>
  );
}

export default compose(
  LaunchScreenStyle,
  WithStartup,
)(LaunchScreen);
