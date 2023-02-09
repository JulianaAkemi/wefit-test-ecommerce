import Image from 'next/image';
import Link from 'next/link';
import { SCart, SCartItems } from './styles';
import CartSVG from '../../../assets/CartSVG.svg';

const Cart = () => {
  return (
    <Link href="/cart">
      <SCart>
        <SCartItems>
          <p>Meu Carrinho</p>
          <p>0 itens</p>
        </SCartItems>

        <Image src={CartSVG} alt="Carrinho de Compras" width={32} height={32} />
      </SCart>
    </Link>
  );
};

export default Cart;
