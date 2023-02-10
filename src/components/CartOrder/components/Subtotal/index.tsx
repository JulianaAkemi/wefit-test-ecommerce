import Image from 'next/image';
import { useCart } from 'hooks/useCart';
import { Product } from 'types/product.types';
import formatCurrency from '../../../../utils/formatCurrency';
import Subtract from '../../../../../assets/Subtract.svg';
import Add from '../../../../../assets/Add.svg';
import {
  SSubtotal,
  SAddOrRemoveItem,
  SItemQuantity,
  SSubtotalPrice,
} from './styles';

interface SubtotalProps {
  quantity: number;
  price: number;
  product: Product;
}

const Subtotal = ({ quantity, price, product }: SubtotalProps) => {
  const { addItem, removeItem } = useCart();

  return (
    <SSubtotal>
      <SAddOrRemoveItem>
        <Image
          src={Subtract}
          alt="Subtrair Item"
          width={18}
          height={18}
          onClick={() => removeItem(product)}
        />

        <SItemQuantity>{quantity}</SItemQuantity>

        <Image
          src={Add}
          alt="Adicionar Item"
          width={18}
          height={18}
          onClick={() => addItem(product)}
        />
      </SAddOrRemoveItem>

      <SSubtotalPrice>
        <p>SUBTOTAL</p>
        <p>{formatCurrency(price * quantity)}</p>
      </SSubtotalPrice>
    </SSubtotal>
  );
};

export default Subtotal;
