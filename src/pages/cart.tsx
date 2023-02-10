import EmptyCart from 'components/EmptyCart';
import CartOrder from 'components/CartOrder';
import { useCart } from 'hooks/useCart';

const CartPage = () => {
	const { quantity  } = useCart();

  return (
    <>
		{quantity < 1 ? (
      <EmptyCart />
		) : (
			<CartOrder />
		)}
    </>
  );
};

export default CartPage;
