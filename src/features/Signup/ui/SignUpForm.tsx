import { useForm } from 'react-hook-form';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import { SignupFormComponentProps, SignupFormProps } from '../Types.ts';

const SignUpForm = ({ onSubmit }: SignupFormComponentProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<SignupFormProps>({ mode: 'onBlur' });
  const password = watch('password');

  return (
    <form
      className='mx-auto flex w-80 flex-col gap-7'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col gap-2'>
        <label className='text-gray-500' htmlFor='email'>
          이메일
        </label>
        <Input
          id='email'
          type='email'
          placeholder='text@email.com'
          className={errors.email && 'border-red-600'}
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식이 아닙니다.',
            },
          })}
        />
        {errors.email && (
          <p className='ml-2 text-xs text-red-600'>
            {errors.email.message?.toString()}
          </p>
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <label className='text-gray-500' htmlFor='password'>
          비밀번호
        </label>
        <Input
          id='password'
          type='password'
          placeholder='********'
          className={errors.password && 'border-red-600'}
          {...register('password', {
            required: '비밀번호는 필수 입력입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상입니다.',
            },
          })}
        />
        {errors.password && (
          <p className='ml-2 text-xs text-red-600'>
            {errors.password.message?.toString()}
          </p>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-gray-500' htmlFor='passwordConfirmation'>
          비밀번호 확인
        </label>
        <Input
          id='passwordConfirmation'
          type='password'
          placeholder='********'
          className={errors.passwordConfirmation && 'border-red-600'}
          {...register('passwordConfirmation', {
            required: '비밀번호를 입력해 주세요.',
            validate: value =>
              value === password || '비밀번호가 일치하지 않습니다.',
          })}
        />
        {errors.passwordConfirmation && (
          <p className='ml-2 text-xs text-red-600'>
            {errors.passwordConfirmation.message?.toString()}
          </p>
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <label className='text-gray-500'>회원 유형</label>
        <div className='flex items-center justify-center gap-5'>
          <div
            className={`flex gap-2 rounded-full border px-10 py-3 ${watch('type') === 'employer' ? 'border-test-green ring-test-green' : ''}`}
          >
            <input
              type='radio'
              id='employer'
              value='employer'
              {...register('type', {
                required: '회원 유형을 선택해 주세요.',
              })}
            />
            <label className='text-gray-500' htmlFor='employer'>
              사장님
            </label>
          </div>
          <div
            className={`flex gap-2 rounded-full border px-10 py-3 ${watch('type') === 'employee' ? 'border-test-green ring-test-green' : ''}`}
          >
            <input
              type='radio'
              id='employee'
              value='employee'
              {...register('type', {
                required: '회원 유형을 선택해 주세요.',
              })}
            />
            <label className='text-gray-500' htmlFor='employee'>
              알바님
            </label>
          </div>
        </div>
        {errors.type && (
          <p className='ml-2 text-xs text-red-600'>
            {errors.type.message?.toString()}
          </p>
        )}
      </div>
      <Button
        type='submit'
        size='large'
        text='회원가입'
        disabled={isSubmitting}
        status='active'
      />
    </form>
  );
};

export default SignUpForm;
