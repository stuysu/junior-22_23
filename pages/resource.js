export async function getServerSideProps({ res }) {
    // Set cache
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=120, stale-while-revalidate=600'
    );

    return {
        props: { pageName: 'Resources' }
    }
}

export default function Resource () {
    return (
        <>
            <h1 className="title">Resources</h1>
        </>
    )
}