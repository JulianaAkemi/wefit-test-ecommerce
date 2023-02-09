import { createContext, ReactNode, useEffect, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types/product.types';

export interface CartContextType {
  cartOrder: Product[];
  quantity: number;
  total: number;
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
  deleteItem: (item: Product) => void;
  clearCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartOrder, setCartOrder] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const { products, updateCurrentItems } = useProducts();

  useEffect(() => {
    const newQuantity = cartOrder.reduce((acc, item) => acc + item.quantity, 0);
    const newTotal = cartOrder.reduce(
      (acc, item) => acc + item.quantity * +item.price,
      0,
    );

    setTotal(newTotal);
    setQuantity(newQuantity);
  }, [cartOrder]);

	const addItem = (item: Product) => {

	};

	const removeItem = () => {};
	const deleteItem = () => {};
	const clearCart = () => {};

  return (
    <CartContext.Provider
      value={{
        cartOrder: cartOrder,
        quantity: quantity,
        total: total,
        addItem,
        removeItem,
        deleteItem,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
