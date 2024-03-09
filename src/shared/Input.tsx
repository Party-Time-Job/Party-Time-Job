/**
 * @param {string} width 
 * 테일윈드 규칙으로 작성해주시면 됩니다. 기본값을 설정해 두었습니다.
 * @param {string} height 
 * 테일윈드 규칙으로 작성해주시면 됩니다. 필수는 아닙니다.
 * @returns 사이즈에 맞는 인풋을 반환합니다. 
 */

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
  width = 'w-80',
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
