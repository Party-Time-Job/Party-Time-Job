'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import { Item } from '@/app/shop/registration/recruitment/[id]/model/Type';
import Text from '@/shared/ui/Text';
import formatDate from '@/entities/Post/utils/formatDate';
import useCustomTodayDate from './hooks/useCustomTodayDate.ts';
import { MINIMUM_WAGE, LIMIT_WAGE } from '@/shared/constants/Wage.ts';
import useRequestInfo from './hooks/useRequestInfo.ts';

const CreateRecruitment = ({
  noticeData,
  shopId,
  noticeId,
}: {
  noticeData: Item;
  shopId: string;
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
      startsAt: formatDate(noticeData.startsAt),
    },
  });
  const { requestInfo } = useRequestInfo({ noticeId, shopId, getValues });
  const { now } = useCustomTodayDate();

  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <div className='flex flex-col gap-10 rounded-lg border p-10'>
        <div className='flex justify-between'>
          <div className='flex h-10 w-28 items-center justify-center rounded-lg bg-test-blue text-black'>
            <Text as='span' className='font-bold'>
              공고등록
            </Text>
          </div>
          <Link href={`/shop/details/${shopId}`}>
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
            <div className='relative flex flex-col gap-2'>
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
                  validate: {
                    minimumValidate: value =>
                      Number(value) > MINIMUM_WAGE ||
                      '시급은 최저시급 이상이어야 합니다.',
                    limitValidate: value =>
                      Number(value) < LIMIT_WAGE ||
                      '시급은 1000000000원을 넘을 수 없습니다.',
                  },
                })}
              />
              {errors.hourlyPay && (
                <span className='absolute bottom-[-20px] left-1 text-xs text-red-500'>
                  {errors.hourlyPay.message?.toString()}
                </span>
              )}
            </div>
            <div className='relative flex flex-col gap-2'>
              <label htmlFor='startsAt' className='leading-[26px] text-white'>
                시작 일시
              </label>
              <Input
                id='startsAt'
                type='date'
                placeholder='입력'
                {...register('startsAt', {
                  required: '시작일시를 입력해주세요',
                  validate: {
                    timeCheck: value =>
                      new Date(value) >= new Date(formatDate(now)) ||
                      '오늘 이후 날짜로 등록해주세요.',
                  },
                })}
              />
              {errors.startsAt && (
                <span className='absolute bottom-[-20px] left-1 text-xs text-red-500'>
                  {errors.startsAt.message?.toString()}
                </span>
              )}
            </div>
            <div className='relative flex flex-col gap-2'>
              <label htmlFor='workhour' className='leading-[26px] text-white'>
                근무 시간
              </label>
              <Input
                id='workhour'
                type='number'
                placeholder='입력'
                {...register('workhour', {
                  required: '근무시간을 입력해주세요',
                  validate: {
                    workHour: value =>
                      (Number(value) >= 1 && Number(value) <= 24) ||
                      '근무시간은 1시간 이상 24시간 이하로 작성해주세요.',
                  },
                })}
              />
              {errors.workhour && (
                <span className='absolute bottom-[-20px] left-1 text-xs text-red-500'>
                  {errors.workhour.message?.toString()}
                </span>
              )}
            </div>
          </div>
          <div className='relative flex flex-col gap-2'>
            <label htmlFor='description' className='leading-[26px] text-white'>
              공고 설명
            </label>
            <textarea
              id='description'
              className='h-[153px] resize-none place-content-center rounded-md bg-test-black p-2.5'
              placeholder='입력'
              {...register('description', {
                required: '공고 설명을 작성해주세요.',
              })}
            />
            {errors.description && (
              <span className='absolute bottom-[-20px] left-1 text-xs text-red-500'>
                {errors.description.message?.toString()}
              </span>
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
