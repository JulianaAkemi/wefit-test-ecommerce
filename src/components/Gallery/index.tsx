import ProductCard from 'components/ProductCard';
import { SGallery } from './styles';

interface GalleryProps {
  products: Array<{
    title: string;
    image: string;
    id: number;
    quantity: number;
    price: number;
  }>;
}

const Gallery = ({ products }: GalleryProps) => {
  return (
    <SGallery>
      {products.map((product) => {
        const { title, id, image, quantity } = product;

        return (
          <ProductCard
            title={title}
            key={id}
            image={image}
            productQuantity={quantity}
            product={product}
          />
        );
      })}
    </SGallery>
  );
};

export default Gallery;
