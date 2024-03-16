'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Title from '@/shared/ui/Title';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';

const CreateRecruitment = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  return (
    <div className='flex flex-col items-start justify-center gap-2 px-[238px] py-[60px]'>
      <div className='flex w-full flex-col items-center gap-8'>
        <div className='flex items-center justify-between self-stretch'>
          <Title title='공고 등록'>
            <div></div>
          </Title>
          <Image width={32} height={32} src={'/close.svg'} alt='close' />
        </div>
        <form
          onSubmit={handleSubmit(data => console.log(data))}
          className='flex h-[303px] w-full flex-col gap-6'
        >
          <div className='inline-flex items-start justify-between gap-5'>
            <div className='flex w-[308px] flex-col items-start gap-2'>
              <label
                htmlFor='originalHourlyPay'
                className='leading-[26px] text-[#111322]'
              >
                시급
              </label>
              <Input
                placeholder='시급'
                className='flex items-center justify-between self-stretch px-5 py-4'
                type='number'
                id='originalHourlyPay'
                {...register('originalHourlyPay', {
                  required: '시급을 입력해주세요.',
                })}
              />
              {errors.originalHourlyPay && (
                <span>{errors.originalHourlyPay.message?.toString()}</span>
              )}
            </div>
            <div className='flex w-[308px] flex-col items-start gap-2'>
              <label
                htmlFor='startDate'
                className='leading-[26px] text-[#111322]'
              >
                시작 일시
              </label>
              <Input
                id='startDate'
                type='date'
                placeholder='입력'
                className='flex items-center justify-between self-stretch px-5 py-4'
                {...register('startDate', {
                  required: '가게 이름 입력은 필수 입니다.',
                })}
              />
              {errors.startDate && (
                <span>{errors.startDate.message?.toString()}</span>
              )}
            </div>
            <div className='flex w-[308px] flex-col items-start gap-2'>
              <label
                htmlFor='workTime'
                className='label-[#111322] leading-[26px]'
              >
                업무 시간
              </label>
              <Input
                id='workTime'
                type='number'
                placeholder='입력'
                className='flex w-full items-center justify-between self-stretch px-5 py-4'
                {...register('workTime', {
                  required: '가게 이름 입력은 필수 입니다.',
                })}
              />
              {errors.workTime && (
                <span>{errors.workTime.message?.toString()}</span>
              )}
            </div>
          </div>
          <div className='flex w-full flex-col items-start gap-2'>
            <label className='label-[#111322] leading-[26px]'>공고 설명</label>
            <textarea
              className='bg-#FFF h-[153px] w-full place-content-center rounded-md border border-solid border-[#CBC9CF] p-2.5'
              placeholder='입력'
            />
          </div>
        </form>
        <Button
          disabled={isSubmitting}
          text='등록하기'
          type='submit'
          size='medium'
          status='active'
        />
      </div>
    </div>
  );
};

export default CreateRecruitment;
