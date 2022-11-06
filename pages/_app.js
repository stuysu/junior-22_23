import '../styles/globals.css';

import Meta from '../components/common/Meta';
import NavBar from '../components/common/NavBar';

export default function MyApp({ Component, pageProps }) {
  /**
   * Every page should export an async function called getStaticProps.
   * This function should return an object with a props property.
   * The props property should be an object with the following properties:
   * - title: the title of the page
   * - currentPage: the name of the page
   */
  const { title, currentPage } = pageProps;

  return (
    <>
      <Meta title={title} />

      <NavBar currentPage={currentPage} />

      <Component {...pageProps} />
    </>
  );
}
