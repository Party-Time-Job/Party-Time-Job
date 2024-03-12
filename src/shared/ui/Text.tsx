/**
 * @param {reactNode} children
 * 타입을 string으로 해주어도 되지만 좀더 범용적인 ReactNode를 적용했습니다
 * @returns 입력해준 내용을 반환합니다.
 */

interface TextComponentProps {
  children: React.ReactNode;
  className?: string;
}

const Text = ({ children, className }: TextComponentProps) => {
  return <span className={className}>{children}</span>;
};

export default Text;
