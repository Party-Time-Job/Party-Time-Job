const addWorkHours = (startsAt: string, workhour: number) => {
  const startDate = new Date(startsAt);

  const endDate = new Date(startDate.getTime() + workhour * 60 * 60 * 1000);

  const hours = endDate.getHours();
  const minutes = endDate.getMinutes();

  const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  return formattedTime;
};

export default addWorkHours;
