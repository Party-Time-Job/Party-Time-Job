import { Notice } from '@/entities/Post/types';

const saveSeenNotice = (notice: Notice) => {
  const storedNotices = sessionStorage.getItem('recentNotices');

  const noticesArray: Notice[] = storedNotices ? JSON.parse(storedNotices) : [];

  const isDuplicate = noticesArray.some(
    existingNotice => existingNotice.item.id === notice.item.id,
  );

  // 중복된 공지가 없는 경우에만 저장
  if (!isDuplicate) {
    noticesArray.unshift(notice);

    if (noticesArray.length >= 6) {
      noticesArray.pop();
    }
  }

  sessionStorage.setItem('recentNotices', JSON.stringify(noticesArray));
};

export default saveSeenNotice;
