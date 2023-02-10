import Image from 'next/image';
import Button from 'components/Button';
import { useCart } from 'hooks/useCart';
import { Product } from 'types/product.types';
import AddToCart from '../../../assets/addToCart.svg';
import { SProductCard } from './styles';

interface ProductCardProps {
  title: string;
  productQuantity: number;
  image: string;
	product: Product;
}

const ProductCard = ({ title, productQuantity, image, product }: ProductCardProps) => {
	const { addItem } = useCart();

  return (
    <SProductCard>
      <Image width={147} height={188} src={image} alt={title} />

      <p>{title}</p>

      <Button
        onClick={() => {addItem(product)}}
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
