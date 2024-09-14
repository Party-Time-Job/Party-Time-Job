'use client';

import { Controller, FieldValues, useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ShopItem } from './model/Type.ts';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import Text from '@/shared/ui/Text';
import Select from '@/shared/ui/Select/Select.tsx';
import ADDRESS from '@/shared/constants/Address';
import CLASSIFICATION from '@/shared/constants/Classification';
import getShopId from './model/Api.ts';

const baseUrl = 'https://bootcamp-api.codeit.kr/api/3-2/the-julge';

const MINIMUM_WAGE = 9860;

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
  shopId: string;
}

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

  const registerImageUrl = register('imageUrl');

  const url =
    shopId === 'null' ? `${baseUrl}/shops` : `${baseUrl}/shops/${shopId}`;
  const method = shopId === 'null' ? 'POST' : 'PUT';

  const requestInfo = async (data: FieldValues): Promise<void> => {
    const originalHourlyPay = getValues('originalHourlyPay') as string;
    const uploadPay = originalHourlyPay.replaceAll(',', '');
    const token = getCookie('token');
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
          imageUrl: uploadedImageUrl,
          originalHourlyPay: uploadPay,
        }),
      });
      if (response.status === 200) {
        if (shopId === 'null') {
          const currentShopId = await getShopId();
          router.push(`/shop/details/${currentShopId}`);
        } else {
          router.push(`/shop/details/${shopId}`);
        }
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const generatePresignedUrl = async () => {
    const token = getCookie('token');
    try {
      const response = await fetch(`${baseUrl}/images`, {
        method: 'POST',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ name: imageName }),
      });
      const data = await response.json();
      if (response.ok) {
        setPresignedUrl(data.item.url);
      } else {
        console.error('Failed to generate pre-signed URL:', data);
      }
    } catch (error) {
      console.error('Error generating pre-signed URL:', error);
    }
  };

  const uploadImageToS3 = async (file: File) => {
    try {
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
      });
      if (response.ok) {
        const imageUrl = presignedUrl.split('?')[0]; // Query 파라미터를 제거한 URL
        setUploadedImageUrl(imageUrl);
      } else {
        console.error('Failed to upload image:', response);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageName(file.name);
      setFileName(file);
    }
    generatePresignedUrl();
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
      uploadImageToS3(fileName);
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
      {/* 여기서부터 폼 태그 */}
      <form
        onSubmit={handleSubmit(data => requestInfo(data))}
        className='flex flex-col gap-6'
      >
        <div className='flex flex-col items-center gap-5 lg:flex-row'>
          {/* 가게 이름 */}
          <div className='relative flex w-[350px] flex-col gap-2 md:w-[472px]'>
            <label htmlFor='name'>가게 이름 *</label>
            <Input
              width='w-[100%]'
              id='name'
              type='text'
              placeholder='입력'
              {...register('name', {
                required: '가게 이름 입력은 필수 입니다.',
              })}
            />
            {errors.name && (
              <span className='absolute bottom-[-22px] left-1 text-xs text-red-500'>
                {errors.name.message?.toString()}
              </span>
            )}
          </div>
          {/* 분류 */}
          <div className='z-20 flex w-[350px] flex-col gap-2 md:w-[472px]'>
            <div className='relative w-[100%]'>
              <Controller
                name='category'
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    type='search'
                    title='분류'
                    defaultValue={initialValues.category || '한식'}
                    options={CLASSIFICATION}
                    isRequired
                    onClick={value => {
                      field.onChange(value);
                    }}
                  />
                )}
              />
            </div>
            {errors.category && (
              <span>{errors.category.message?.toString()}</span>
            )}
          </div>
        </div>
        <div className='flex flex-col items-center gap-5 lg:flex-row'>
          {/* 주소 */}
          <div className='z-10  flex w-[350px] flex-col gap-2 md:w-[472px]'>
            <div className='relative w-[100%]'>
              <Controller
                name='address1'
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    type='search'
                    title='주소'
                    defaultValue={initialValues.address1 || '서울시 강동구'}
                    options={ADDRESS}
                    isRequired
                    onClick={value => field.onChange(value)}
                  />
                )}
              />
            </div>
            {errors.address1 && (
              <span>{errors.address1.message?.toString()}</span>
            )}
          </div>
          {/* 상세 주소 */}
          <div className='relative flex w-[350px] flex-shrink-0 flex-col items-start gap-2 md:w-[472px]'>
            <label htmlFor='address2'>상세 주소</label>
            <Input
              width='w-full'
              id='address2'
              type='text'
              placeholder='입력'
              {...register('address2')}
            />
            {errors.address2 && (
              <span className='absolute bottom-[-22px] left-1 text-xs text-red-500'>
                {errors.address2.message?.toString()}
              </span>
            )}
          </div>
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
                registerImageUrl.onChange(e);
                handleChange(e);
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
