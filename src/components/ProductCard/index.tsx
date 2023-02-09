import Image from 'next/image';
import { SProductCard } from './styles';
import AddToCart from '../../../assets/addToCart.svg';
import Button from 'components/Button';

interface ProductCardProps {
  title: string;
  productQuantity: number;
  image: string;
}

const ProductCard = ({ title, productQuantity, image }: ProductCardProps) => {
  return (
    <SProductCard>
      <Image width={147} height={188} src={image} alt={title} />

      <p>{title}</p>

      <Button
        onClick={() => {}}
        icon={AddToCart}
        altText={'Adicionar ao Carrinho'}
        label={
          productQuantity === 0 ? 'ADICIONAR AO CARRINHO' : 'ITEM ADICIONADO'
        }
        quantity={productQuantity}
      />
    </SProductCard>
  );
};

export default ProductCard;
