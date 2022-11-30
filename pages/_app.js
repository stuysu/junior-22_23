import '../styles/globals.css';

import Meta from '../components/common/Meta';
import NavBar from '../components/common/NavBar';

export default function MyApp({ Component, pageProps }) {
  /**
   * Every page should export an async function called `getStaticProps` or `getServerSideProps`.
   * This function should return an object with a `props` property.
   * The `props` property should be an object containing this property:
   * - `pageName`: the name of the page (e.g. "Home")
   */
  const { pageName } = pageProps;

  return (
    <>
      <Meta title={`${pageName} | Junior Caucus`} />

      <NavBar currentPage={pageName} />

      <Component {...pageProps} />
    </>
  );
}
