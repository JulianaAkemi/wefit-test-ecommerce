import Cart from 'components/Cart';
import Image from 'next/image';
import Link from 'next/link';
import { SHeader, Logo } from './styles';

const Header = () => {
  return (
    <SHeader>
      <Link href="/">
        <Logo>WeMovies</Logo>
      </Link>

      <Cart />
    </SHeader>
  );
};

export default Header;
