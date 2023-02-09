import { createContext, ReactNode, useEffect, useState } from 'react';
import getProducts from '../services/api';
import { Product } from '../types/product.types';

export interface ProductsContextType {
  products: Product[];
  loading: boolean;
  updateCurrentItems: (currentProducts: Product[]) => void;
}

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextType);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
		const data = await getProducts();

		setProducts(data);
		setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateCurrentItems= (currentProducts: Product[]) => {
    setProducts([...currentProducts]);
  }

  return (
    <ProductsContext.Provider
      value={{ products, loading, updateCurrentItems }}>
      {children}
    </ProductsContext.Provider>
  );
}
