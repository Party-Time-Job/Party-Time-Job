'use client';

import { useRouter } from 'next/navigation';
import { set, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Input from '@/shared/ui/Input';
import Button from '@/shared/ui/Button';
import AlertModal from '@/shared/ui/AlertModal';

interface SignupForm {
  email: string;
  password: string;
  passwordConfirmation: string;
  type: string;
}

interface TokenResponse {
  item: {
    token: string;
  };
}

const SignupPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<SignupForm>({ mode: 'onBlur' });
  const router = useRouter();
  const password = watch('password');

  useEffect(() => {
    if (window.localStorage.getItem('accessToken')) {
      router.push('/notice');
    }
  }, [router]);

  const onSubmit = async (data: SignupForm): Promise<void> => {
    console.log(data);
    try {
      const response = await axios.post<TokenResponse>(
        'https://bootcamp-api.codeit.kr/api/3-2/the-julge/users',
        data,
      );
      const { token } = response.data.item;
      window.localStorage.setItem('accessToken', token);

      if (response.status === 201) {
        setShowModal(true); // 가입완료 모달 팝업
        router.push('/notice');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error?.response?.status === 400 ||
          error?.response?.status === 404
        ) {
          setShowModal(true); // 이메일 또는 비밀번호 확인 모달 팝업
        }

        if (error?.response?.status === 409) {
          setShowModal(true); // 중복 이메일 모달 팝업
        } else {
          console.error(error);
        }
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      {showModal && (
        <AlertModal
          modalText='이메일 또는 비밀번호를 확인해주세요.'
          buttonText='확인'
          onClick={handleCloseModal}
        />
      )}
      <Link href='/notice'>
        <h1 className='mb-10 cursor-pointer text-3xl font-bold'>여기에 로고</h1>
      </Link>
      <form
        className='mx-auto flex w-80 flex-col gap-7'
        noValidate
        onSubmit={handleSubmit(onSubmit)}
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
          <label htmlFor='passwordConfirmation'>비밀번호 확인</label>
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
          <label>회원 유형</label>
          <div className='flex items-center justify-center gap-5'>
            <div
              className={`flex gap-2 rounded-full border px-10 py-3 ${watch('type') === 'employer' ? 'border-pt-primary ring-pt-primary' : ''}`}
            >
              <input
                type='radio'
                id='employer'
                value='employer'
                {...register('type', {
                  required: '회원 유형을 선택해 주세요.',
                })}
              />
              <label htmlFor='employer'>사장님</label>
            </div>
            <div
              className={`flex gap-2 rounded-full border px-10 py-3 ${watch('type') === 'employee' ? 'border-pt-primary ring-pt-primary' : ''}`}
            >
              <input
                type='radio'
                id='employee'
                value='employee'
                {...register('type', {
                  required: '회원 유형을 선택해 주세요.',
                })}
              />
              <label htmlFor='employee'>알바님</label>
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
      <span className='mt-5 font-light'>
        이미 가입하셨나요?{' '}
        <Link href='/login'>
          <span className='cursor-pointer font-bold text-pt-primary'>
            로그인하기
          </span>
        </Link>
      </span>
    </div>
  );
};

export default SignupPage;
