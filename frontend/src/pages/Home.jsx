import { Link } from 'react-router-dom';

function Home() {
  return (
      <div className="border-2 bg-blue-100 bg-cover relative">
        <h1 className="absolute" id="main-title">
          Events Dim
        </h1>

      <video autoPlay muted loop className="absolute w-full h-full object-cover">
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute bottom-10 left-10 flex space-x-4">
        <Link to="/events" className="bg-blue-500 text-white px-4 py-2 rounded">
          View Events
        </Link>
        <Link to="/create-event" className="bg-green-500 text-white px-4 py-2 rounded">
          Create Event
        </Link>
        <Link to="/login" className="bg-yellow-500 text-white px-4 py-2 rounded">
          Login
        </Link>
        <Link to="/signup" className="bg-red-500 text-white px-4 py-2 rounded">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;
