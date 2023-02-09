import Link from 'next/link';
import Button from 'components/Button';
import CartItem from './components/CartItem';
import { SCartOrder, SHeader, SCartFooter, STotal } from './styles';

interface CartOrdermProps {
  title: string;
  image: string;
  price: number;
}

const CartOrder = ({ title, image, price }: CartOrdermProps) => {
  return (
    <SCartOrder>
      <SHeader>
        <p>PRODUTO</p>
        <p>QTD</p>
        <p>SUBTOTAL</p>
      </SHeader>

      <CartItem title={title} price={price} image={image} />

      <SCartFooter>
        <STotal>
          <p>TOTAL</p>
          <p>{price}</p>
        </STotal>

        <Link href="/checkout-success">
          <Button label={'FINALIZAR PEDIDO'} />
        </Link>
      </SCartFooter>
    </SCartOrder>
  );
};

export default CartOrder;
