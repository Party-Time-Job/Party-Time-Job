'use client';

import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Title from '@/shared/ui/Title';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
// import { classification, location } from './Model/model';

const CreateStore = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  return (
    <div className='flex flex-col items-start gap-2 bg-[#FAFAFA] px-[238px] py-[60px]'>
      <div className='felx flex-col items-center gap-8'>
        <div className='flex w-[964px] items-center justify-between'>
          <Title title='가게정보'>
            <div></div>
          </Title>
          <Image src={'/close.svg'} alt='close' width={32} height={32} />
        </div>
        <form
          onSubmit={handleSubmit(data => console.log(data))}
          className='flex h-[869px] w-[964px] flex-col gap-6'
        >
          <div className='flex w-[964px] items-start gap-5'>
            <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
              <label htmlFor='storeName'>가게 이름</label>
              <Input
                id='storeName'
                type='text'
                placeholder='입력'
                {...register('storeName', {
                  required: '가게 이름 입력은 필수 입니다.',
                })}
              />
              {errors.storeName && (
                <span>{errors.storeName.message?.toString()}</span>
              )}
            </div>
            <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
              <label htmlFor='classification'>분류</label>
              <select {...register('classification')}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div className='flex w-[964px] items-start gap-5'>
            <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
              <label htmlFor='address'>주소</label>
              <select {...register('address')}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
              <label htmlFor='details'>상세 주소</label>
              <Input
                id='details'
                type='text'
                placeholder='입력'
                {...register('details', {
                  required: '상세 주소는 필수 입력입니다.',
                })}
              />
              {errors.details && (
                <span>{errors.details.message?.toString()}</span>
              )}
            </div>
          </div>
          <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
            <label htmlFor='hourlyRate'>기본 시급</label>
            <Input
              id='hourlyRate'
              type='text'
              {...register('hourlyRate', {
                required: '시급을 입력해주세요.',
              })}
            />
            {errors.hourlyRate && (
              <span>{errors.hourlyRate.message?.toString()}</span>
            )}
          </div>
          <div className='flex w-[483px] flex-col items-start gap-2'>
            <label htmlFor='file'>가게 이미지</label>
            <Input type='file' />
          </div>
          <div className='flex w-[964px] flex-col items-start gap-2'>
            <label id='description' htmlFor='textarea'>
              가게 설명
            </label>
            <Input className='w-[100%]' placeholder='입력'></Input>
          </div>
          <div className='mx-auto my-0'>
            <Button
              size='medium'
              status={isSubmitting ? 'inactive' : 'active'}
              text='가게 등록하기'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStore;
