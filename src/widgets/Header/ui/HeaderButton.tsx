export interface ButtonInterface {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const HeaderButton = ({ text, onClick }: ButtonInterface) => {
  return (
    <button
      onClick={onClick}
      className='color-change-2 text-xs font-normal text-gray-400 transition-all duration-300 hover:text-test-green'
    >
      {text}
    </button>
  );
};

export default HeaderButton;
