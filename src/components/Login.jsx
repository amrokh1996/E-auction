import React, { useEffect, useRef, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBCardHeader
}
from 'mdb-react-ui-kit';
import '../css/JoinUs.css'
import Logo from '../images/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';




export default function Login() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id')
  console.log(id)
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [massageWarning, setMassageWarning] = useState({
    email: "",
    password: "",
  });


  useEffect(() => {
    const token = sessionStorage.getItem("token") || false;
    if (token) {
      checkToken(token).then((resultUsers) => {
        console.log("amrooooooo222")
        console.log(resultUsers.role)
        // if (resultUsers) {
        //   updateIsLog(true);
        //   navigate(path);
        // }
      });
    }
  }, []);

  function handleEmail(event) {
    const patternEmail = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,5}$/;
    const email = event.target.value;

    if (email === "") {
      setMassageWarning({ ...massageWarning, email: "" });
    } else if (!patternEmail.test(email)) {
      setMassageWarning({ ...massageWarning, email: "Invalid email" });
    } else {
      setMassageWarning({ ...massageWarning, email: "" });

      setUser({ ...user, email: email });
    }
  }

  function handlePassword(event) {
    const patternPassword =
      /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?]).{8,}$/;
    const password = event.target.value;

    if (password === "") {
      setMassageWarning({ ...massageWarning, password: "" });
    } else if (!patternPassword.test(password)) {
      setMassageWarning({ ...massageWarning, password: "Invalid password" });
    } else {
      setMassageWarning({ ...massageWarning, password: "" });

      setUser({ ...user, password: password });
    }
  }



  async function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;


      await axios
        .post(`http://localhost:5000/login_user`, {
          email: email,
          password: password,
        })
        .then((res) => {
          sessionStorage.setItem("token", res?.data);
          // updateIsLog(true);
          event.target.reset();
          if(id==null){
          navigate("/");
          }else{
            navigate(`/productdetails/${id}`);
          }
          console.log(res);
        })
        .catch((err) => {
          setMassageWarning({
            ...massageWarning,
            submit: "Password or email is incorrect.",
          });
          console.error(err);
        });
      }

  async function checkToken(token) {
    try {
      const response = await axios.get("http://localhost:5000/checkToken", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden mt-5'>

      <MDBRow>



        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3 z-index-2 text-transperant" style={{color: 'hsl(218, 81%, 95%)'}}>
            Welcome Back! <br />
        
          </h1>


          

        </MDBCol>

        <MDBCol md='4' className='position-relative'>
        <div id="radius-shape-2" className="position-absolute  shadow-5-strong"></div>




<MDBCard className='my-5 bg-glass'>
  <MDBCardBody className='px-5'>

  <img class="logo d-flex justify-content-center" src={Logo} alt="logo"/>
  <form onSubmit={handleSubmit}>
    <MDBInput wrapperClass='mb-4' onChange={handleEmail} placeholder='Enter Your Email' id='email' type='email'/>
    <p className={`mt-2 text-sm text-warning-600`}>
                        {massageWarning.email}
                      </p>
    <MDBInput wrapperClass='mb-4' onChange={handlePassword} placeholder='Enter Password' id='password' type='password'/>
    <p className={`mt-2 text-sm text-warning-600`}>
                        {massageWarning.password}
                      </p>
    <MDBBtn type='submit' className='w-100 mb-4' style={{backgroundColor:' #fa851e' ,border:'none'}} size='md'>sign in</MDBBtn>
    <p className={`mt-2 text-sm text-warning-600`}>
                      {massageWarning.submit}
                    </p>
    </form>

    <div className="text-center">

    <p>
<span>don't have an account?</span>
<b  className="pointer">
<Link to="/joinUs"> Sign up here</Link>
</b>
</p>
<p style={{ color: "rgb(174, 174, 174)",marginTop:'10px' }}>———— Or Sign Up With ————</p>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1e4ac5' }}>
        <MDBIcon fab icon='facebook-f' size="sm"/>
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#0e99c4' }}>
        <MDBIcon fab icon='twitter' size="sm"/>
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#fa601e' }}>
        <MDBIcon fab icon='google' size="sm"/>
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#8d007a' }}>
        <MDBIcon fab icon='instagram' size="sm"/>
      </MDBBtn>

    </div>

  </MDBCardBody>
</MDBCard>

</MDBCol>



      </MDBRow>

    </MDBContainer>
  );
}
