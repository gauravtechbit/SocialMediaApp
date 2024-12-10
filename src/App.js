import React, { useState, useEffect }  from 'react';  
import './App.css';  
import Login1 from "./Login1";  
import Register from "./Register";  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';   
import Dashboard from "./Dashboard";  
import Posts from './Posts';
import ProfilePage from './profile'
function App() {  
  const [user, setuser] = useState({ email: '', nameid: '' }); 
  useEffect(() => {  
    //debugger;
    var a = localStorage.getItem('UserInfo');  
    var b = JSON.parse(a);  
    console.log(b);  
    setuser(b)  
    console.log(user.email)  

}, []); 
  return (  
   
    <Router>      
       <div id="root">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">SocialSite</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
           
            <li></li>
          </ul>
          
        </div>
      </div>
    </nav>    
    <div className="main-content">
      <Routes>      
        <Route path="/" element={<Login1 />} />  
        <Route path='/login' element={<Login1 />} />     
        <Route path='/Register' element={<Register />} />    
        <Route path='/Dashboard' element={<Dashboard />} />  
        <Route path='/Posts' element={<Posts/>} />
        <Route path='/Profile' element={<ProfilePage/>} />
      </Routes>  
      </div>
      <footer className="bg-primary text-white text-center py-4">
      <div className="container">
        <p className="mb-2">Follow us on:</p>
        <a href="https://facebook.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook fs-3"></i>
        </a>
        <a href="https://twitter.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter fs-3"></i>
        </a>
        <a href="https://instagram.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram fs-3"></i>
        </a>
        <a href="https://linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin fs-3"></i>
        </a>
        <p className="mt-3 mb-0">© 2024 SocialSite. All rights reserved.</p>
      </div>
    </footer> 
    </div> 
  </Router>  
  );  
}  
  
export default App; 