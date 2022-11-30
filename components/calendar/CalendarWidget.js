import Calendar from 'react-calendar';
import DayOverview from './DayOverview';
import EventItem from './EventItem';
import styles from '../../styles/components/calendar/CalendarWidget.module.css';
import { useState } from 'react';

export default function CalendarWidget({ events }) {
  const [activeDate, setActiveDate] = useState(new Date());

  const renderedEvents = events.map((event) => {
    const { id, summary, description, start, end } = event;

    let startDate;
    let endDate;

    if (start.date && end.date) {
      // All-day event

      startDate = new Date(start.date);
      endDate = new Date(end.date);
    } else {
      // Time-based event

      // Create a date object from the event's start date (12:00 AM)
      startDate = new Date(event.start.dateTime);
      startDate.setHours(0, 0, 0, 0);

      // Create a date object from the event's end date (11:59 PM)
      endDate = new Date(event.end.dateTime);
      endDate.setHours(23, 59, 59, 999);
    }

    // If the event is on the active date, render it
    if (startDate <= activeDate && activeDate < endDate) {
      return (
        <EventItem
          key={id}
          name={summary}
          description={description}
          startTime={start.dateTime}
          endTime={end.dateTime}
        />
      );
    }
  });

  return (
    <div className={styles.calendarContainer}>
      {/* Day overview with Stuy info */}
      <DayOverview className={styles.dayOverview} date={activeDate} />

      {/* Month-view calendar */}
      <Calendar
        className={styles.calendar}
        // Create a US month-view calendar
        calendarType="US"
        view="month"
        // Prevent user from navigating years
        prev2Label={null}
        next2Label={null}
        // Abbreviate days of the week to 1 letter
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString(locale, { weekday: 'short' }).charAt(0)
        }
        // Don't show days from other months
        showNeighboringMonth={false}
        // Change the active date when the user clicks on a date
        onClickDay={(day) => {
          setActiveDate(day);
        }}
        // On month change, set active date to first day of month
        onActiveStartDateChange={({ activeStartDate }) => {
          setActiveDate(activeStartDate);
        }}
        value={activeDate}
      />

      {/* Events list (render only if there are events on the active day) */}
      {renderedEvents.find((event) => event !== undefined) && (
        <div className={styles.eventsList}>{renderedEvents}</div>
      )}
    </div>
  );
}
