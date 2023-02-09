import Image from 'next/image';
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
}

const Subtotal = ({ quantity, price }: SubtotalProps) => {
  return (
    <SSubtotal>
      <SAddOrRemoveItem>
        <Image src={Subtract} alt="Subtrair Item" width={18} height={18} />

        <SItemQuantity>{quantity}</SItemQuantity>

        <Image src={Add} alt="Adicionar Item" width={18} height={18} />
      </SAddOrRemoveItem>

      <SSubtotalPrice>
        <p>SUBTOTAL</p>
        <p>{formatCurrency(price * quantity)}</p>
      </SSubtotalPrice>
    </SSubtotal>
  );
};

export default Subtotal;
