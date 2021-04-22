import moment from "moment";

// import moment from 'moment-timezone'

export function getMillisecondFromTimeString(
  dateString,
  format = "DD-MM-YYYY",
) {
  return moment(dateString, format).valueOf() / 1000;
}

export function diffFromNowInSecond(datetime) {
  const date = moment(datetime);
  const durationFromNow = moment.duration(moment().diff(date));
  return durationFromNow.as("seconds");
}

export function diffFromNowInHour(datetime) {
  const date = moment(datetime);
  const durationFromNow = moment.duration(moment().diff(date));
  return durationFromNow.as("hours");
}

export function formatDateTime(datetime, format = "DD/MM/YYYY HH:mm") {
  return moment.unix(datetime).format(format);
}

export function diffFromNowInDay(datetime) {
  const given = moment.unix(datetime);
  const current = moment().startOf("day");
  return Math.ceil(moment.duration(given.diff(current)).asDays());
}

export function calendarTime(datetime) {
  return moment().calendar(datetime * 1000, {
    sameDay: "[Hôm nay]",
    nextDay: "[Ngày mai]",
    nextWeek: "DD/MM",
    lastDay: "[Hôm qua]",
    lastWeek: "DD/MM",
    sameElse: "DD/MM",
  });
}

export function formatDateTimeFromMySQLDate(
  sqlDate,
  format = "DD/MM/YYYY HH:mm",
) {
  return moment.utc(new Date(sqlDate)).utcOffset(7).format(format).toString();
}

export function formatMessageTimestamp(time) {
  moment.locale("vi");
  const date = moment.utc(time);
  const dateVN = date.utc().utcOffset(420);
  const now = moment()
    .utc()
    .utcOffset(+7);
  if (now.date() === dateVN.date()) {
    return dateVN.format("LT");
  } else if (now.week() === dateVN.week()) {
    return dateVN.format("dddd LT");
  }

  return dateVN.format("DD-MM-YYYY LT");
}

export function formatPostTimestamp(time) {
  moment.locale("vi");
  const date = moment.utc(time);
  const dateVN = date.utc().utcOffset(+7);
  const durationFromNow = moment.duration(moment().diff(date));
  if (durationFromNow.as("days") < 1) {
    return dateVN.fromNow();
  } else if (durationFromNow.as("weeks") < 1) {
    return dateVN.format("dddd LT");
  }

  return dateVN.format("DD-MM-YYYY LT");
}

export function formatLatestMessageTimestamp(time) {
  moment.locale("vi");
  const date = moment.utc(time);
  const dateVN = date.utc().utcOffset(+7);
  const durationFromNow = moment.duration(moment().diff(date));
  if (durationFromNow.as("days") < 1) {
    return dateVN.format("HH:mm");
  } else if (durationFromNow.as("weeks") < 1) {
    return dateVN.format("LT");
  } else if (durationFromNow.as("years") < 1) {
    return dateVN.format("DD-MM");
  }

  return dateVN.format("YYYY");
}
