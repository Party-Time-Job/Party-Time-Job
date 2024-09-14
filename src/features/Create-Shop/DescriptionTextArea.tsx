import { CreateShopInputProps } from './model/Type.ts';

const DescriptionTextArea = ({ register, errors }: CreateShopInputProps) => {
  return (
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
  );
};

export default DescriptionTextArea;
