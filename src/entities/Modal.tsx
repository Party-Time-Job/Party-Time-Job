import Button from '@/shared/Button';
import Text from '@/shared/Text';

interface ModalComponentProps {
  modaltext?: string;
  buttontext?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({ modaltext, buttontext, onClick }: ModalComponentProps) => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-black opacity-75">
      <div className="relative h-[220px] w-[370px] rounded-lg bg-white md:h-[250px] md:w-[540px]">
        <Text className="absolute left-1/2 top-1/3 mt-5 -translate-x-1/2 -translate-y-1/2 transform text-lg md:top-1/2 md:mt-0">
          {modaltext}
        </Text>
        <div className="absolute bottom-0 left-1/2 mb-7 -translate-x-1/2 transform md:absolute md:bottom-0 md:left-auto md:right-0 md:m-7 md:transform-none">
          <Button onClick={onClick} size="medium" type="active">
            {buttontext}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
