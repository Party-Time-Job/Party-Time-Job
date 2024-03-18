'use client';

import { FieldValues, useForm } from 'react-hook-form';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
import Title from '@/shared/ui/Title';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import Text from '@/shared/ui/Text';
import ADDRESS from '@/shared/constants/Address';
import CLASSIFICATION from '@/shared/constants/Classification';

const CreateStore = () => {
  // const [storeData, setStoreData] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  console.log(id, '------------------id--------------');
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      name: '',
      category: '',
      address1: '',
      address2: '',
      description: '',
      imageUrl: '',
      originalHourlyPay: '',
    },
  });
  // name: storeData.name,
  // category: storeData.category,
  // address1: storeData.address1,
  // address2: storeData.address2,
  // description: storeData.description,
  // imageUrl: storeData.imageUrl,
  // originalHourlyPay: storeData.originalHourlyPay,

  const postInfo = async (data: FieldValues): Promise<void> => {
    const token = localStorage.getItem('accessToken');
    try {
      await fetch('https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops', {
        method: 'POST',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };
  // 원래는 전역상태 관리 객체에서 값을 가져온다.
  // useEffect(() => {
  //   const response = fetch();
  // }, []);

  return (
    <div className='flex flex-col items-start gap-2 bg-[#FAFAFA] px-[238px] py-[60px]'>
      <div className='flex flex-col items-center gap-8'>
        <div className='flex w-[964px] items-center justify-between'>
          <Title title='가게정보'>
            <div></div>
          </Title>
          <Image src={'/close.svg'} alt='close' width={32} height={32} />
        </div>
        {/* 여기서부터 폼 태그 */}
        <form
          onSubmit={handleSubmit(data => postInfo(data))}
          className='flex h-[869px] w-[964px] flex-col gap-6'
        >
          <div className='flex w-[964px] items-start gap-5'>
            {/* 가게 이름 */}
            <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
              <label htmlFor='name'>가게 이름</label>
              <Input
                width='w-[100%]'
                className='border-[#CBC9CF)] border'
                id='name'
                type='text'
                placeholder='입력'
                {...register('name', {
                  required: '가게 이름 입력은 필수 입니다.',
                })}
              />
              {errors.name && <span>{errors.name.message?.toString()}</span>}
            </div>
            {/* 분류 */}
            <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
              <label htmlFor='category'>분류</label>
              <select {...register('category')}>
                {CLASSIFICATION.map(item => (
                  <option key={item.key}>{item.value}</option>
                ))}
              </select>
              {errors.category && (
                <span>{errors.category.message?.toString()}</span>
              )}
            </div>
          </div>
          <div className='flex w-[964px] items-start gap-5'>
            {/* 주소 */}
            <div className='flex w-[472px] flex-shrink-0 flex-col items-start gap-2'>
              <label htmlFor='address1'>주소</label>
              <select {...register('address1')}>
                {ADDRESS.map(item => (
                  <option key={item.key}>{item.value}</option>
                ))}
              </select>
              {errors.address1 && (
                <span>{errors.address1.message?.toString()}</span>
              )}
            </div>
            {/* 상세 주소 */}
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
          {/* 시급 작성  */}
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
          {/* 가게 이미지 추가하기  */}
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
            <Input
              id='imageUrl'
              // className='hidden'
              type='text'
              {...register('imageUrl', {
                required: '이미지를 추가해주세요.',
              })}
            />
            {errors.imageUrl && (
              <span>{errors.imageUrl.message?.toString()}</span>
            )}
          </div>
          {/* 가게 상세 설명 작성 */}
          <div className='flex w-[964px] flex-col items-start gap-2'>
            <label htmlFor='description'>가게 설명</label>
            <textarea
              id='description'
              className='w-full place-content-center p-2.5'
              placeholder='입력'
              rows={8}
              cols={30}
              {...register('description', {
                required: '가게 이름 입력은 필수 입니다.',
              })}
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
