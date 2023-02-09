import Image from 'next/image';
import Loading from '../../../assets/Loading.svg';
import { SLoader } from './styles';

const Loader = () => {
  return (
    <SLoader>
      <Image src={Loading} alt="Carregando página" width={83} height={83} />
    </SLoader>
  );
};

export default Loader;
