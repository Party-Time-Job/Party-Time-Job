const calculateTime = (previousTime: string): string => {
  const currentDate = new Date();
  const previousDate = new Date(previousTime);
  const secondDifference = currentDate.getTime() - previousDate.getTime();
  const minuteDifference = secondDifference / (60 * 1000);
  const hourDifference = minuteDifference / 60;
  const dayDifference = hourDifference / 24;
  const monthDifference = dayDifference / 30;
  const yearDifference = monthDifference / 12;
  let result;

  if (yearDifference >= 1) {
    result = Math.floor(yearDifference);
    return `${result}년 전`;
  }

  if (monthDifference >= 1) {
    result = Math.floor(monthDifference);
    return `${result}달 전`;
  }

  if (dayDifference >= 1) {
    result = Math.floor(dayDifference);
    return `${result}일 전`;
  }

  if (hourDifference >= 1) {
    result = Math.floor(hourDifference);
    return `${result}시간 전`;
  }

  result = Math.floor(minuteDifference);
  return `${result}분 전`;
};

export default calculateTime;
