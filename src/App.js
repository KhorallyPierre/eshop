import './App.css';
import React from 'react'
import Header from "./Header";
import Home from "./Home"; 
import Checkout from "./Checkout"; 
// in version 6 of react-router-dom, Routes is used insead of Switch 
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      {/* initializing router */}
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>

      </Router>
    
    </div>
  );
}

export default App;
