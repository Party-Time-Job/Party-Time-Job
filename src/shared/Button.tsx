import Text from './Text';

interface ButtonComponentProps {
  type?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [key: string]: any;
}

const Button = ({
  type = 'white',
  children,
  onClick,
  ...restProps
}: ButtonComponentProps) => {
  return (
    <button
      className={`align-center bg-pt-${type} inline-flex justify-center gap-2 rounded-md border border-pt-primary px-32 py-3`}
      onClick={onClick}
      {...restProps}
    >
      <Text>
        {children}
      </Text>
    </button>
  );
};

export default Button;
