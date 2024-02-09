import "./App.css";
import Home from "./components/Home";
import Institute from "./components/Institute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin_login from "./containers/Admin_login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/institute" element={<Institute />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<Admin_login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
