import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../utils/queries'; // Ensure this matches your export

function EventList() {
  const { data, loading, error } = useQuery(QUERY_EVENTS);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error fetching events: {error.message}</p>;

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {data.events.map((event) => (
          <li key={event._id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
