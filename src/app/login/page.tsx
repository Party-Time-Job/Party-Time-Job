'use client';

import { useForm } from 'react-hook-form';
import Input from '@/shared/ui/Input';
import Button from '@/shared/ui/Button';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: 'onBlur' });

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='mb-10 text-3xl font-bold'>여기에 로고</h1>
      <form
        className='mx-auto flex w-80 flex-col gap-7'
        noValidate
        onSubmit={handleSubmit(data => {
          alert(JSON.stringify(data));
        })}
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>이메일</label>
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
          <label htmlFor='password'>비밀번호</label>
          <Input
            id='password'
            type='password'
            placeholder='**********'
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
        <Button
          type='submit'
          size='large'
          text='로그인'
          disabled={isSubmitting}
          status='active'
        />
      </form>
      <span className='mt-5 font-light'>
        회원이 아니신가요?{' '}
        <span className='font-bold text-pt-primary'>회원가입하기</span>
      </span>
    </div>
  );
};

export default LoginPage;
