import formatDateTime from '@/entities/Post/utils/formatDateTime';

const useCustomTodayDate = () => {
  const TODAY = new Date();
  const now = formatDateTime(TODAY.toISOString());
  return { now };
};

export default useCustomTodayDate;
