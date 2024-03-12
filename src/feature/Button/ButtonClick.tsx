import Button from '@/shared/Button/Button';
import { OmitButton } from '@/shared/Button/type';

export const ActiveButton = (props: OmitButton) => {
  return <Button status='active' {...props} />;
};

export const InactiveButton = (props: OmitButton) => {
  return <Button status='inactive' {...props} />;
};

export const ActiveConfirmButton = (props: OmitButton) => {
  return <Button status='active' confirm={true} {...props} />;
};
