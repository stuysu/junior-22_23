export default function EventItem({ name, description, startTime, endTime }) {
  let timeRangeHtml = '';

  // Render a time range if both times are provided
  if (startTime && endTime) {
    // Format start and end times to string in format "HH:MM AM/PM"
    const startTimeString = new Date(startTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    const endTimeString = new Date(endTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    timeRangeHtml = (
      <small>
        ({startTimeString} - {endTimeString})
      </small>
    );
  }

  return (
    <div style={{ margin: '1rem ' }}>
      <details>
        <summary>
          <b>{name}</b> {timeRangeHtml}
        </summary>
        <p>{description}</p>
      </details>
    </div>
  );
}
