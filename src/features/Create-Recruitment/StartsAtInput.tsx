import Input from '@/shared/ui/Input';
import formatDate from '@/entities/Post/utils/formatDate';
import useCustomTodayDate from './hooks/useCustomTodayDate.ts';
import { RecruitmentInputProps } from './model/Type.ts';

const StartsAtInput = ({ register, errors }: RecruitmentInputProps) => {
  const { now } = useCustomTodayDate();
  return (
    <div className='relative flex flex-col gap-2'>
      <label htmlFor='startsAt' className='leading-[26px] text-white'>
        시작 일시
      </label>
      <Input
        id='startsAt'
        type='date'
        placeholder='입력'
        {...register('startsAt', {
          required: '시작일시를 입력해주세요',
          validate: {
            timeCheck: value =>
              new Date(value) >= new Date(formatDate(now)) ||
              '오늘 이후 날짜로 등록해주세요.',
          },
        })}
      />
      {errors.startsAt && (
        <span className='absolute bottom-[-20px] left-1 text-xs text-red-500'>
          {errors.startsAt.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default StartsAtInput;
