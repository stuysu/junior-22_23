import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  return {
    props: {
      title: 'Home | Junior Caucus',
      currentPage: 'Home'
    }
  };
}

export default function Home() {
  return (
    <>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Stuyvesant Junior Caucus</p>
      </div>
    </>
  );
}
