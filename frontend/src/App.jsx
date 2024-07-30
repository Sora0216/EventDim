import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom'; // Import Outlet to render child routes

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet /> {/* Render the matched child route */}
    </ApolloProvider>
  );
}

export default App;
