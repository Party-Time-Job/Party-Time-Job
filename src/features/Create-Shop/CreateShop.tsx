'use client';

import { FieldValues, useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateShopProps } from './model/Type.ts';
import Button from '@/shared/ui/Button';
import Text from '@/shared/ui/Text';
import useCreateShopRequest from './hooks/useCreateShopRequest.tsx';
import ShopNameInput from './ShopNameInput.tsx';
import CategorySelect from './CategorySelect.tsx';
import AddressSelect from './AddressSelect.tsx';
import AddressDetailSelect from './AddressDetailSelect.tsx';
import OriginalHourlyPayInput from './OriginalHourlyPayInput.tsx';
import CustomImageUploadInput from './CustomImageUploadInput.tsx';
import DescriptionTextArea from './DescriptionTextArea.tsx';

/**
 * 공고를 등록을 위한 폼 컴포넌트
 *
 * @param {ShopItem | EmptyProps} initialValues - 첫 가게 등록 시 폼 컨트롤러에 빈 값을 출력하고 편집을 위해 페이지에 들어왔다면 기존 정보가 출력됩니다.
 * @param {string} shopId - 외부 DOM에서 가게를 식별하는 ID. 렌더링할 요소의 ID입니다.
 * @return {JSX.Element} 가게 등록을 위한 폼 컴포넌트를 렌더링하는 JSX 요소를 반환합니다.
 */

const CreateShop = ({
  initialValues,
  shopId,
}: CreateShopProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { isSubmitting, errors, isSubmitted },
    control,
  } = useForm<FieldValues>({
    defaultValues: initialValues,
  });
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | undefined>(
    '',
  );
  const router = useRouter();
  const { requestInfo } = useCreateShopRequest({
    shopId,
    uploadedImageUrl,
    getValues,
  });

  return (
    <div className='flex justify-center p-5 py-[60px] md:p-10'>
      <div className='p-2 md:rounded-lg md:border md:p-10'>
        <div className='mb-8 flex justify-between md:mb-12 md:w-[472px] lg:w-[980px]'>
          <div className='flex h-10 w-20 items-center justify-center rounded-lg bg-test-blue text-black'>
            <Text as='span' className='font-bold'>
              가게 정보
            </Text>
          </div>
          <Link href={`/shop/details/${shopId}`} className='flex'>
            <Image src={'/close.svg'} alt='close' width={32} height={32} />
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(data => requestInfo(data))}
          className='flex flex-col gap-6'
        >
          <div className='flex flex-col items-center gap-5 lg:flex-row'>
            <ShopNameInput register={register} errors={errors} />
            <CategorySelect
              control={control}
              initialValues={initialValues}
              errors={errors}
            />
          </div>
          <div className='flex flex-col items-center gap-5 lg:flex-row'>
            <AddressSelect
              control={control}
              initialValues={initialValues}
              errors={errors}
            />
            <AddressDetailSelect register={register} errors={errors} />
          </div>
          <div className='flex flex-col items-center gap-7 lg:items-start'>
            <OriginalHourlyPayInput
              register={register}
              errors={errors}
              setValue={setValue}
            />
            <CustomImageUploadInput
              register={register}
              errors={errors}
              setValue={setValue}
              initialValues={initialValues}
              reset={reset}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
            />
          </div>
          <DescriptionTextArea register={register} errors={errors} />
          <div className='itens-center mt-5 flex justify-center gap-10'>
            <Button
              size='medium'
              status={isSubmitting ? 'inactive' : 'active'}
              text={shopId === null ? '정보 수정하기' : '가게 등록하기'}
              disabled={isSubmitting || isSubmitted}
              type='submit'
            />
            {initialValues && (
              <Button
                size='medium'
                status={isSubmitting ? 'inactive' : 'active'}
                text='취소하기'
                disabled={isSubmitting || isSubmitted}
                type='button'
                onClick={() => router.push(`/shop/details/${shopId}`)}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateShop;
