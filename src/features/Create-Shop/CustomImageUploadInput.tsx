import Image from 'next/image';
import { useEffect, useState } from 'react';
import Input from '@/shared/ui/Input';
import Text from '@/shared/ui/Text';
import { generatePresignedUrl, uploadImageToS3 } from './model/Api.ts';
import { CustomImageUploadInputType } from './model/Type.ts';

const CustomImageUploadInput = ({
  register,
  errors,
  setValue,
  initialValues,
  reset,
  uploadedImageUrl,
  setUploadedImageUrl,
}: CustomImageUploadInputType) => {
  const [presignedUrl, setPresignedUrl] = useState('');
  const [imageName, setImageName] = useState<string>('');
  const [fileName, setFileName] = useState<File | null>(null);
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
    <div className='relative flex h-[400px] w-[350px] flex-col gap-2 overflow-hidden md:w-[472px]'>
      <div>가게 이미지 *</div>
      <div className='relative h-full w-full'>
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
  );
};

export default CustomImageUploadInput;
