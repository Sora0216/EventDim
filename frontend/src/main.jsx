import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Signup from './pages/Signup';
import Events from "./pages/EventList.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import EditEvent from "./pages/EditEvent.jsx";
import { ApolloProvider } from "@apollo/client";
import client from './apolloClient';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/create-event",
        element: <CreateEvent />,
      },
      {
        path: "/edit-event/:id",
        element: <EditEvent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <AppRoutes />
  </ApolloProvider>
);

