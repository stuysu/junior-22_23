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

export default function resource () {
    return (
        <>
            <h1 className="title">Contact</h1>
        </>
    )
}