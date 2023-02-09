import Link from 'next/link';
import Image from 'next/image';
import Button from 'components/Button';
import Success from '../../../assets/Success.svg';
import { SCheckoutSuccess } from './styles';

const CheckoutSuccess = () => {
  return (
    <SCheckoutSuccess>
      <p>Compra realizada com sucesso!</p>

      <Image src={Success} alt="Compra realizada com sucesso!" />

      <Link href="/">
        <Button label={'VOLTAR'} width="180px" />
      </Link>
    </SCheckoutSuccess>
  );
};

export default CheckoutSuccess;
