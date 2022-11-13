export default function EventItem({ name, description, startTime, endTime }) {
  return (
    <div style={{ margin: '1rem ' }}>
      <details>
        <summary>
          <b>{name}</b>{' '}
          <small>
            ({startTime} - {endTime})
          </small>
        </summary>
        <p>{description}</p>
      </details>
    </div>
  );
}
