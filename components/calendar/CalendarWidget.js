import Calendar from 'react-calendar';
import DayOverview from './DayOverview';
import EventItem from './EventItem';
import styles from '../../styles/components/CalendarWidget.module.css';
import { useState } from 'react';

export default function CompactCalendar() {
  const [activeDate, setActiveDate] = useState(new Date());

  return (
    <div className={styles.calendarContainer}>
      <DayOverview
        className={styles.dayOverview}
        date={activeDate}
        abDay="A1"
        scheduleDay={'Conference Day'}
      />

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

      <div className={styles.eventsList}>
        <EventItem
          name="Event 1"
          description="Description 1"
          startTime="9:00 AM"
          endTime="10:00 AM"
        />
        <EventItem
          name="Event 2"
          description="Description 2"
          startTime="10:00 AM"
          endTime="11:00 AM"
        />
        <EventItem
          name="Event 3"
          description="Description 3"
          startTime="11:00 AM"
          endTime="12:00 PM"
        />
      </div>
    </div>
  );
}
