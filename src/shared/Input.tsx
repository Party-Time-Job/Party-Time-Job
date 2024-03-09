interface InputComponentProps {
  className?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
  placeholder?: string;
  restProps?: string[];
}

const Input = ({
  className,
  type,
  value,
  onChange,
  placeholder,
  ...restProps
}: InputComponentProps) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default Input;
