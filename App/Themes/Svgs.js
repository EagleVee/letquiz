import { mergeObjectProperties } from "../Utils/helperFunctions";
// Tab Bar Icon Light
import IconTabTrainLight from "Assets/Svgs/BottomNavigation/IconTabTrainLight.svg";
import IconTabCoachLight from "Assets/Svgs/BottomNavigation/IconTabCoachLight.svg";
import IconTabProfileLight from "Assets/Svgs/BottomNavigation/IconTabProfileLight.svg";
// Tab Bar Icon Dark
import IconTabTrainDark from "Assets/Svgs/BottomNavigation/IconTabTrainDark.svg";
import IconTabCoachDark from "Assets/Svgs/BottomNavigation/IconTabCoachDark.svg";
import IconTabProfileDark from "Assets/Svgs/BottomNavigation/IconTabProfileDark.svg";
// Tab Bar Icon Active
import IconTabTrainActive from "Assets/Svgs/BottomNavigation/IconTabTrainActive.svg";
import IconTabCoachActive from "Assets/Svgs/BottomNavigation/IconTabCoachActive.svg";
import IconTabProfileActive from "Assets/Svgs/BottomNavigation/IconTabProfileActive.svg";
// Program Tag Icon Calendar
import IconCalendarTagSimpleLight from "Assets/Svgs/LightIcons/IconCalendarSimple.svg";
import IconCalendarTagSimpleDark from "Assets/Svgs/DarkIcons/IconCalendarSimpleDark.svg";
import IconCalendarLight from "Assets/Svgs/LightIcons/IconCalendar.svg";
import IconCalendarDark from "Assets/Svgs/DarkIcons/IconCalendarDark.svg";
// Program Tag Icon Level
import IconLevelTagSimpleLight from "Assets/Svgs/LightIcons/IconLevelSimple.svg";
import IconLevelTagSimpleDark from "Assets/Svgs/DarkIcons/IconLevelSimpleDark.svg";
import IconLevelLight from "Assets/Svgs/LightIcons/IconLevel.svg";
import IconLevelDark from "Assets/Svgs/DarkIcons/IconLevelDark.svg";
// Program Tag Equipment
import IconEquipmentLight from "Assets/Svgs/LightIcons/IconEquipment.svg";
import IconEquipmentDark from "Assets/Svgs/DarkIcons/IconEquipmentDark.svg";
// Arrows
import IconCaretRightWhite from "Assets/Svgs/SharedIcons/IconCaretRightWhite.svg";
import IconArrowRightWhite from "Assets/Svgs/SharedIcons/IconArrowRightWhite.svg";
import IconChevronRightGray from "Assets/Svgs/SharedIcons/IconChevronRightGray.svg";
import IconBackBlack from "Assets/Svgs/SharedIcons/IconArrowBackBlack.svg";
import IconBackWhite from "Assets/Svgs/SharedIcons/IconArrowBackWhite.svg";
// Profile
import IconSetting from "Assets/Svgs/SharedIcons/IconSetting.svg";
import IconHistoryLight from "Assets/Svgs/LightIcons/IconHistory.svg";
import IconSubscriptionLight from "Assets/Svgs/LightIcons/IconTicket.svg";
import IconDeviceLight from "Assets/Svgs/LightIcons/IconDevices.svg";
import IconChatBubbleLight from "Assets/Svgs/LightIcons/IconChatBubble.svg";
import IconInformationLight from "Assets/Svgs/LightIcons/IconInformation.svg";
import IconQuestionLight from "Assets/Svgs/LightIcons/IconQuestion.svg";
import IconUILight from "Assets/Svgs/LightIcons/IconUI.svg";
import IconLogOutLight from "Assets/Svgs/LightIcons/IconLogout.svg";

import IconHistoryDark from "Assets/Svgs/DarkIcons/IconHistory.svg";
import IconSubscriptionDark from "Assets/Svgs/DarkIcons/IconTicket.svg";
import IconDeviceDark from "Assets/Svgs/DarkIcons/IconDevices.svg";
import IconChatBubbleDark from "Assets/Svgs/DarkIcons/IconChatBubble.svg";
import IconInformationDark from "Assets/Svgs/DarkIcons/IconInformation.svg";
import IconQuestionDark from "Assets/Svgs/DarkIcons/IconQuestion.svg";
import IconUIDark from "Assets/Svgs/DarkIcons/IconUI.svg";
import IconLogOutDark from "Assets/Svgs/DarkIcons/IconLogout.svg";
// Error
import IconErrorTriangle from "Assets/Svgs/LightIcons/IconErrorTriangle.svg";
import IconErrorTriangleDark from "Assets/Svgs/DarkIcons/IconErrorTriangleFill.svg";
import IconErrorTriangleFill from "Assets/Svgs/LightIcons/IconErrorTriangleFill.svg";
import IconErrorTriangleFillDark from "Assets/Svgs/DarkIcons/IconErrorTriangleFill.svg";
// Trainer
import IconAchievementLight from "Assets/Svgs/LightIcons/IconAchievement.svg";
import IconAchievementDark from "Assets/Svgs/DarkIcons/IconAchievement.svg";
import IconCertificateLight from "Assets/Svgs/LightIcons/IconCertificate.svg";
import IconCertificateDark from "Assets/Svgs/DarkIcons/IconCertificate.svg";
import IconCalisthenicsRedLight from "Assets/Svgs/LightIcons/IconCalisthenicsRed.svg";
import IconCalisthenicRedDark from "Assets/Svgs/DarkIcons/IconCalisthenicsRed.svg";
// Util Icons
import IconMoreGray from "Assets/Svgs/SharedIcons/IconMoreGray.svg";
import IconPadlockRed from "Assets/Svgs/SharedIcons/IconPadlockRed.svg";
import IconCopyLight from "Assets/Svgs/LightIcons/IconCopy.svg";
import IconCopyDark from "Assets/Svgs/DarkIcons/IconCopy.svg";
import IconRepeatLight from "Assets/Svgs/LightIcons/IconRepeatColor.svg";
import IconRepeatDark from "Assets/Svgs/DarkIcons/IconRepeatColor.svg";
import IconClockLight from "Assets/Svgs/LightIcons/IconClock.svg";
import IconClockDark from "Assets/Svgs/DarkIcons/IconClock.svg";
import IconPercentageDark from "Assets/Svgs/DarkIcons/IconPercentageRed.svg";

const sharedSvgs = {
  TabActive: {
    workout: IconTabTrainActive,
    trainer: IconTabCoachActive,
    profile: IconTabProfileActive,
  },
  Pointer: {
    ArrowRightWhite: IconArrowRightWhite,
    ChevronRightGray: IconChevronRightGray,
    CaretRightWhite: IconCaretRightWhite,
  },
  Profile: {
    Setting: IconSetting,
  },
  Util: {
    More: IconMoreGray,
    PadlockRed: IconPadlockRed,
  },
};

export const lightThemeSvgs = mergeObjectProperties([
  sharedSvgs,
  {
    Tab: {
      workout: IconTabTrainLight,
      trainer: IconTabCoachLight,
      profile: IconTabProfileLight,
    },
    Program: {
      CalendarSimpleTag: IconCalendarTagSimpleLight,
      LevelSimpleTag: IconLevelTagSimpleLight,
      CalendarTag: IconCalendarLight,
      LevelTag: IconLevelLight,
      EquipmentTag: IconEquipmentLight,
    },
    Error: {
      TriangleFill: IconErrorTriangleFill,
      Triangle: IconErrorTriangle,
    },
    Pointer: {
      ArrowBack: IconBackBlack,
    },
    Profile: {
      WorkoutHistory: IconHistoryLight,
      Subscription: IconSubscriptionLight,
      Device: IconDeviceLight,
      ChatBubble: IconChatBubbleLight,
      About: IconInformationLight,
      FAQ: IconQuestionLight,
      UI: IconUILight,
      LogOut: IconLogOutLight,
    },
    Trainer: {
      achievement: IconAchievementLight,
      certificate: IconCertificateLight,
      calisthenics: IconCalisthenicsRedLight,
    },
    Util: {
      Copy: IconCopyLight,
      Repeat: IconRepeatLight,
      Clock: IconClockLight,
      Percentage: IconPercentageDark,
    },
  },
]);

export const darkThemeSvgs = mergeObjectProperties([
  sharedSvgs,
  {
    Tab: {
      workout: IconTabTrainDark,
      trainer: IconTabCoachDark,
      profile: IconTabProfileDark,
    },
    Program: {
      CalendarSimpleTag: IconCalendarTagSimpleDark,
      LevelSimpleTag: IconLevelTagSimpleDark,
      CalendarTag: IconCalendarDark,
      LevelTag: IconLevelDark,
      EquipmentTag: IconEquipmentDark,
    },
    Error: {
      TriangleFill: IconErrorTriangleFillDark,
      Triangle: IconErrorTriangleDark,
    },
    Pointer: {
      ArrowBack: IconBackWhite,
    },
    Profile: {
      WorkoutHistory: IconHistoryDark,
      Subscription: IconSubscriptionDark,
      Device: IconDeviceDark,
      ChatBubble: IconChatBubbleDark,
      About: IconInformationDark,
      FAQ: IconQuestionDark,
      UI: IconUIDark,
      LogOut: IconLogOutDark,
    },
    Trainer: {
      achievement: IconAchievementDark,
      certificate: IconCertificateDark,
      calisthenics: IconCalisthenicRedDark,
    },
    Util: {
      Copy: IconCopyDark,
      Repeat: IconRepeatDark,
      Clock: IconClockDark,
      Percentage: IconPercentageDark,
    },
  },
]);

export default sharedSvgs;
