const calcDiff = (previousTime: string): string => {
  const currentDate = new Date();
  const previousDate = new Date(previousTime);
  const secondDiff = currentDate.getTime() - previousDate.getTime();
  const minuteDiff = secondDiff / (60 * 1000);
  const hourDiff = minuteDiff / 60;
  const dayDiff = hourDiff / 24;
  const monthDiff = dayDiff / 30;
  const yearDiff = monthDiff / 12;
  let result;

  if (yearDiff >= 1) {
    result = Math.floor(yearDiff);
    return `${result}년 전`;
  }

  if (monthDiff >= 1) {
    result = Math.floor(monthDiff);
    return `${result}달 전`;
  }

  if (dayDiff >= 1) {
    result = Math.floor(dayDiff);
    return `${result}일 전`;
  }

  if (hourDiff >= 1) {
    result = Math.floor(hourDiff);
    return `${result}시간 전`;
  }

  result = Math.floor(minuteDiff);
  return `${result}분 전`;
};

export default calcDiff;
