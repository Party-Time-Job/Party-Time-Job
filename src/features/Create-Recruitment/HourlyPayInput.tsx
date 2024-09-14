import Input from '@/shared/ui/Input';
import { MINIMUM_WAGE, LIMIT_WAGE } from '@/shared/constants/Wage.ts';
import { RecruitmentInputProps } from './model/Type.ts';

const HourlyPayInput = ({ register, errors }: RecruitmentInputProps) => {
  return (
    <div className='relative flex flex-col gap-2'>
      <label htmlFor='hourlyPay' className='leading-[26px] text-white'>
        시급
      </label>
      <Input
        placeholder='시급'
        className='px-5 py-4'
        type='number'
        id='hourlyPay'
        {...register('hourlyPay', {
          required: '시급을 입력해주세요.',
          validate: {
            minimumValidate: value =>
              Number(value) > MINIMUM_WAGE ||
              '시급은 최저시급 이상이어야 합니다.',
            limitValidate: value =>
              Number(value) < LIMIT_WAGE ||
              '시급은 1000000000원을 넘을 수 없습니다.',
          },
        })}
      />
      {errors.hourlyPay && (
        <span className='absolute bottom-[-20px] left-1 text-xs text-red-500'>
          {errors.hourlyPay.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default HourlyPayInput;
