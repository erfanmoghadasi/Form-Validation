<<<<<<< HEAD
import './App.css';
=======
import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
>>>>>>> creating

function App() {
  return (
    <div>
<<<<<<< HEAD
      Hellow Form
=======
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
>>>>>>> creating
    </div>
  );
}

export default App;
