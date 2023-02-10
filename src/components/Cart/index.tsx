import Image from 'next/image';
import Link from 'next/link';
import { useCart } from 'hooks/useCart';
import CartSVG from '../../../assets/CartSVG.svg';
import { SCart, SCartItems } from './styles';

const Cart = () => {
	const { quantity } = useCart();

  return (
    <Link href="/cart">
      <SCart>
        <SCartItems>
          <p>Meu Carrinho</p>
          <p>{`${quantity} itens`}</p>
        </SCartItems>

        <Image src={CartSVG} alt="Carrinho de Compras" width={32} height={32} />
      </SCart>
    </Link>
  );
};

export default Cart;
