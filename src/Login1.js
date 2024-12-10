import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
function Login1(props) {  
    const [employee, setemployee] = useState({ Email: '', Password: ''});  
    const apiUrl = "https://localhost:7185/api/User/login";    
    const navigate = useNavigate(); 
    const Login = (e) => {    
            e.preventDefault();    
            //debugger;   
            const data = { Email:employee.Email, Password: employee.Password };  
             
            axios.post(apiUrl, data)    
            .then((result) => {    
                //debugger;  
                console.log(result.data);   
                 
                if (result.status.toString() == '200')  
                 {  
                  const decoded = jwtDecode(result.data.token);
                  console.log(decoded); 
                  localStorage.setItem('token', result.data.token);  
                  localStorage.setItem('UserInfo', JSON.stringify(decoded));
                  navigate('/Dashboard'); 
                 }
                else    
                alert('Invalid User');    
            })  
          .catch(err => {
            console.error(err); // Log error for debugging
            alert(err.response?.data || 'Something went wrong');
          });      
          };    
          
          const onChange = (e) => {    
                e.persist();    
               // debugger;    
                setemployee({...employee, [e.target.name]: e.target.value});    
              }    
    return (  
        
        <div class="container">  
        <div class="row justify-content-center">  
          <div class="col-xl-10 col-lg-12 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body p-0">  
                <div class="row">  
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>  
                  <div class="col-lg-6">  
                    <div class="p-5">  
                      <div class="text-center">  
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>  
                      </div>  
                      <form onSubmit={Login} class="user">  
                        <div class="form-group mt-3">  
                          <input required type="email" class="form-control" value={employee.Email} onChange={ onChange }  name="Email" id="Email" aria-describedby="emailHelp" placeholder="Enter Email"/>  
                        </div>  
                        <div class="form-group mt-3">  
                          <input type="password" required class="form-control" value={employee.Password} onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Password"/>  
                        </div>  
                         <div class="form-group mt-3">  
                        <button type="submit" class="btn btn-primary btn-block" block><span>Login</span></button>  
                        </div>  
                        <hr/> 
                        <div className="mt-3 text-center">
                        <p>
                          <a href="/register" class="btn btn-success" role="button">Create New Account</a>
                        </p>
                      </div> 
                      </form>  
                      <hr/>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
    )  
}  
  
export default Login1 