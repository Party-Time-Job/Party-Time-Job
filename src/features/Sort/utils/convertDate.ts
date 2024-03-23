const convertDate = (dateString: string) => {
  const date = new Date(dateString);
  const isoString = date.toISOString();
  const timezoneOffsetHours = -date.getTimezoneOffset() / 60;
  const timezoneOffsetMinutes = Math.abs(date.getTimezoneOffset() % 60);
  const timezoneOffsetString = `${timezoneOffsetHours < 0 ? '-' : '+'}${Math.abs(timezoneOffsetHours).toString().padStart(2, '0')}:${timezoneOffsetMinutes.toString().padStart(2, '0')}`;
  return isoString.replace('Z', `${timezoneOffsetString}`);
};
export default convertDate;
