// import './LoginUi.css';
import profile from "../../assets/images/logo.jpg";
import React from 'react';

import { FaRegEnvelope } from 'react-icons/fa';
import { BsKey } from 'react-icons/bs';


function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <div className="email"> <FaRegEnvelope size={25} /> </div> 
             <input type="text" placeholder="User name" className="name"/>
           </div>
           <div className="second-input">
             <div className="email"> <BsKey size={25} /> </div>
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or <link to="Signup.js"> Signup</link>
            </p>


         </div>
       </div>


     </div>
    </div>
  );
}

export default LoginUi;