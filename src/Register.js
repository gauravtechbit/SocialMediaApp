import React, { useState } from 'react'  
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';
function Register(props) {  
  const [data, setdata] = useState({ Email: '', Password: '', Name: '' })  
  const apiUrl = "https://localhost:7185/api/User/signup";  
  const navigate = useNavigate(); 
  const Registration = (e) => {  
    e.preventDefault();  
    //debugger;  
    const data1 = { Email: data.Email, Password: data.Password, Name: data.Name };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        //debugger;    
        alert("User added successfully")
        navigate('/Login')  
      }).catch(err => {
        console.error(err); // Log error for debugging
        alert(err.response?.data || 'Something went wrong');
      });
  }  
  const onChange = (e) => {  
    e.persist();   
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div class="container">  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4">Create new account</h1>  
                </div>  
                <form onSubmit={Registration} class="user">  
                <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                    <input required pattern="^(?!\s*$).+" type="text" name="Name" onChange={onChange} value={data.Name} class="form-control" id="exampleInputEmail" placeholder="Name" />    
                    </div>  
                    <div class="col-sm-6">  
                      
                    </div>  
                  </div>  
                  
                  <div class="form-group row mt-3">  
                  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input required type="email" name="Email" onChange={onChange} value={data.Email} class="form-control" id="exampleFirstName" placeholder="Email" />  
                    </div>  
                    <div class="col-sm-6">  
                      
                      </div> 
                  </div>  
                 <div class="form-group row mt-3">  
                  
                    <div class="col-sm-6">  
                      <input required pattern="^(?!\s*$).+" type="Password" name="Password" onChange={onChange} value={data.Password} class="form-control" id="exampleLastName" placeholder="Password" />  
                    </div>  
                    <div class="col-sm-6">  
                      
                    </div> 
                  </div>  
                  <div class="form-group mt-3">
                  <button type="submit" class="btn btn-primary  btn-block">  
                    Create User  
                </button>  
                </div>
                  <hr />  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Register  