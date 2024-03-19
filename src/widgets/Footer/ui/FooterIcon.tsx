import Image from 'next/image';

const FooterIcon = () => {
  return (
    <>
      <Image src='/envelope-square.svg' alt='email' width={25} height={26} />
      <Image src='/facebook-square.svg' alt='facebook' width={25} height={26} />
      <Image src='/instagram.svg' alt='instagram' width={25} height={26} />
    </>
  );
};

export default FooterIcon;
