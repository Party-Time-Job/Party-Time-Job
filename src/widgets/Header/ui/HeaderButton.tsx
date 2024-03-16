export interface ButtonInterface {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const HeaderButton = ({ text, onClick }: ButtonInterface) => {
  return (
    <button
      onClick={onClick}
      className='border-test-green hover:bg-test-green rounded-xl border-2 px-3 py-1 text-sm font-bold text-white transition-all duration-300 hover:font-bold hover:text-black'
    >
      {text}
    </button>
  );
};

export default HeaderButton;
