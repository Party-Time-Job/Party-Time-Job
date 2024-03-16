import { FieldValues } from 'react-hook-form';
import React, { useRef, useState } from 'react';
import Button from '@/shared/ui/Button';
import { HiddenInput, ProfilePictureContainer, Label } from './styles';

const StoreImage = ({ register }: FieldValues) => {
  const hiddenInputRef = useRef();

  const { ref: registerRef, ...rest } = register('imageUrl');

  const [preview, setPreview] = useState();

  const handleUploadedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];

    const urlImage = URL.createObjectURL(file);

    setPreview(urlImage);
  };

  const onUpload = () => {
    hiddenInputRef.current.click();
  };

  const uploadButtonLabel = preview ? 'Change image' : 'Upload image';

  return (
    <ProfilePictureContainer>
      <Label>Profile picture</Label>

      <HiddenInput
        type='file'
        name='profilePicture'
        {...rest}
        onChange={handleUploadedFile}
        ref={(e: React.ChangeEvent<HTMLInputElement>) => {
          registerRef(e);
          hiddenInputRef.current = e;
        }}
      />

      <Button onClick={onUpload}>{uploadButtonLabel}</Button>
    </ProfilePictureContainer>
  );
};

export default StoreImage;
