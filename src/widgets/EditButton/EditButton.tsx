'use client';

import { useState } from 'react';
import Button from '@/shared/ui/Button';
import RegisterModal from '../RegisterModal/RegisterModal';
import Toast from '@/shared/ui/Toast/Toast';
import Loader from '@/shared/ui/Loader';
import { ConfirmDialog } from '@/shared/ui/Dialog/Dialog';

export interface EditButtonInterface {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

const EditButton = ({ name, phone, address, bio }: EditButtonInterface) => {
  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [defaultName, setDefaultName] = useState<string>(name);
  const [defaultPhone, setDefaultPhone] = useState<string>(phone);
  const [defaultAddress, setDefaultAddress] = useState<string>(address);
  const [defaultBio, setDefaultBio] = useState<string>(bio);
  const [isToast, setIsToast] = useState<boolean>(false);
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [isDialog, setIsDialog] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleClickDialog = (text: string) => {
    setError(text);
    setIsDialog(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleChange = () => {
    setOpen(true);
    setDefaultName(name);
    setDefaultPhone(phone);
    setDefaultAddress(address);
    setDefaultBio(bio);
    setTimeout(() => {
      setShow(true);
    }, 500);
  };

  return (
    <div>
      <Button
        text='편집하기'
        size='large'
        status='active'
        onClick={handleChange}
      />
      {open && (
        <RegisterModal
          defaultName={defaultName}
          defaultPhone={defaultPhone}
          defaultAddress={defaultAddress}
          defaultBio={defaultBio}
          showModal={show}
          onClickClose={handleClickClose}
          onClickOpen={() => setIsToast(true)}
          handleClick={handleClickDialog}
          setOpen={setIsLoader}
        />
      )}
      {isToast && <Toast onShow={() => setIsToast(false)}>편집 완료!</Toast>}
      {isLoader && <Loader />}
      {isDialog && (
        <ConfirmDialog
          text={error || '요청 실패'}
          onConfirm={() => setIsDialog(false)}
        />
      )}
    </div>
  );
};

export default EditButton;
