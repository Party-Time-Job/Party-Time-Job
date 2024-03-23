/**
 * 한국 시간 UTC+09:00, 9시간을 더해야 함.
 * @param {date} date ex) "2023-07-07T18:00:00.000Z"
 * @returns ex) 2023-07-08 03:00
 */
const formatDateTime = (date: string): string => {
  const dateObject = new Date(date);
  const formattedDateString = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')} ${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}`;
  return formattedDateString;
};
export default formatDateTime;
