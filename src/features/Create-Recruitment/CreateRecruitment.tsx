'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import { Item } from '@/app/shop/registration/recruitment/[id]/type';
import Text from '@/shared/ui/Text';

const baseUrl = 'https://bootcamp-api.codeit.kr/api/3-2/the-julge';

const CreateRecruitment = ({
  noticeData,
  shopId,
  noticeId,
}: {
  shopId: string;
  noticeData: Item;
  noticeId: string | null;
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      ...noticeData,
      startsAt: new Date(noticeData.startsAt).toISOString(),
    },
  });
  const router = useRouter();
  const requestInfo = async (data: FieldValues): Promise<void> => {
    const token = localStorage.getItem('accessToken');
    const { startsAt } = getValues();
    const url = noticeId
      ? `${baseUrl}/shops/${shopId}/notices/${noticeId}`
      : `${baseUrl}/shops/${shopId}/notices`;
    const method = noticeId ? 'PUT' : 'POST';
    try {
      const response = await fetch(url, {
        method,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          ...data,
          startsAt: new Date(startsAt).toISOString(),
        }),
      });
      if (response.status === 200) {
        router.push('/shop/details');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <div className='flex flex-col gap-10 rounded-lg border p-10'>
        <div className='flex justify-between'>
          <div className='flex h-10 w-28 items-center justify-center rounded-lg bg-test-blue text-black'>
            <Text as='span' className='font-bold'>
              공고등록
            </Text>
          </div>
          <Link href='/shop/details'>
            <Image
              width={32}
              height={32}
              src={'/close-white.svg'}
              alt='close'
            />
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(data => requestInfo(data))}
          className='flex flex-col gap-10'
        >
          <div className='flex flex-col gap-5 lg:flex lg:flex-row'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='hourlyPay' className='leading-[26px] text-white'>
                시급
              </label>
              <Input
                placeholder='시급'
                className='px-5 py-4'
                type='number'
                id='hourlyPay'
                {...register('hourlyPay', {
                  required: '시급을 입력해주세요.',
                })}
              />
              {errors.hourlyPay && (
                <span>{errors.hourlyPay.message?.toString()}</span>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='startsAt' className='leading-[26px] text-white'>
                시작 일시
              </label>
              <Input
                id='startsAt'
                type='date'
                placeholder='입력'
                {...register('startsAt', {
                  required: '시작일시를 입력해주세요',
                })}
              />
              {errors.startsAt && (
                <span>{errors.startsAt.message?.toString()}</span>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='workhour' className='leading-[26px] text-white'>
                업무 시간
              </label>
              <Input
                id='workhour'
                type='number'
                placeholder='입력'
                {...register('workhour', {
                  required: '업무시간을 입력해주세요',
                })}
              />
              {errors.workhour && (
                <span>{errors.workhour.message?.toString()}</span>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='description' className='leading-[26px] text-white'>
              공고 설명
            </label>
            <textarea
              id='description'
              className='h-[153px] place-content-center rounded-md bg-test-black p-2.5'
              placeholder='입력'
              {...register('description', {
                required: '공고 설명을 작성해주세요.',
              })}
            />
            {errors.description && (
              <span>{errors.description.message?.toString()}</span>
            )}
          </div>
          <div className='flex justify-end'>
            <Button
              disabled={isSubmitting}
              text={noticeId ? '수정하기' : '등록하기'}
              type='submit'
              size='medium'
              status='active'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRecruitment;
