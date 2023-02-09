import Loader from '../components/Loader';
import Gallery from '../components/Gallery';
import { useProducts } from '../hooks/useProducts';

const Home = () => {
  const { products, loading } = useProducts();

  return <>{loading ? <Loader /> : <Gallery products={products} />}</>;
};

export default Home;
