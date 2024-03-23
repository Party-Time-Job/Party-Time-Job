'use client';

import { useState } from 'react';
import Button from '@/shared/ui/Button';
import RegisterModal from '@/widgets/RegisterModal/RegisterModal';
import Toast from '@/shared/ui/Toast/Toast';
import Loader from '@/shared/ui/Loader';
import { ConfirmDialog } from '@/shared/ui/Dialog/Dialog';

const RegisterButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
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
    setTimeout(() => {
      setShow(true);
    }, 500);
  };

  return (
    <div>
      <Button
        text='내 프로필 등록하기'
        size='large'
        status='active'
        onClick={handleChange}
      />
      {open && (
        <RegisterModal
          showModal={show}
          onClickClose={handleClickClose}
          setOpen={setIsLoader}
          onClickOpen={() => setIsToast(true)}
          handleClick={handleClickDialog}
        />
      )}
      {isToast && <Toast onShow={() => setIsToast(false)}>등록 완료!</Toast>}
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

export default RegisterButton;
