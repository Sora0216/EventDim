import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import EventDetail from './pages/EventDetail';
import Plan from './pages/Plan';
import NotFound from './pages/NotFound';

function appRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="Singup" element={<Signup />} />
            <Route path="About" element={<About />} />
            <Route path="EventDetail" element={<EventDetail />} />
            <Route path="Plan" element={<Plan />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    );
}

export default AppRoutes;