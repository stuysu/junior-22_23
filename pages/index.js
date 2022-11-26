import CalendarWidget from '../components/calendar/CalendarWidget';
import Container from '../components/layouts/Container';
import { google } from 'googleapis';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const calendar = google.calendar({
    version: 'v3',
    auth: process.env.CALENDAR_API_KEY
  });

  const res = await calendar.events.list({
    calendarId: process.env.CALENDAR_ID
  });

  return {
    props: {
      events: res.data.items,
      title: 'Home | Junior Caucus',
      currentPage: 'Home'
    }
  };
}

export default function Home({ events }) {
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
        <CalendarWidget events={events} />
      </Container>
    </>
  );
}
