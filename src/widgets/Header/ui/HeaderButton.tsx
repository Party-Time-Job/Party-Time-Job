export interface ButtonInterface {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const HeaderButton = ({ text, onClick }: ButtonInterface) => {
  return (
    <button
      onClick={onClick}
      className='rounded-md px-3 py-1 text-xs font-normal text-gray-400 transition-all duration-300 hover:bg-test-green hover:font-bold hover:text-black'
    >
      {text}
    </button>
  );
};

export default HeaderButton;
