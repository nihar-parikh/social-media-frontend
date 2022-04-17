import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";

function App() {
  // const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friend" element={<Friends />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
