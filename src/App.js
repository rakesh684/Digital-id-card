import React from "react";
import Info from "./component/Info"
import About from "./component/About";
import Footer from "./component/Footer";

import "./App.css"

import Interests from "./component/Interests"

export default function App() {
  return (
    <div className="container">
      <Info />
       <About />
      <Interests /> 
      <Footer />
    </div>
    
  )
  
}
