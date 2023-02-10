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

  const newQuantity = (product: Product) => {
    const newCartOrder = products;

    const productToUpdate = products.find(
      (currentProduct) => currentProduct.id === product.id,
    );

    if (productToUpdate) {
      newCartOrder.splice(products.indexOf(productToUpdate), 1, product);
      updateCurrentItems(newCartOrder);
    }
  };

  const addItem = (item: Product) => {
    const isOnCart = cartOrder.find((order) => order.id === item.id);

    if (!!isOnCart) {
      const newProduct = {
        ...isOnCart,
        quantity: isOnCart.quantity + 1,
      };

      newQuantity(newProduct);
      const newCart = cartOrder;
      newCart.splice(cartOrder.indexOf(isOnCart), 1, newProduct);

      setCartOrder([...newCart]);
    } else {
      const newProduct = { ...item, quantity: 1 };
      newQuantity(newProduct);
      setCartOrder((allProducts) => [...allProducts, newProduct]);
    }
  };

  const deleteItem = (item: Product) => {
    resetQuantity(item);
    const newCart = cartOrder;
    newCart.splice(cartOrder.indexOf(item), 1);

    setCartOrder([...newCart]);
  };

  const removeItem = (item: Product) => {
    const isOnCart = cartOrder.find(
      (cartProduct) => cartProduct.id === item.id,
    );

    if (isOnCart) {
      if (isOnCart.quantity > 1) {
        const newProduct = {
          ...isOnCart,
          quantity: isOnCart.quantity - 1,
        };

        newQuantity(newProduct);
        const newCart = cartOrder;
        newCart.splice(cartOrder.indexOf(isOnCart), 1, newProduct);

        setCartOrder([...newCart]);
      } else {
        resetQuantity(item);
        const newCart = cartOrder;
        newCart.splice(cartOrder.indexOf(item), 1);

        setCartOrder([...newCart]);
      }
    }
  };

  const resetQuantity = (product: Product) => {
    const newListOfProducts = products;

    const productToUpdate = products.find(
      (currentProduct) => currentProduct.id === product.id,
    );

    if (productToUpdate) {
      productToUpdate.quantity = 0;
      newListOfProducts.splice(products.indexOf(productToUpdate), 1, product);
      updateCurrentItems(newListOfProducts);
    }
  };

  const resetAllQuantities = (products: Product[]) => {
    products.forEach((product) => resetQuantity(product));
  };

  const clearCart = () => {
    setCartOrder([]);
    resetAllQuantities(products);
  };

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
