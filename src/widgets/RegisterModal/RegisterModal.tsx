'use client';

/* eslint-disable no-return-assign */
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import CreatePortal from '@/features/Filter/CreatePortal';
import BackgroundModal from '@/shared/ui/BackgroundModal';
import Input from '@/shared/ui/Input/Input';
import Select from '@/shared/ui/Select/Select';
import Title from '@/shared/ui/Title';
import ADDRESS from '@/widgets/constants/Address';
import Button from '@/shared/ui/Button';

/**
 * @param {string} defaultName 이름 영역에 해당하는 디폴트 값
 * @param {string} defualtPhone 연락처 영역에 해당하는 디폴트 값
 * @param {string} defaultAddress 선호지역 영역에 해당하는 디폴트 값
 * @param {string} defaultBio 소개 영역에 해당하는 디폴트 값
 * @param {function} onClickClose 모달 닫기 클릭 이벤트 핸들러
 * @return 프로필 등록 모달 페이지
 */

export interface RegisterModalInterface {
  defaultName?: string;
  defaultPhone?: string;
  defaultAddress?: string;
  defaultBio?: string;
  onClickClose: () => void;
}

const RegisterModal = ({
  defaultName,
  defaultPhone,
  defaultAddress,
  defaultBio,
  onClickClose,
}: RegisterModalInterface) => {
  const [active, setActive] = useState<boolean>(false);
  const [name, setName] = useState<boolean>(false);
  const [phone, setPhone] = useState<boolean>(false);
  const [address, setAddress] = useState<boolean>(false);
  const [bio, setBio] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement[]>([]);

  const handleChange =
    (setter: Dispatch<SetStateAction<boolean>>) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.currentTarget.value) {
        setter(true);
      } else {
        setter(false);
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
      <div className='z-10 opacity-0'>
        <BackgroundModal onClick={onClickClose}>
          <Title title='내 프로필' gap={24}>
            <div className='grid w-full grid-cols-3 grid-rows-1 pb-6 pt-1 lg:grid-cols-2 lg:grid-rows-2'>
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
                <Button text='등록하기' size='large' status='active' />
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
