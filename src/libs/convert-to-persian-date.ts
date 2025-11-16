const JalaliMoment = require("jalali-moment");

export function convertToPersianDate(
  gregorianDate?: string | Date
): string | undefined {
  if (gregorianDate === undefined) {
    return undefined;
  }

  const dateMoment = JalaliMoment(gregorianDate);

  if (!dateMoment.isValid()) {
    console.error("Invalid Jalali date for Gregorian input:", gregorianDate);
    return undefined;
  }

  const dateString = dateMoment.format("YYYY-MM-DDTHH:mm:ss");
  const isDateOnly = /^\d{4}-\d{2}-\d{2}(T00:00:00)?$/.test(dateString);

  if (isDateOnly) {
    return dateMoment.format("jYYYY/jMM/jDD");
  } else {
    return dateMoment.format("jYYYY/jMM/jDD HH:mm:ss");
  }
}
