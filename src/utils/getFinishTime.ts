/**
 *
 * @param {string} startsAt notice 객체에서 가져온 시작 시간 문자열
 * @param {number} workhour notice 객체에서 가져온 업무 시간 숫자
 * @returns {string} 시작 시간에서 업무 시간을 더한 퇴근 시간 문자열 ex) '18:00'
 */
const addWorkHours = (startsAt: string, workhour: number): string => {
  const startDate = new Date(startsAt);

  const endDate = new Date(startDate.getTime() + workhour * 60 * 60 * 1000);

  const hours = endDate.getHours();
  const minutes = endDate.getMinutes();

  const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  return formattedTime;
};

export default addWorkHours;
