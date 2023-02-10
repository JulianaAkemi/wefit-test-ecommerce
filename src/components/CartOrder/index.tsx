import Link from 'next/link';
import Button from 'components/Button';
import CartItem from './components/CartItem';
import { useCart } from '../../hooks/useCart';
import formatCurrency from '../../utils/formatCurrency';
import { SCartOrder, SHeader, SCartFooter, STotal } from './styles';

const CartOrder = () => {
  const { cartOrder, clearCart, total } = useCart();

  return (
    <SCartOrder>
      <SHeader>
        <p>PRODUTO</p>

        <p>QTD</p>

        <p>SUBTOTAL</p>
      </SHeader>

      {cartOrder.map((item) => (
        <CartItem product={item} key={item.id} />
      ))}

      <SCartFooter>
        <STotal>
          <p>TOTAL</p>
          <p>{formatCurrency(total)}</p>
        </STotal>

        <Link href="/checkout-success" onClick={() => clearCart()}>
          <Button label={'FINALIZAR PEDIDO'} />
        </Link>
      </SCartFooter>
    </SCartOrder>
  );
};

export default CartOrder;
