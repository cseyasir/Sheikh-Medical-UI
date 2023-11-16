
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./My components/Home"
import Login from "./My components/Login"
import Nav from "./My components/Nav"
import Footer from "./My components/Footer"
import Find from "./My components/Find"
import Search from './My components/Search';
import About from './My components/About'
import Add from './My components/addnewitem'

import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Nav></Nav>
    <Routes>
    
   
    <Route exact path="/" element={<Home></Home>} />
       
       
        <Route exact path="Login" element={<Login/>} />
        <Route exact path="Find" element={<Find/>} />
        <Route exact path="About" element={<About/>} />
        <Route exact path="Search" element={<Search/>} />
        <Route exact path="Addingitem" element={<Add/>} />
       
      
    </Routes>   
    <Footer></Footer>
    </BrowserRouter>
 
    </div>
      
      
    
  );
}
export default App;
