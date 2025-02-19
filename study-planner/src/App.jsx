import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './components/Dashboard';
function App() {
  const webName = "Study-Planner"
  const navLinks = [
    {path: "/", label: "Home"}
  ];

  

  return (
    <Router>
      <Header webName = {webName} navLinks = {navLinks}/>
      <Routes>
        <Route path="/" element={<Dashboard/> } /> 
      </Routes>
      <Footer />
    </Router>
      
  )
}

export default App
