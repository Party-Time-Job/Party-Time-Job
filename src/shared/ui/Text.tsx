/**
 * @param {reactNode} children
 * 타입을 string으로 해주어도 되지만 좀더 범용적인 ReactNode를 적용했습니다
 * @param {as} React.ReactNode
 * 원하시는 태그를 반영해서 사용하시면 되겠습니다 <span> or <p>
 * @returns 입력해준 내용을 반환합니다.
 */

interface TextComponentProps {
  children: React.ReactNode;
  className?: string;
  as: React.ElementType;
}

const Text = ({ children, className, as }: TextComponentProps) => {
  const Component = as;
  return <Component className={className}>{children}</Component>;
};

export default Text;
