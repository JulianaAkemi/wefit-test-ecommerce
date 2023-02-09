import Head from 'next/head';
import Header from '../components/Header';
import { SPageBackground } from 'styles/pages/styles';

export default function Home() {
  return (
    <SPageBackground>
      <Head>
        <title>WeMovies</title>
      </Head>

      <Header />

      {/* <Gallery/> */}
    </SPageBackground>
  );
}
