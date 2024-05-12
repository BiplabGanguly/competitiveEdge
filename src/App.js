// App.jsx
import React from 'react';
import './App.css';
import PublicSection from './PublicSection';
import AdminSection from './AdminSection';
import { BrowserRouter as Router } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <PublicSection />
        <AdminSection />
      </Router>
    </div>
  );
}

export default App;
