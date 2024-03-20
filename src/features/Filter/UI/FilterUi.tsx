'use client';

import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';
import ADDRESS from '@/shared/constants/Address';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import SelectedAddress from './SelectedAddress';
import { FilterCondition } from '@/entities/Notice/types';

interface Props {
  handleToggleFilter: () => void;
  filterCondition: FilterCondition;
  updateFilterCondition: (
    address?: string[],
    date?: string,
    pay?: string,
  ) => void;
  applyFilter: () => void;
  setListCategory: Dispatch<SetStateAction<string>>;
}

/**
 * @param {Object} props - Filter 컴포넌트의 props
 * @param {Function} props.handleToggleFilter - Filter 컴포넌트 토글 제어 콜백 함수
 * @param {FilterCondition} props.filterCondition - 필터 조건
 * @param {Function} props.updateFilterCondition - 필터 조건 업데이트 콜백 함수
 * @param {Function} props.applyFilter - 필터 조건으로 공고 리스트 업데이트 콜백함수
 * @returns 상세 필터 UI
 */
const Filter = ({
  handleToggleFilter,
  filterCondition,
  updateFilterCondition,
  applyFilter,
  setListCategory,
}: Props) => {
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

  const handleAddressClick = (e: MouseEvent<HTMLSpanElement>) => {
    const addItem = (e.target as HTMLSpanElement).innerText;
    if (selectedAddressList.includes(addItem)) {
      removeAddress(addItem);
      return;
    }
    setSelectedAddressList(prev => [...prev, addItem]);
  };

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 6) {
      e.preventDefault();
      const trimmedValue = e.target.value.slice(0, 6);
      e.target.value = trimmedValue;
      setSelectedPay(e.target.value);
    }
    setSelectedPay(e.target.value);
  };

  const handleReset = () => {
    setListCategory('all');
    setSelectedAddressList([]);
    setSelectedDate('');
    setSelectedPay('');
  };

  const handleClickApply = () => {
    applyFilter();
    handleToggleFilter();
  };

  useEffect(() => {
    updateFilterCondition(selectedAddressList, selectedDate, selectedPay);
  }, [selectedAddressList, selectedDate, selectedPay]);

  return (
    <div className='absolute z-10 flex w-[390px] flex-col items-start gap-6 rounded-[10px] border border-solid border-[color:var(--The-julge-gray-20,#E5E4E7)] bg-white px-5 py-6 shadow-[0px_2px_8px_0px_rgba(120,116,134,0.25)] max-md:inset-0 max-md:w-full md:right-0 md:top-10'>
      <div className='flex items-center justify-between self-stretch'>
        <span className='text-xl font-bold leading-normal text-[#111322] '>
          상세필터
        </span>
        <Image
          src={'/filter-close.svg'}
          alt='close'
          width='24'
          height='24'
          onClick={handleToggleFilter}
          className='cursor-pointer'
        />
      </div>
      <div className='flex w-full flex-col items-start gap-10'>
        <div className='flex w-[350px] flex-col items-start gap-6 max-md:w-full'>
          <div className='flex flex-col items-start gap-3 max-md:w-full'>
            <span className='text-base font-normal leading-[26px] text-[#111322]'>
              위치
            </span>
            <div className='h-[258px] w-full rounded-md border-[1px] border-solid border-pt-gray30 md:w-[350px]'>
              <div className='grid h-[258px] grid-cols-2 gap-[20px] overflow-y-scroll px-[28px] py-[20px]'>
                {ADDRESS.map(item => {
                  return (
                    <div key={item.key}>
                      <span
                        key={item.key}
                        onClick={e => handleAddressClick(e)}
                        className='cursor-pointer p-2 hover:bg-pt-gray20'
                      >
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='flex flex-wrap items-start gap-[8px]'>
              {selectedAddressList.map(item => {
                return (
                  <SelectedAddress
                    key={item}
                    address={item}
                    removeAddress={removeAddress}
                  />
                );
              })}
            </div>
          </div>

          <div className='h-0.5 self-stretch bg-[#F2F2F3]'></div>
          <div className='flex items-start gap-3 self-stretch'>
            <div className='flex flex-[1_0_0] flex-col items-start gap-2'>
              <span className='text-base font-normal leading-[26px] text-[#111322]'>
                시작일
              </span>
              <Input
                className='flex items-start gap-[10px] self-stretch px-4 py-5'
                type='date'
                onChange={e => handleChangeDate(e)}
                value={selectedDate}
              />
            </div>
          </div>
          <div className='h-0.5 self-stretch bg-[#F2F2F3]'></div>
          <div className='flex w-[350px] flex-col items-start justify-end gap-2 max-md:w-full'>
            <span className='text-[16px]'>금액</span>
            <div className='flex items-center justify-start gap-3 max-md:w-full'>
              <div className='relative inline'>
                <Input
                  width='w-[169px]'
                  placeholder='입력'
                  type='number'
                  onChange={e => handleInputValue(e)}
                  value={selectedPay}
                />
                <span className='absolute right-4 top-5'>원</span>
              </div>
              <span>이상부터</span>
            </div>
          </div>
        </div>
        <div className='flex w-[100%] justify-end gap-1'>
          <Button
            status='active'
            size='medium'
            text='초기화'
            onClick={handleReset}
          />
          <Button
            status='active'
            size='medium'
            text='적용하기'
            onClick={handleClickApply}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
