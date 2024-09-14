import Input from '@/shared/ui/Input';
import { RecruitmentInputProps } from './model/Type.ts';

const WorkhourInput = ({ register, errors }: RecruitmentInputProps) => {
  return (
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
  );
};

export default WorkhourInput;
