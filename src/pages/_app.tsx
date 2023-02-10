import type { AppProps } from 'next/app';
import Header from 'components/Header';
import { ProductsProvider } from '../contexts/ProductsContext';
import { CartProvider } from 'contexts/CartContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </ProductsProvider>
  );
}
