const formatTime = (startsAt: string, workhour: number) => {
  const startDate = new Date(startsAt);
  const endDate = new Date(startDate.getTime() + workhour * 60 * 60 * 1000);
  const startYear = startDate.getFullYear();
  const getMonth = startDate.getMonth() + 1;
  const startMonth = `${getMonth < 10 ? '0' : ''}${getMonth}`;
  const startDay = startDate.getDate();
  const startHours = startDate.getHours();
  const startMinutes = startDate.getMinutes();
  const newStartDate = `${startHours < 10 ? '0' : ''}${startHours}:${startMinutes < 10 ? '0' : ''}${startMinutes}`;
  const endHours = endDate.getHours();
  const endMinutes = endDate.getMinutes();
  const newEndDate = `${endHours < 10 ? '0' : ''}${endHours}:${endMinutes < 10 ? '0' : ''}${endMinutes}`;
  return `${startYear}-${startMonth}-${startDay} ${newStartDate} ~ ${newEndDate} (${workhour}시간)`;
};

export default formatTime;
