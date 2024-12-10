import React, { useState, useEffect } from 'react';

function ProfilePage() {
    const [user, setuser] = useState({ email: '', nameid: '' }); 
  useEffect(() => {  
    debugger;
    var a = localStorage.getItem('UserInfo');  
    var b = JSON.parse(a);  
    console.log(b);  
    setuser(b)  
    console.log(user.email)  

}, []); 
//   const user = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "123-456-7890",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     profilePicture: "https://via.placeholder.com/150" // Replace with actual profile picture URL
//   };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              {/* Profile Picture */}
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-circle mb-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              {/* Name */}
              <h2>{user.name}</h2>
              {/* Edit Button */}
              {/* <button className="btn btn-outline-primary btn-sm mt-2">Edit Profile</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Information */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h4 className="mb-3">Profile Information</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Email: </strong>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <strong>Phone: </strong>
                  123-456-7890
                </li>
                <li className="list-group-item">
                  <strong>Bio: </strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-8 text-center">
      <a href='/dashboard'><button className="btn btn-outline-secondary">Back to Dashboard</button></a>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
