interface InputComponentProps {
  className?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width: string;
  height?: string;
}

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  width,
  height
}: InputComponentProps) => {
  return (
    <input
      className={`${width} ${height} flex px-4 py-5 items-start gap-2 self-stretch rounded-md border bg-white`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
