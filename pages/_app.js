import '../styles/globals.css';

import Head from 'next/head';
import NavBar from '../components/common/NavBar';

function MyApp({ Component, pageProps }) {
  const { title, currentPage } = pageProps;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar currentPage={currentPage} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
