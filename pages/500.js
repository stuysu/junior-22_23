import Container from '../components/layouts/Container';
import Link from 'next/link';

export async function getStaticProps() {
  return {
    props: { pageName: '500' }
  };
}

export default function Custom500() {
  return (
    <div className="absolute-center">
      <Container title="500 | Internal Server Error">
        <p>Sorry, something went wrong with the server. Try contacting the IT Department.</p>
        <Link href="/">Go back?</Link>
      </Container>
    </div>
  );
}
