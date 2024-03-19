'use client';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-return-assign */
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import CreatePortal from '@/features/CreatePortal';
import BackgroundModal from '@/shared/ui/BackgroundModal';
import Input from '@/shared/ui/Input/Input';
import Select from '@/shared/ui/Select/Select';
import Title from '@/shared/ui/Title';
import ADDRESS from '@/shared/constants/Address';
import Button from '@/shared/ui/Button';
import updateInformation from '@/widgets/api/updateInformation';

/**
 * @param {string} defaultName 이름 영역에 해당하는 디폴트 값
 * @param {string} defualtPhone 연락처 영역에 해당하는 디폴트 값
 * @param {string} defaultAddress 선호지역 영역에 해당하는 디폴트 값
 * @param {string} defaultBio 소개 영역에 해당하는 디폴트 값
 * @param {boolean} showModal 모달 페이지 창 표시 여부
 * @param {function} onClickClose 모달 닫기 클릭 이벤트 핸들러
 * @param {function} onClickOpen 모달 열기 클릭 이벤트 핸들러
 * @param {function} setOpen 모달 열리고 닫히는 상태 관리
 * @return 프로필 등록 모달 페이지
 */

export interface RegisterModalInterface {
  defaultName?: string;
  defaultPhone?: string;
  defaultAddress?: string;
  defaultBio?: string;
  showModal?: boolean;
  onClickClose: () => void;
  onClickOpen: () => void;
  handleClick: (text: string) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const RegisterModal = ({
  defaultName,
  defaultPhone,
  defaultAddress,
  defaultBio,
  showModal,
  onClickClose,
  onClickOpen,
  handleClick,
  setOpen,
}: RegisterModalInterface) => {
  const [active, setActive] = useState<boolean>(false);
  const [name, setName] = useState<boolean>(false);
  const [phone, setPhone] = useState<boolean>(false);
  const [address, setAddress] = useState<boolean>(false);
  const [bio, setBio] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement[]>([]);
  const router = useRouter();

  const handleChange =
    (setter: Dispatch<SetStateAction<boolean>>) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.currentTarget.value) {
        setter(true);
      } else {
        setter(false);
      }
    };

  const handleRegister = async () => {
    const inputValue: Array<string | boolean> = [];
    inputRef.current.forEach(ref => {
      if (typeof ref !== 'function') {
        if (ref.value) {
          inputValue.push(ref.value);
        } else {
          inputValue.push(false);
        }
      }
    });

    let check = true;
    inputValue.forEach(checkValue => {
      if (checkValue === false) {
        check = false;
      }
    });

    if (check) {
      const userId = getCookie('userid') as string;
      setOpen(true);
      const response = await updateInformation(userId, {
        name: inputValue[0] as string,
        phone: inputValue[1] as string,
        address: inputValue[2] as string,
        bio: inputValue[3] as string,
      });
      setOpen(false);

      if (response instanceof Error) {
        handleClick('알 수 없는 에러가 발생했습니다');
      } else if (typeof response === 'string') {
        handleClick(response);
      } else {
        router.refresh();
        onClickOpen();
      }
      onClickClose();
    }
  };

  useEffect(() => {
    if (name && phone && address && bio) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [name, phone, address, bio]);

  return (
    <CreatePortal id='register'>
      <div
        className={
          showModal ? 'z-10 opacity-100 transition-opacity' : 'z-10 opacity-0'
        }
      >
        <BackgroundModal onClick={onClickClose}>
          <Title title='내 프로필' gap={24}>
            <div className='grid w-full grid-cols-3 grid-rows-1 pb-6 pt-1 md:grid-cols-2 md:grid-rows-2'>
              <div className='w-full pr-5'>
                <Input
                  type='input'
                  title='이름*'
                  defaultValue={defaultName || ''}
                  isRequired={false}
                  isValid={false}
                  onChange={handleChange(setName)}
                  ref={(element: HTMLInputElement) =>
                    (inputRef.current[0] = element)
                  }
                />
              </div>
              <div className='w-full pr-5'>
                <Input
                  type='input'
                  title='연락처*'
                  defaultValue={defaultPhone || ''}
                  isRequired={false}
                  isValid={false}
                  onChange={handleChange(setPhone)}
                  ref={(element: HTMLInputElement) =>
                    (inputRef.current[1] = element)
                  }
                />
              </div>
              <div className='w-full lg:pr-5'>
                <Select
                  type='search'
                  title='선호지역*'
                  defaultValue={defaultAddress || ''}
                  isRequired={false}
                  options={ADDRESS}
                  onClick={() => setAddress(true)}
                  ref={(element: HTMLInputElement) =>
                    (inputRef.current[2] = element)
                  }
                />
              </div>
            </div>
            <div className='pb-8'>
              <Input
                type='description'
                title='소개*'
                defaultValue={defaultBio || ''}
                isRequired={false}
                isValid={false}
                onChange={handleChange(setBio)}
                ref={(element: HTMLInputElement) =>
                  (inputRef.current[3] = element)
                }
              />
            </div>
            <div className='mx-auto my-0 w-[346px]'>
              {(defaultName && defaultPhone && defaultAddress && defaultBio) ||
              active ? (
                <Button
                  text='등록하기'
                  size='large'
                  status='active'
                  onClick={handleRegister}
                />
              ) : (
                <Button
                  text='등록하기'
                  size='large'
                  status='inactive'
                  onClick={() => {}}
                />
              )}
            </div>
          </Title>
        </BackgroundModal>
      </div>
    </CreatePortal>
  );
};

export default RegisterModal;
