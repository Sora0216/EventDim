import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Plan from "./pages/Plan.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import EventDetail from "./pages/EventDetail.jsx";

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
        path: "/plan",
        element: <Plan />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup", // Ensure this path is included
        element: <Signup />,
      },
      {
        path: "/event/:id",
        element: <EventDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
