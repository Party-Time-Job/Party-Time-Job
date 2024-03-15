'use client';

import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import ADDRESS from '@/shared/constants/Address';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import SelectedAddress from './SelectedAddress';

interface Props {
  handleToggle: () => void;
  updateFilterCondition: (
    address?: string[],
    date?: string,
    pay?: string,
  ) => void;
}

const Filter = ({ handleToggle, updateFilterCondition }: Props) => {
  const [selectedAddressList, setSelectedAddressList] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedPay, setSelectedPay] = useState<string>('');

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
    setSelectedAddressList([]);
    setSelectedDate('');
    setSelectedPay('');
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
          onClick={handleToggle}
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
                    <div>
                      <span key={item.key} onClick={e => handleAddressClick(e)}>
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
          <Button status='active' size='medium' text='적용하기' />
        </div>
      </div>
    </div>
  );
};

export default Filter;
