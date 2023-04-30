import "./App.css";
import Home from "./components/HomePage/Main";
import Login from "./components/Pages/User/Login";
import Signup from "./components/Pages/User/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
