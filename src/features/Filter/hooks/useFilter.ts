import { useEffect, useState } from 'react';
import { FilterCondition } from '@/entities/Notice/types';

const useFilter = (
  filterCondition: FilterCondition,
  updateFilterCondition: (
    address?: string[],
    date?: string,
    pay?: string,
  ) => void,
) => {
  const [selectedAddressList, setSelectedAddressList] = useState<string[]>(
    filterCondition.address || [],
  );
  const [selectedDate, setSelectedDate] = useState<string>(
    filterCondition.date || '',
  );
  const [selectedPay, setSelectedPay] = useState<string>(
    filterCondition.pay || '',
  );

  const removeAddress = (address: string) => {
    const newList = selectedAddressList.filter(item => item !== address);
    setSelectedAddressList(newList);
  };

  useEffect(() => {
    updateFilterCondition(selectedAddressList, selectedDate, selectedPay);
  }, [selectedAddressList, selectedDate, selectedPay]);

  return {
    selectedAddressList,
    selectedDate,
    selectedPay,
    setSelectedAddressList,
    setSelectedDate,
    setSelectedPay,
    removeAddress,
  };
};

export default useFilter;
