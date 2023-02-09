import Image from 'next/image';
import Subtract from '../../../../../assets/Subtract.svg';
import Add from '../../../../../assets/Add.svg';
import { SSubtotal, SAddOrRemoveItem, SItemQuantity, SSubtotalPrice } from './styles';

interface SubtotalProps {
  quantity: number;
  price: number;
}

const Subtotal = ({ quantity, price }: SubtotalProps) => {
  return (
    <SSubtotal>
      <SAddOrRemoveItem>
        <Image src={Subtract} alt="Subtrait Item" width={18} height={18} />
				<SItemQuantity>{quantity}</SItemQuantity>
        <Image src={Add} alt="Subtrait Item" width={18} height={18} />
      </SAddOrRemoveItem>

      <SSubtotalPrice>
        <p>SUBTOTAL</p>
        <p>R$ {price}</p>
      </SSubtotalPrice>
    </SSubtotal>
  );
};

export default Subtotal;
