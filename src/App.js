import "./App.css";
import Home from "./containers/Home";
import Institute from "./containers/Institute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./containers/AdminLogin";
import About from "./containers/About.jsx";
import Nav from "./components/Nav";
import Signup from "./containers/Signup.jsx";
import FormInstitute from "./containers/FormInstitute.jsx";
import AdminDashboard from "./containers/AdminDashboard.jsx";
import PublicSection from "./PublicSection.jsx";
import AdminSection from "./AdminSection.jsx";
function App() {
  return (
    <div className="App">
      <PublicSection/>
      <AdminSection/>
      {/* <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/admin-login" element={<AdminLogin/>}/>
          <Route path = "/institute" element ={<Institute/>}/>
          <Route path = "/signup" element={<Signup/>}/>
          <Route path="/form-institute" element={<FormInstitute/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
