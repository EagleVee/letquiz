import { tabBottom, WIDTH_RATIO } from "Themes/Metrics";
import { darkThemeColors, lightThemeColors } from "./Colors";
import Fonts from "./Fonts";

export const sharedStyles = {
  utils: {
    middle: {
      alignItems: "center",
      justifyContent: "center",
    },
    centerRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    row: {
      flexDirection: "row",
    },
    columnWrapper: {
      justifyContent: "space-between",
    },
    flexOne: {
      flex: 1,
    },
    listContent: {
      paddingTop: 18 * WIDTH_RATIO,
      paddingHorizontal: 16 * WIDTH_RATIO,
    },
    shadow: {
      shadowColor: "rgba(42, 53, 113, 0.16)",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 8,
      shadowOpacity: 1,
      elevation: 2,
    },
    shadowLarge: {
      shadowColor: "rgba(42, 53, 113, 0.16)",
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowRadius: 2,
      shadowOpacity: 1,
      elevation: 4,
    },
    hidden: {
      width: 0,
      height: 0,
      overflow: "hidden",
    },
    paddingHorizontal: {
      paddingHorizontal: 16 * WIDTH_RATIO,
    },
  },
};

export const lightThemeStyles = {
  ...sharedStyles,
  screen: {
    tabContainer: {
      backgroundColor: lightThemeColors.background,
    },
    container: {
      flex: 1,
      backgroundColor: lightThemeColors.background,
      paddingBottom: tabBottom,
    },
    scrollView: {
      flex: 1,
    },
  },
  text: {
    h1: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 40 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h2: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 36 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h3: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 32 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h4: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 28 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h5: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 24 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h6: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 20 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h7: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 17 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h8: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 15 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h9: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 13 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h1Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 40 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h2Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 36 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h3Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 32 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h4Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 28 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h5Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 24 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h6Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 20 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h7Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 17 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h8Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 15 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h9Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 13 * WIDTH_RATIO,
      color: lightThemeColors.primaryTitle,
    },
    h1Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 40 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h2Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 36 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h3Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 32 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h4Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 28 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h5Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 24 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h6Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 20 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h7Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 17 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h8Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 15 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h9Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 13 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h1BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 40 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h2BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 36 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h3BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 32 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h4BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 28 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h5BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 24 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h6BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 20 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h7BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 17 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h8BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 15 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    h9BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 13 * WIDTH_RATIO,
      color: lightThemeColors.primaryRed,
    },
    description: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 15 * WIDTH_RATIO,
      color: lightThemeColors.inputTitle,
    },
  },
  themedShadow: {
    shadowColor: "rgba(42, 53, 113, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 2,
  },
};

export const darkThemeStyles = {
  ...sharedStyles,
  screen: {
    tabContainer: {
      backgroundColor: darkThemeColors.background,
    },
    container: {
      flex: 1,
      backgroundColor: darkThemeColors.background,
      paddingBottom: tabBottom,
    },
    scrollView: {
      flex: 1,
    },
  },
  text: {
    h1: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 40 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h2: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 36 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h3: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 32 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h4: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 28 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h5: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 24 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h6: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 20 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h7: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 17 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h8: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 15 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h9: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 13 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h1Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 40 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h2Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 36 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h3Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 32 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h4Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 28 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h5Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 24 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h6Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 20 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h7Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 17 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h8Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 15 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h9Bold: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 13 * WIDTH_RATIO,
      color: darkThemeColors.primaryTitle,
    },
    h1Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 40 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h2Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 36 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h3Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 32 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h4Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 28 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h5Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 24 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h6Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 20 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h7Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 17 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h8Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 15 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h9Red: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 13 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h1BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 40 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h2BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 36 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h3BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 32 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h4BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 28 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h5BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 24 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h6BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 20 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h7BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 17 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h8BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 15 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    h9BoldRed: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 13 * WIDTH_RATIO,
      color: darkThemeColors.primaryRed,
    },
    description: {
      fontFamily: Fonts.type.primaryFont,
      fontSize: 15 * WIDTH_RATIO,
      color: darkThemeColors.inputTitle,
    },
  },
  themedShadow: {
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 2,
  },
};

export default lightThemeStyles;
