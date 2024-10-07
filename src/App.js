import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Steps from './components/Steps';
import ResumeForm from './components/ResumeForm';
import Contact from './components/Contact';
import Help from './components/Help';
import Footer from './components/Footer';
import './App.css'; // Include your CSS for styling

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/create-resume" element={<ResumeForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;