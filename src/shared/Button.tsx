import Text from './Text';

/**
 * @param {string} type
 * 타입은 총 세가지가 있습니다. active, negative, default 세개중 골라 쓰시면 됩니다. 설정하지 않을 시 default로 처리됩니다.
 * @param {string} size
 * 사이즈는 총 세가지가 있습니다. large, medium, small
 * 타입과 사이즈는 클래스 네임으로서 테일윈드로 설정하기 어려운 조건은 따로 global.css 로 처리해 주었습니다.
 * 타입과 사이즈의 규격은 global.css 에서 확인하실 수 있습니다.
 * @param {string} children 
 * 버튼에 들어갈 내용을 입력해주세요
 * @param {function} onClick 
 * 이벤트 함수를 등록해주세요
 * @returns 타입과 사이즈에 맞는 버튼을 반환합니다.
 */

interface ButtonComponentProps {
  type?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: string;
}

const Button = ({
  type = 'default',
  size = 'large',
  children,
  onClick,
}: ButtonComponentProps) => {
  return (
    <button
      className={`${type} ${size} align-center inline-flex justify-center gap-2 rounded-md border border-pt-primary`}
      onClick={onClick}
    >
      <Text className="text-center leading-5">{children}</Text>
    </button>
  );
};

export default Button;
