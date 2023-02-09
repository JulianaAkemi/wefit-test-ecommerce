import Image from 'next/image';
import Subtotal from '../Subtotal';
import formatCurrency from '../../../../utils/formatCurrency';
import TrashCan from '../../../../../assets/TrashCan.svg';
import { SCartItem, SItemInfo, SImageWrapper, STitle } from './styles';

interface CartItemProps {
  title: string;
  image: string;
  price: number;
}

const CartItem = ({ title, image, price }: CartItemProps) => {
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
        />

        <Subtotal quantity={1} price={price} />
      </SItemInfo>
    </SCartItem>
  );
};

export default CartItem;
