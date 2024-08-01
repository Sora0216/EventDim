import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./pages/About";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";
import EventList from "./pages/EventList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/create-event" component={CreateEvent} />
          <Route path="/edit-event/:id" component={EditEvent} />
          <Route path="/events" component={EventList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
