import moment from "moment";

export const WeekDayTitle = [
  "WeekDays.Mon",
  "WeekDays.Tue",
  "WeekDays.Wed",
  "WeekDays.Thu",
  "WeekDays.Fri",
  "WeekDays.Sat",
  "WeekDays.Sun",
];

export const MonthTitle = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default class TimeService {
  static formatMySQLDatetime(datetime, format = "DD/MM/YYYY HH:mm") {
    return moment(datetime).format(format);
  }

  static getCurrentDeviceHour() {
    return new Date().getHours();
  }

  static getCurrentMonth() {
    return new Date().getMonth() + 1;
  }

  static getCurrentYear() {
    return new Date().getFullYear();
  }

  static getCurrentPeriod() {
    const hour = TimeService.getCurrentDeviceHour();
    if (hour >= 19) {
      return "evening";
    } else if (hour >= 12) {
      return "afternoon";
    } else {
      return "morning";
    }
  }

  static getCurrentYearInTwoDigit() {
    return new Date()
      .getFullYear()
      .toString()
      .substr(2, 2);
  }

  static getCurrentDeviceDay() {
    return new Date().getDate();
  }

  static getCurrentWeekDays() {
    const startOfWeek = moment()
      .startOf("isoWeek")
      .date();
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push({
        title: WeekDayTitle[i],
        day: startOfWeek + i,
      });
    }

    return weekDays;
  }

  static formatMinuteDuration(duration, unit = "weeks") {
    return moment.duration(duration, "minute").as(unit);
  }
  static formatSecondDuration(duration, unit = "minutes") {
    return moment.duration(duration, "second").as(unit);
  }

  static formatTimerDuration(durationInSeconds) {
    if (durationInSeconds <= 0) {
      return "00:00";
    } else {
      durationInSeconds = Math.floor(durationInSeconds);
    }
    const hour = Math.floor(durationInSeconds / 3600);
    const minute = Math.floor((durationInSeconds - hour * 60) / 60);
    const second = durationInSeconds - minute * 60;
    const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
    const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;
    const formattedSecond = second < 10 ? `0${second}` : `${second}`;

    return hour > 0
      ? formattedHour + ":" + formattedMinute + ":" + formattedSecond
      : formattedMinute + ":" + formattedSecond;
  }

  static getMinuteTimer(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = durationInSeconds - minutes * 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  static getTwoDigitsTimer(time) {
    return time < 10 ? `0${time}` : `${time}`;
  }
}
