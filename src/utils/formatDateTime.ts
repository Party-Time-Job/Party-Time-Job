const formatDateTime = (date: string): string => {
  const dateObject = new Date(date);
  const formattedDateString = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')} ${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}`;
  return formattedDateString;
};
export default formatDateTime;
