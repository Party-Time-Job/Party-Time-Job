import { RecruitmentInputProps } from './model/Type.ts';

const DescriptionTextarea = ({ register, errors }: RecruitmentInputProps) => {
  return (
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
  );
};

export default DescriptionTextarea;
