import Container from '../components/layouts/Container';
import Link from 'next/link';

export async function getStaticProps() {
  return {
    props: { pageName: '404' }
  };
}

export default function Custom404() {
  return (
    <div className="absolute-center">
      <Container title="404 | Not Found">
        <p>Sorry, we couldn&apos;t find that resource.</p>
        <Link href="/">Go back?</Link>
      </Container>
    </div>
  );
}
