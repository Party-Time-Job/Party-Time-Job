interface ButtonComponentProps {
  options: {
    className?: string | '';
    children: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    restProps?: { [key: string]: any } | '';
  };
}

const Button = ({ options }: ButtonComponentProps) => {
  const { className, children, onClick, restProps } = options;
  return (
    <button className={className} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
