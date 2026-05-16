import AdminDashboard from "./components/AdminDashboard";
import CommonDashboard from "./components/CommonDashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-10 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-cyan-400">
        MyApp
      </h1>

      <div className="flex gap-6 text-lg">
        <Link
          to="/login"
          className="hover:text-cyan-400 transition duration-300"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="hover:text-cyan-400 transition duration-300"
        >
          Register
        </Link>

        <Link
          to="/profile"
          className="hover:text-cyan-400 transition duration-300"
        >
          Profile
        </Link>

        <Link
          to="/logout"
          className="hover:text-cyan-400 transition duration-300"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/common" element={<CommonDashboard />} />
        <Route path="/profile" element={<ProtectedRoute roles={['admin']}> <Profile /> </ProtectedRoute>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;