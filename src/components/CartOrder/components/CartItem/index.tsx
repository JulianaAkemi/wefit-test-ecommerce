import Image from 'next/image';
import Subtotal from '../Subtotal';
import { useCart } from "../../../../hooks/useCart";
import { Product } from 'types/product.types';
import formatCurrency from '../../../../utils/formatCurrency';
import TrashCan from '../../../../../assets/TrashCan.svg';
import { SCartItem, SItemInfo, SImageWrapper, STitle } from './styles';

interface CartItemProps {
	product: Product;
}

const CartItem = ({ product }: CartItemProps) => {
	const { title, image, price, quantity } = product;
	const { deleteItem } = useCart();

  return (
    <SCartItem>
      <SImageWrapper>
        <Image src={image} alt={title} width={89} height={114} />
      </SImageWrapper>

      <SItemInfo>
        <STitle>
          <p>{title}</p>
          <p>{formatCurrency(price)}</p>
        </STitle>

        <Image
          src={TrashCan}
          alt="Remover Item do Carrinho"
          width={16}
          height={18}
					onClick={() => deleteItem(product)}
        />

        <Subtotal quantity={quantity} price={price} product={product} />
      </SItemInfo>
    </SCartItem>
  );
};

export default CartItem;
