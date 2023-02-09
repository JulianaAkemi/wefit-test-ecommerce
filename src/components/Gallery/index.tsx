import ProductCard from 'components/ProductCard';
import { SGallery } from './styles';

interface GalleryProps {
  products: Array<{ title: string; image: string; id: number }>;
}

const Gallery = ({ products }: GalleryProps) => {
	return (
		<SGallery>
      {products.map((product) => {
				const { title, id, image } = product;

				return <ProductCard title={title} key={id} image={image} productQuantity={0}/>}
			)}
    </SGallery>
  );
};

export default Gallery;
