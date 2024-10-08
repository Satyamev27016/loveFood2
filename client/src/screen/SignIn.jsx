import React from "react";
import { useState } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';
const SignIn = () => {

  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null); // store user data 
  const [accessToken, setAccessToken] = useState(""); // store access token
  const [refreshToken, setRefreshToken] = useState(""); // store refresh token

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent default form submission
    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/login', {email, password }); 

      const {user, accessToken, refreshToken} = response.data.data;
      setUser(user);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setMessage(response.data.message);  // show message from server of successful login
    }catch (error){
      setMessage(error.response?.data?.error || 'Error logging in user');
    }
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      <MDBContainer fluid className="p-3 my-5 h-custom flex-grow-1">

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
          </MDBCol>

          <MDBCol col='4' md='6'>

            <div className="d-flex flex-row align-items-center justify-content-center">

              <p className="lead fw-normal mb-0 me-3">Sign in with</p>

              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>

              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>

              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>

            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  value={password} onChange={(e) => setPassword(e.target.value)}   />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="/">Forgot password?</a>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg' onClick={handleLogin}>Login</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/" className="link-danger">Register</a></p>
            </div>
            {message && <p className=" text-center mt-3">{message}</p>}


            {/*  display user infoo */}

            {user && (
                      
              <div className=" text-center mt-4">
                <h3>User Info</h3>
                <p>Email: {user.email}</p>
                <p>Full Name: {user.fullName}</p>
                <p>Username: {user.username}</p>
                </div>
            )}
          

          </MDBCol>

        </MDBRow>
      </MDBContainer>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='twitter' size="md" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='google' size="md" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='linkedin-in' size="md" />
          </MDBBtn>

        </div>

      </div>



    </div>
  )
}

export default SignIn;