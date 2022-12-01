import './App.css';
import React from 'react'
import Header from "./Header";
import Home from "./Home"; 
import Checkout from "./Checkout"; 
// in version 6 of react-router-dom, Routes is used insead of Switch 
// to use react router, the react router dom package needs to be installed using npm i react-router-dom
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
