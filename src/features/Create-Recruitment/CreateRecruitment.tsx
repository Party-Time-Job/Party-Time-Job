'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';
import Title from '@/shared/ui/Title';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import { Item } from '@/app/store/registration/recruitment/[id]/type';

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
    const method = noticeId ? 'PUT' : 'POST';
    try {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices`,
        {
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
        },
      );
      if (response.status === 200) {
        router.push('/store/details');
      }
    } catch (error) {
      console.log(error);
    }
  };
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
          onSubmit={handleSubmit(data => requestInfo(data))}
          className='flex h-[303px] w-full flex-col gap-6'
        >
          <div className='inline-flex items-start justify-between gap-5'>
            <div className='flex w-[308px] flex-col items-start gap-2'>
              <label
                htmlFor='hourlyPay'
                className='leading-[26px] text-[#111322]'
              >
                시급
              </label>
              <Input
                placeholder='시급'
                className='flex items-center justify-between self-stretch px-5 py-4'
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
            <div className='flex w-[308px] flex-col items-start gap-2'>
              <label
                htmlFor='startsAt'
                className='leading-[26px] text-[#111322]'
              >
                시작 일시
              </label>
              <Input
                id='startsAt'
                type='date'
                placeholder='입력'
                className='flex items-center justify-between self-stretch px-5 py-4'
                {...register('startsAt', {
                  required: '시작일시를 입력해주세요',
                })}
              />
              {errors.startsAt && (
                <span>{errors.startsAt.message?.toString()}</span>
              )}
            </div>
            <div className='flex w-[308px] flex-col items-start gap-2'>
              <label
                htmlFor='workhour'
                className='label-[#111322] leading-[26px]'
              >
                업무 시간
              </label>
              <Input
                id='workhour'
                type='number'
                placeholder='입력'
                className='flex w-full items-center justify-between self-stretch px-5 py-4'
                {...register('workhour', {
                  required: '업무시간을 입력해주세요',
                })}
              />
              {errors.workhour && (
                <span>{errors.workhour.message?.toString()}</span>
              )}
            </div>
          </div>
          <div className='flex w-full flex-col items-start gap-2'>
            <label
              htmlFor='description'
              className='label-[#111322] leading-[26px]'
            >
              공고 설명
            </label>
            <textarea
              id='description'
              className='bg-#FFF h-[153px] w-full place-content-center rounded-md border border-solid border-[#CBC9CF] p-2.5'
              placeholder='입력'
              {...register('description', {
                required: '공고 설명을 작성해주세요.',
              })}
            />
            {errors.description && (
              <span>{errors.description.message?.toString()}</span>
            )}
          </div>
          <Button
            disabled={isSubmitting}
            text={noticeId ? '수정하기' : '등록하기'}
            type='submit'
            size='medium'
            status='active'
          />
        </form>
      </div>
    </div>
  );
};

export default CreateRecruitment;
