import React, { useState, useEffect } from 'react'  
import Posts from './Posts';
import { useNavigate } from 'react-router-dom';
function Dashboard() {  
    const [user, setuser] = useState({ email: '', password: '' });  
    const navigate = useNavigate()

  const handleLogout = () => {
    // Clear session or token
    localStorage.removeItem('UserInfo');
    localStorage.removeItem('token');
    // Navigate to the login page
    navigate('/login');
  };
    useEffect(() => {  
        debugger;
        var a = localStorage.getItem('UserInfo');  
        var b = JSON.parse(a);  
        console.log(b);  
        setuser(b)  
        console.log(user.email)  
        if(user == null)
        {
          handleLogout();
        }
    }, []);  
    return (  
        <>  
            <div className="container my-5">
      <h2 className="text-center">Welcome to Your Dashboard!</h2>
      <a href='/profile' className="btn btn-success text-center">My Profile</a>
      <p className="text-center lead">Hello, {user.email}! Here's your personalized dashboard.</p> 
      <div className="text-center mt-4">
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
      <Posts></Posts>
    </div>
             
        </>  
    )  
}  
  
export default Dashboard  