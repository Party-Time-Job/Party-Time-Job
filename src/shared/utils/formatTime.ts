const formatTime = (startsAt: string, workhour: number) => {
  const startDate = startsAt.slice(0, 10);
  const startHour = startsAt.slice(11, 13);
  const startMinute = startsAt.slice(14, 16);
  const finishedHour = (Number(startHour) + workhour) % 24;
  const formatFinishedHour =
    finishedHour < 10 ? `0${finishedHour}` : finishedHour;
  const now = `${formatFinishedHour}:${startMinute}`;
  return `${startDate} ${startHour}:${startMinute}~${now}`;
};

export default formatTime;
