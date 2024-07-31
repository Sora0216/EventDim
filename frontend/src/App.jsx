import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className="main-content">
        <Outlet /> {/* This will render the child routes */}
      </div>
    </ApolloProvider>
  );
}

export default App;
