const PROFILE_ITEMS = {
  name: { title: '이름', text: '입력', next: 'phone' },
  phone: { title: '연락처', text: '입력', next: 'address' },
  address: { title: '선호지역', text: '선택', next: 'bio' },
  bio: { title: '소개', text: '입력' },
};

export default PROFILE_ITEMS;
