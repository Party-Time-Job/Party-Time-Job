'use client';

import { FieldValues, useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateShopProps } from './model/Type.ts';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import Text from '@/shared/ui/Text';
import useCreateShopRequest from './hooks/useCreateShopRequest.tsx';
import { generatePresignedUrl, uploadImageToS3 } from './model/Api.ts';
import { MINIMUM_WAGE } from '@/shared/constants/Wage.ts';
import ShopNameInput from './ShopNameInput.tsx';
import CategorySelect from './CategorySelect.tsx';
import AddressSelect from './AddressSelect.tsx';
import AddressDetailSelect from './AddressDetailSelect.tsx';

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageName(file.name);
      setFileName(file);
    }
    generatePresignedUrl({ imageName, setPresignedUrl });
    setValue('imageUrl', '');
    setUploadedImageUrl('');
  };

  const handlePayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hourlyPay = Number(e.target.value.replaceAll(',', ''));
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(hourlyPay) || !hourlyPay) {
      setValue('originalHourlyPay', '');
    } else {
      setValue('originalHourlyPay', hourlyPay);
    }
  };

  const handlePayBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pay = Number(e.target.value);
    if (pay) {
      setValue('originalHourlyPay', pay.toLocaleString('ko-KR'));
    }
  };

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
          {/* 주소 */}
          <AddressSelect
            control={control}
            initialValues={initialValues}
            errors={errors}
          />
          {/* 상세 주소 */}
          <AddressDetailSelect register={register} errors={errors} />
        </div>
        <div className='flex flex-col items-center gap-7 lg:items-start'>
          {/* 시급 작성  */}
          <div className='relative flex w-[350px] flex-shrink-0 flex-col items-start gap-2 md:w-[472px]'>
            <label htmlFor='originalHourlyPay'>기본 시급 *</label>
            <Input
              width='w-full'
              id='originalHourlyPay'
              type='text'
              placeholder='입력'
              {...register('originalHourlyPay', {
                required: '시급을 입력해주세요.',
                onChange: e => handlePayChange(e),
                onBlur: e => handlePayBlur(e),
                validate: {
                  checkWage: (v: string) =>
                    Number(v.replaceAll(',', '')) >= MINIMUM_WAGE ||
                    '최저임금 보다 적습니다.',
                },
              })}
            />
            <span className='absolute right-4 top-[51px]'>원</span>
            {errors.originalHourlyPay && (
              <span className='absolute left-1 top-[105px] text-xs text-red-500'>
                {errors.originalHourlyPay.message?.toString()}
              </span>
            )}
          </div>
          {/* 가게 이미지 추가하기  */}
          <div className='relative flex h-[400px] w-[350px] flex-col gap-2 overflow-hidden md:w-[472px]'>
            <div>가게 이미지 *</div>
            <div className='relative h-full w-full'>
              {/* 클로즈 X 아이콘 */}
              {uploadedImageUrl && (
                <Image
                  className='absolute right-3 top-3 cursor-pointer'
                  width={32}
                  height={32}
                  src={'/close.svg'}
                  alt='close'
                  onClick={() => {
                    setValue('imageUrl', '');
                    setUploadedImageUrl('');
                  }}
                />
              )}
              <label htmlFor='imageUrl'>
                <div className='flex h-full flex-col items-center justify-center rounded-lg bg-test-black'>
                  {uploadedImageUrl ? (
                    <div className='h-[300px] overflow-hidden'>
                      <Image
                        priority
                        width={0}
                        height={0}
                        src={uploadedImageUrl}
                        alt='Preview'
                        sizes='100vw'
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </div>
                  ) : (
                    <div className='flex w-full flex-col justify-center'>
                      <div className='mx-auto'>
                        <Image
                          width={32}
                          height={32}
                          src={'/camera.svg'}
                          alt='camera'
                        />
                      </div>
                      <Text
                        as='p'
                        className='cursor-pointer text-center font-bold leading-5 text-[#A4A1AA]'
                      >
                        이미지 추가하기
                      </Text>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <Input
              className='invisible h-[0px] w-[100%]'
              id='imageUrl'
              type='file'
              accept='.jpg,.jpeg,.png,.svg,.webp'
              {...register('imageUrl', {
                validate: {
                  hasImage: () => uploadedImageUrl !== '',
                },
              })}
              onChange={e => {
                register('imageUrl').onChange(e);
                handleFileChange(e);
              }}
            />
            {errors.imageUrl && (
              <span className='absolute bottom-[25px] left-1 text-xs text-red-500'>
                이미지를 등록해주세요.
              </span>
            )}
          </div>
        </div>
        {/* 가게 상세 설명 작성 */}
        <div className='relative flex flex-col gap-2'>
          <label htmlFor='description'>가게 설명 *</label>
          <textarea
            id='description'
            className='resize-none place-content-center rounded-lg bg-test-black p-2.5'
            placeholder='가게에 대해 간단히 소개해주세요.'
            rows={8}
            cols={30}
            {...register('description', {
              required: '가게 이름 입력은 필수 입니다.',
            })}
          />
          {errors.description && (
            <span className='absolute bottom-[-23px] left-1 text-xs text-red-500'>
              {errors.description.message?.toString()}
            </span>
          )}
        </div>
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
