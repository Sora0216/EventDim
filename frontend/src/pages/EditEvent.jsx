import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_EVENT, GET_USERS, GET_EVENTS } from '../utils/queries';
import { UPDATE_EVENT } from '../utils/mutations';

const EditEvent = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_EVENT, { variables: { id } });
  const { data: usersData, loading: usersLoading, error: usersError } = useQuery(GET_USERS);

  const [formState, setFormState] = useState({
    title: '',
    date: '',
    description: '',
    userIds: [],
  });

  const [updateEvent] = useMutation(UPDATE_EVENT, {
    refetchQueries: [{ query: GET_EVENTS }],
  });

  useEffect(() => {
    if (data) {
      setFormState({
        title: data.event.title,
        date: data.event.date,
        description: data.event.description,
        userIds: data.event.users.map((user) => user.id),
      });
    }
  }, [data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleUserChange = (event) => {
    const { options } = event.target;
    const selectedUserIds = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedUserIds.push(options[i].value);
      }
    }
    setFormState({
      ...formState,
      userIds: selectedUserIds,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateEvent({
        variables: { id, ...formState },
      });
      // Redirect or show success message
    } catch (err) {
      console.error(err);
    }
  };

  if (loading || usersLoading) return <p>Loading...</p>;
  if (error || usersError) return <p>Error loading data!</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={formState.title}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        value={formState.date}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Event Description"
        value={formState.description}
        onChange={handleInputChange}
      />
      <select multiple onChange={handleUserChange} value={formState.userIds}>
        {usersData.users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>
      <button type="submit">Update Event</button>
    </form>
  );
};

export default EditEvent;
