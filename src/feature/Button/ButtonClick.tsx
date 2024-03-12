import Button from '@/shared/Button/Button';
import { OmitButton } from '@/shared/Button/type';

export function ActiveButton(props: OmitButton) {
  return <Button status='active' {...props} />;
}

export function InactiveButton(props: OmitButton) {
  return <Button status='inactive' {...props} />;
}

export function ActiveConfirmButton(props: OmitButton) {
  return <Button status='active' confirm={true} {...props} />;
}
