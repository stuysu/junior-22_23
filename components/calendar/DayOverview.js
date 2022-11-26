import styles from '../../styles/components/DayOverview.module.css';

export default function DayOverview({ date }) {
  const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
  const day = date.getDate();

  return (
    <div className={styles.dayOverview}>
      <h3>{dayOfWeek}</h3>
      <h1 className={styles.day}>{day}</h1>
    </div>
  );
}
