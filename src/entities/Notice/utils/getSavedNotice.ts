import { Notice } from '@/entities/Post/types';

const getSavedNotice = (): Notice[] => {
  const storedNotices = localStorage.getItem('recentNotices');
  return storedNotices ? JSON.parse(storedNotices) : [];
};

export default getSavedNotice;
