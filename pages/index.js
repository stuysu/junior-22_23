import CalendarWidget from '../components/calendar/CalendarWidget';
import Container from '../components/layouts/Container';
import { google } from 'googleapis';
import styles from '../styles/Home.module.css';

export async function getServerSideProps({ res }) {
  // Set cache
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=120, stale-while-revalidate=600'
  );

  // Establish connection to Google Sheets API
  const calendar = google.calendar({
    version: 'v3',
    auth: process.env.CALENDAR_API_KEY
  });

  // Get calendar events
  const eventsRes = await calendar.events.list({
    calendarId: process.env.CALENDAR_ID
  });

  return {
    props: { events: eventsRes.data.items, pageName: 'Home' }
  };
}

export default function Home({ events }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className="title">Stuyvesant Junior Caucus</h1>
      </div>

      <hr />

      <Container title="Who Are We?">
        {/* TODO: Put actual information here */}
        <p>What a great question, random visitor!</p>
      </Container>

      <hr />

      <Container title="Calendar">
        <CalendarWidget events={events} />
      </Container>
    </>
  );
}
