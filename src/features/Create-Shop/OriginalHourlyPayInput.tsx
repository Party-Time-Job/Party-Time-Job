import Input from '@/shared/ui/Input';
import { MINIMUM_WAGE } from '@/shared/constants/Wage.ts';
import { OriginalHourlyPayInputType } from './model/Type.ts';

const OriginalHourlyPayInput = ({
  register,
  errors,
  setValue,
}: OriginalHourlyPayInputType) => {
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

  return (
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
  );
};
export default OriginalHourlyPayInput;
