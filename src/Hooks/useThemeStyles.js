import { useMemo } from "react";
import { useSelector } from "react-redux";
import { DARK_THEME } from "../Config/Themes";
import { darkThemeStyles, lightThemeStyles } from "../Themes/ApplicationStyles";

export const useThemeStyles = customTheme => {
  const theme = customTheme
    ? customTheme
    : useSelector(state => state.device.theme);
  return useMemo(() => {
    return theme === DARK_THEME ? darkThemeStyles : lightThemeStyles;
  }, [theme]);
};
