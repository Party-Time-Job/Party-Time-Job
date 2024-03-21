import { useState } from 'react';

const useNoticeListHeader = () => {
  const [isToggleSort, setIsToggleSort] = useState(false);
  const [isToggleFilter, setIsToggleFilter] = useState(false);

  const handleToggleSort = () => {
    if (isToggleFilter) {
      setIsToggleFilter(false);
    }
    setIsToggleSort(prev => !prev);
  };

  const handleToggleFilter = () => {
    if (isToggleSort) {
      setIsToggleSort(false);
    }
    setIsToggleFilter(prev => !prev);
  };
  return { isToggleSort, isToggleFilter, handleToggleSort, handleToggleFilter };
};

export default useNoticeListHeader;
