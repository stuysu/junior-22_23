import Calendar from 'react-calendar';
import styles from '../../styles/components/CalendarWidget.module.css';
import { useState } from 'react';

export default function CompactCalendar() {
  const [activeDate, setActiveDate] = useState(new Date());

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        // Create a US month-view calendar
        calendarType="US"
        view="month"
        // Prevent user from navigating years
        prev2Label={null}
        next2Label={null}
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
    </div>
  );
}
