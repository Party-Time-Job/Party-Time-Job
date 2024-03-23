'use client';

import { FieldValues, useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ShopItem } from './Type.ts';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import Text from '@/shared/ui/Text';
import ADDRESS from '@/shared/constants/Address';
import CLASSIFICATION from '@/shared/constants/Classification';

const baseUrl = 'https://bootcamp-api.codeit.kr/api/3-2/the-julge';

interface EmptyProps {
  name: string;
  category: string;
  address1: string;
  address2: string;
  originalHourlyPay: string;
  imageUrl: string;
  description: string;
}
interface CreateShopProps {
  initialValues: ShopItem | EmptyProps;
  shopId: string | null;
}

const CreateShop = ({ initialValues, shopId }: CreateShopProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FieldValues>({
    defaultValues: initialValues,
  });
  const router = useRouter();
  const url = shopId ? `${baseUrl}/shops/${shopId}` : `${baseUrl}/shops`;
  const method = shopId ? 'PUT' : 'POST';
  const requestInfo = async (data: FieldValues): Promise<void> => {
    const token = localStorage.getItem('accessToken');
    try {
      const response = await fetch(url, {
        method,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        router.push('/shop/details');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    reset(initialValues);
  }, []);
  return (
    <div className='flex flex-col items-center gap-8 px-[238px] py-[60px]'>
      <div className='flex w-[350px] justify-between md:w-[472px] lg:w-[980px]'>
        <div className='flex h-10 w-20 items-center justify-center rounded-lg bg-test-blue text-black'>
          <Text as='span' className='font-bold'>
            가게 정보
          </Text>
        </div>
        <Link href='/shop/details' className='flex'>
          <Image src={'/close.svg'} alt='close' width={32} height={32} />
        </Link>
      </div>
      {/* 여기서부터 폼 태그 */}
      <form
        onSubmit={handleSubmit(data => requestInfo(data))}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   console.log(URL);
        // }}
        className='flex flex-col gap-6'
      >
        <div className='flex flex-col items-center gap-5 lg:flex-row'>
          {/* 가게 이름 */}
          <div className='flex w-[350px] flex-col gap-2 md:w-[472px]'>
            <label htmlFor='name'>가게 이름</label>
            <Input
              width='w-[100%]'
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
          <div className='flex w-[350px] flex-col gap-2 md:w-[472px]'>
            <label htmlFor='category'>분류</label>
            <select
              className='flex gap-2 rounded-md bg-test-black px-4 py-5 text-white'
              {...register('category')}
            >
              {CLASSIFICATION.map(item => (
                <option key={item.key}>{item.value}</option>
              ))}
            </select>
            {errors.category && (
              <span>{errors.category.message?.toString()}</span>
            )}
          </div>
        </div>
        <div className='flex flex-col items-center gap-5 lg:flex lg:flex-row'>
          {/* 주소 */}
          <div className='flex w-[350px] flex-col gap-2  md:w-[472px]'>
            <label htmlFor='address1'>주소</label>
            <select
              className='flex w-[100%] gap-2 rounded-md bg-test-black px-4 py-5 text-white'
              {...register('address1')}
            >
              {ADDRESS.map(item => (
                <option key={item.key}>{item.value}</option>
              ))}
            </select>
            {errors.address1 && (
              <span>{errors.address1.message?.toString()}</span>
            )}
          </div>
          {/* 상세 주소 */}
          <div className='flex w-[350px] flex-shrink-0 flex-col items-start gap-2 md:w-[472px]'>
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
        <div className='flex flex-col gap-2'>
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
        <div className='flex flex-col gap-2'>
          <div>가게 이미지</div>
          <label
            htmlFor='imageUrl'
            className='flex cursor-pointer flex-col gap-2 rounded-lg bg-test-black p-2.5'
          >
            <Text
              as='p'
              className='flex flex-col items-center gap-2 py-20 font-bold leading-5 text-[#A4A1AA]'
            >
              <div className='flex'>
                <Image
                  width={32}
                  height={32}
                  src={'/camera.svg'}
                  alt='camera'
                />
              </div>
              <div>이미지 추가하기</div>
            </Text>
          </label>
          <Input
            className='hidden'
            id='imageUrl'
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
        <div className='flex flex-col gap-2'>
          <label htmlFor='description'>가게 설명</label>
          <textarea
            id='description'
            className='place-content-center rounded-lg bg-test-black p-2.5'
            placeholder='입력'
            rows={8}
            cols={30}
            {...register('description', {
              required: '가게 이름 입력은 필수 입니다.',
            })}
          />
        </div>
        <div className='itens-center flex justify-center gap-10'>
          <Button
            size='medium'
            status={isSubmitting ? 'inactive' : 'active'}
            text={shopId === null ? '정보 수정하기' : '가게 등록하기'}
            disabled={isSubmitting}
            type='submit'
          />
          {initialValues && (
            <Button
              size='medium'
              status={isSubmitting ? 'inactive' : 'active'}
              text='취소하기'
              disabled={isSubmitting}
              type='button'
              onClick={() => router.push('/shop/details')}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateShop;
