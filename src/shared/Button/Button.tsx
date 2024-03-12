import { ButtonInterface } from '@/shared/Button/type';

const Button = ({
  text,
  type = 'button',
  confirm,
  size,
  status,
  onClick,
  onSubmit,
}: ButtonInterface) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      className={`${size} ${status} ${confirm ? 'confirm' : ''} rounded-md border`}
    >
      {text}
    </button>
  );
};

export default Button;
