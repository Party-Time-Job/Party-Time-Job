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
      <div className="relative h-[250px] w-[540px] rounded-lg bg-white">
        <Text className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-lg">
          {modaltext}
        </Text>
        <div className="absolute bottom-0 right-0 m-7">
          <Button onClick={onClick} size="medium" type="active">
            {buttontext}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
