import "./App.css";
import Home from "./containers/Home";
import Institute from "./containers/Institute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./containers/AdminLogin";
import About from "./containers/About.jsx";
import Nav from "./components/Nav";
import Signup from "./containers/Signup.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/admin-login" element={<AdminLogin/>}/>
          <Route path = "/institute" element ={<Institute/>}/>
          <Route path = "/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
