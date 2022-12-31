import Container from "../components/layouts/Container.js";
import ContactUrl from "../components/contact/ContactUrl.js";

export async function getServerSideProps({ res }) {
    // Set cache
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=120, stale-while-revalidate=600'
    );

    return {
        props: { pageName: 'Contact' }
    }
}

const links = {
    "Link Tree": "https://linktr.ee/JuniorCaucus",
    "Website": "https://junior.stuysu.org/",
    "Tiktok": "https://www.tiktok.com/@juniorcaucus",
    "Facebook": "https://www.facebook.com/StuyJuniorCaucus",
    "Email Us!": "mailto:junior@stuysu.org"
}

export default function Contact () {
    return (
        <>
            <h1 className="title">Contact</h1>
            <p className="paragraph">Here you can find all of our links/pages!</p>
            <Container>
                {Object.entries(links).map(([name, src]) => (<ContactUrl url={src}>{name}</ContactUrl>))}
            </Container>
        </>
    )
}