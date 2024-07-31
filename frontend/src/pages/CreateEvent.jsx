import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_EVENT } from '../utils/mutations';
import { GET_USERS, GET_EVENTS } from '../utils/queries';

const CreateEvent = () => {
  const [formState, setFormState] = useState({
    title: '',
    date: '',
    description: '',
    userIds: [],
  });

  const [createEvent, { loading, error }] = useMutation(CREATE_EVENT, {
    refetchQueries: [{ query: GET_EVENTS }],
  });

  const { data: usersData, loading: usersLoading, error: usersError } = useQuery(GET_USERS);

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
      await createEvent({
        variables: { ...formState },
      });
      // Reset form or show success message
    } catch (err) {
      console.error(err);
    }
  };

  if (usersLoading) return <p>Loading users...</p>;
  if (usersError) return <p>Error loading users!</p>;

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
      <select multiple onChange={handleUserChange}>
        {usersData.users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>
      <button type="submit">Create Event</button>
      {loading && <p>Submitting...</p>}
      {error && <p>Error creating event.</p>}
    </form>
  );
};

export default CreateEvent;
