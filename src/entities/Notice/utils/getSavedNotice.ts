import { Notice } from '@/entities/Post/types';

const getSavedNotice = (): Notice[] => {
  if (typeof window !== 'undefined') {
    const storedNotices = sessionStorage.getItem('recentNotices');
    return storedNotices ? JSON.parse(storedNotices) : [];
  }
  return [];
};

export default getSavedNotice;
