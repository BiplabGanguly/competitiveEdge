import React from "react";
import Home from "./containers/Home";
import Institute from "./containers/Institute";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./containers/AdminLogin";
import About from "./containers/About.jsx";
import Nav from "./components/Nav";
import Signup from "./containers/Signup.jsx";
import FormInstitute from "./containers/FormInstitute.jsx";

function PublicSection() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/form-institute" element={<FormInstitute />} />
      </Routes>
    </div>
  );
}

export default PublicSection;
