import { useMemo } from "react";
import { useSelector } from "react-redux";
import { DARK_THEME } from "../Config/Themes";
import { lightThemeColors, darkThemeColors } from "../Themes/Colors";

export const useThemeColors = (customTheme) => {
  const theme = customTheme
    ? customTheme
    : useSelector((state) => state.device.theme);
  return useMemo(() => {
    return theme === DARK_THEME ? darkThemeColors : lightThemeColors;
  }, [theme]);
};
