import CalendarWidget from '../components/calendar/CalendarWidget';
import Container from '../components/layouts/Container';
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
        <h1 className="title">Stuyvesant Junior Caucus</h1>
      </div>

      <Container title="Who Are We?">
        {/* TODO: Put actual information here */}
        <p>What a great question, random visitor!</p>
      </Container>

      <Container title="Calendar">
        <CalendarWidget />
      </Container>
    </>
  );
}
