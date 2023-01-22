import ContactUrl from '../components/contact/ContactUrl.js';
import Container from '../components/layouts/Container.js';

export async function getServerSideProps({ res }) {
  // Set cache
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=120, stale-while-revalidate=600'
  );

  return {
    props: { pageName: 'Contact' }
  };
}

const links = {
  Linktree: 'https://linktr.ee/JuniorCaucus',
  Tiktok: 'https://www.tiktok.com/@juniorcaucus',
  Facebook: 'https://www.facebook.com/StuyJuniorCaucus',
  'Email Us!': 'mailto:junior@stuysu.org'
};

export default function Contact() {
  return (
    <>
      <h1 className="title">Contact</h1>
      <p className="paragraph">Here you can find all of our links/pages!</p>
      <Container>
        {Object.entries(links).map(([name, src], i) => (
          <ContactUrl url={src} key={i}>
            {name}
          </ContactUrl>
        ))}
      </Container>
    </>
  );
}
