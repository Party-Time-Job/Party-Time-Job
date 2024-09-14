'use client';

import { FieldValues, useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateShopProps } from './model/Type.ts';
import Button from '@/shared/ui/Button';
import Text from '@/shared/ui/Text';
import useCreateShopRequest from './hooks/useCreateShopRequest.tsx';
import { uploadImageToS3 } from './model/Api.ts';
import ShopNameInput from './ShopNameInput.tsx';
import CategorySelect from './CategorySelect.tsx';
import AddressSelect from './AddressSelect.tsx';
import AddressDetailSelect from './AddressDetailSelect.tsx';
import OriginalHourlyPayInput from './OriginalHourlyPayInput.tsx';
import CustomImageUploadInput from './CustomImageUploadInput.tsx';
import DescriptionTextArea from './DescriptionTextArea.tsx';

const CreateShop = ({ initialValues, shopId }: CreateShopProps) => {
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
  const [presignedUrl, setPresignedUrl] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | undefined>(
    '',
  );
  const [imageName, setImageName] = useState<string>('');
  const [fileName, setFileName] = useState<File | null>(null);
  const router = useRouter();
  const { requestInfo } = useCreateShopRequest({
    shopId,
    uploadedImageUrl,
    getValues,
  });

  useEffect(() => {
    if (presignedUrl && fileName) {
      uploadImageToS3({ fileName, presignedUrl, setUploadedImageUrl });
    }
  }, [presignedUrl]);

  useEffect(() => {
    reset(initialValues);
    setUploadedImageUrl(initialValues.imageUrl);
    setValue('imageUrl', initialValues.imageUrl);
  }, []);

  return (
    <div className='flex flex-col items-center gap-8 px-[238px] py-[60px]'>
      <div className='flex w-[350px] justify-between md:w-[472px] lg:w-[980px]'>
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
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            imageName={imageName}
            setImageName={setImageName}
            setFileName={setFileName}
            setPresignedUrl={setPresignedUrl}
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
  );
};

export default CreateShop;
