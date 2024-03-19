const convertSortText = (sortCategory: string) => {
  if (sortCategory === 'time') {
    return '마감임박순';
  }
  if (sortCategory === 'pay') {
    return '시급많은순';
  }
  if (sortCategory === 'hour') {
    return '시간적은순';
  }
  if (sortCategory === 'shop') {
    return '가나다순';
  }
  return '';
};
export default convertSortText;
