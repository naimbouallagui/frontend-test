import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './nav/NavBar';
import './App.css';
import ContactUs from './component/contactUs';
import OurServices from './component/ourServices';
import OurTeam from './component/ourTeam';

function App() {
  return (
    <div className="App">
     <Router>
              <NavBar />
              <OurServices />
              <OurTeam />
              <ContactUs />
      </Router>
    </div>
  );
}

export default App;
