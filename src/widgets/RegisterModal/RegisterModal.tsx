/* eslint-disable no-return-assign */
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import CreatePortal from '@/features/Filter/CreatePortal';
import BackgroundModal from '@/shared/ui/BackgroundModal';
import Input from '@/shared/ui/Input/Input';
import Select from '@/shared/ui/Select/Select';
import Title from '@/shared/ui/Title';
import ADDRESS from '@/widgets/constants/Address';
import Button from '@/shared/ui/Button';

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
      <div>
        <BackgroundModal onClick={onClickClose}>
          <Title title='내 프로필' gap={24}>
            <div>
              <div>
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
              <div>
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
              <div>
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
            <div>
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
            <div>
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
