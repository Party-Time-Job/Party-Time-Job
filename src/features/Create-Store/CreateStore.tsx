'use client';

import { FieldValues, useForm } from 'react-hook-form';
import axios from 'axios';
import Image from 'next/image';
import Title from '@/shared/ui/Title';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import Select from '@/shared/ui/Select/Select';
import ADDRESS from '@/shared/constants/Address';
import Text from '@/shared/ui/Text';
import CLASSIFICATION from '@/shared/constants/Classification';

const baseURL = 'https://bootcamp-api.codeit.kr/api/3-2/the-julge/';

const CreateStore = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  // const postInfo = (data: DataProps) => {
  //   postMethod('/shops', JSON.stringify(data));
  // };

  const token = localStorage.getItem('accessToken');

  const postInfo = async (data: FieldValues) => {
    axios.post(`${baseURL}/shops`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: '*/*',
      },
      body: JSON.stringify(data),
    });
  };

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
          onSubmit={handleSubmit(data => postInfo(data))}
          className='flex h-[869px] w-[964px] flex-col gap-6'
        >
          <div className='flex w-[964px] items-start gap-5'>
            <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
              <label htmlFor='storeName'>가게 이름</label>
              <Input
                width='w-[100%]'
                className='border-[#CBC9CF)] border'
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
              <Select
                type='search'
                options={CLASSIFICATION}
                {...register('classification')}
              />
            </div>
          </div>
          <div className='flex w-[964px] items-start gap-5'>
            <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
              <label htmlFor='address1'>주소</label>
              <Select
                type='search'
                options={ADDRESS}
                {...register('address1')}
              />
            </div>
            <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
              <label htmlFor='address2'>상세 주소</label>
              <Input
                width='w-full'
                id='address2'
                type='text'
                placeholder='입력'
                {...register('address2', {
                  required: '상세 주소는 필수 입력입니다.',
                })}
              />
              {errors.address2 && (
                <span>{errors.address2.message?.toString()}</span>
              )}
            </div>
          </div>
          <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
            <label htmlFor='originalHourlyPay'>기본 시급</label>
            <Input
              width='w-full'
              id='originalHourlyPay'
              type='text'
              {...register('originalHourlyPay', {
                required: '시급을 입력해주세요.',
              })}
            />
            {errors.originalHourlyPay && (
              <span>{errors.originalHourlyPay.message?.toString()}</span>
            )}
          </div>
          <div className='flex h-[500px] w-[472px] flex-col items-start gap-2'>
            <div>가게 이미지</div>
            <div className='h-full w-full'>
              <label htmlFor='imageUrl'>
                <div className='flex h-full flex-col items-center justify-center bg-pt-gray20'>
                  <Image
                    width={32}
                    height={32}
                    src={'/camera.svg'}
                    alt='camera'
                  />
                  <Text
                    as='p'
                    className='text-center font-bold leading-5 text-[#A4A1AA]'
                  >
                    이미지 추가하기
                  </Text>
                </div>
              </label>
            </div>
            <Input id='imageUrl' className='hidden' type='file' />
          </div>
          <div className='flex w-[964px] flex-col items-start gap-2'>
            <label id='description' htmlFor='textarea'>
              가게 설명
            </label>
            <textarea
              className='w-full place-content-center p-2.5'
              placeholder='입력'
              rows={8}
              cols={30}
            />
          </div>
          <div className='mx-auto my-0'>
            <Button
              size='medium'
              status={isSubmitting ? 'inactive' : 'active'}
              text='가게 등록하기'
              disabled={isSubmitting}
              type='submit'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStore;
