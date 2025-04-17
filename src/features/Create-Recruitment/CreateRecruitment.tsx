'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Button from '@/shared/ui/Button';
import Text from '@/shared/ui/Text';
import formatDate from '@/entities/Post/utils/formatDate';
import useRequestInfo from './hooks/useRequestInfo.ts';
import { CreateRecruitmentProps, CreateRecruitmentForm } from './model/Type.ts';
import HourlyPayInput from './HourlyPayInput.tsx';
import StartsAtInput from './StartsAtInput.tsx';
import WorkhourInput from './WorkhourInput.tsx';
import DescriptionTextarea from './DescriptionTextarea.tsx';

/**
 * 공고를 등록을 위한 폼 컴포넌트
 *
 * @param {Item} noticeData - 만약 편집을 위해 CreateRecruitment가 렌더링되었다면 기존 내용을 불러옵니다.
 * @param {string} shopId - 외부 DOM에서 가게를 식별하는 ID. 렌더링할 요소의 ID입니다.
 * @param {string | null} noticeId - 외부 DOM에서 공고를 식별하는 ID. 렌더링할 요소의 ID입니다.
 * @return {JSX.Element} 공고 등록을 위한 폼 컴포넌트를 렌더링하는 JSX 요소를 반환합니다.
 */

const CreateRecruitment = ({
  noticeData,
  shopId,
  noticeId,
}: CreateRecruitmentProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm<CreateRecruitmentForm>({
    defaultValues: {
      ...noticeData,
      startsAt: formatDate(noticeData.startsAt),
    },
  });

  const { requestInfo } = useRequestInfo({ noticeId, shopId, getValues });

  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <div className='flex flex-col gap-10 rounded-lg border p-5 md:p-10'>
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
            <HourlyPayInput register={register} errors={errors} />
            <StartsAtInput register={register} errors={errors} />
            <WorkhourInput register={register} errors={errors} />
          </div>
          <DescriptionTextarea register={register} errors={errors} />
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
