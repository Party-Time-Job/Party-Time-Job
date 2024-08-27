const formatDate = (date: string): string => {
  const dateObject = new Date(date);
  const formattedDateString = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${(dateObject.getDate() + 1).toString().padStart(2, '0')}`;
  return formattedDateString;
};

export default formatDate;
