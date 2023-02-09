import Link from 'next/link';
import Image from 'next/image';
import Button from 'components/Button';
import EmptyCartSVG from '../../../assets/EmptyCartSVG.svg';
import { SEmptyCart } from './styles';

const EmptyCart = () => {
  return (
    <SEmptyCart>
      <p>Parece que não há nada por aqui :(</p>

      <Image src={EmptyCartSVG} alt="Voltar" />

      <Link href="/">
        <Button label={'VOLTAR'} width="180px" />
      </Link>
    </SEmptyCart>
  );
};

export default EmptyCart;
