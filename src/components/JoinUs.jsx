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
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';




function App() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const location = useLocation();

  // useEffect(() => {
  //   if (location.search === "?CheckOut") setPath("/payment");
  // }, []);

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [checkInput, setCheckInput] = useState({
    username: false,
    phone: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const [massageWarning, setMassageWarning] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    submit: "",
    confirmPassword: ""
  });

  function handleUsername(event) {
    const name = event.target.value;
    setCheckInput({ ...checkInput, username: false });

    if (name === "") {
      setMassageWarning({ ...massageWarning, username: "Required!" });
    } else {
      setMassageWarning({ ...massageWarning, username: "" });
      setUser({ ...user, name: name });
      setCheckInput({ ...checkInput, username: true });
    }
  }


  function handlePhone(event) {
    const patternPhone = /^07\d{8}$/;
    setCheckInput({ ...checkInput, phone: false });
    const phone = event.target.value;

    if (phone === "") {
      setMassageWarning({ ...massageWarning, phone: "Required!" });
    } else if (!patternPhone.test(phone)) {
      setMassageWarning({ ...massageWarning, phone: "Invalid number" });
    } else {
      setMassageWarning({ ...massageWarning, phone: "" });
      setUser({ ...user, phone: phone });
      setCheckInput({ ...checkInput, phone: true });
    }
  }

  async function handleEmail(event) {
    const patternEmail = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,5}$/;
    setCheckInput({ ...checkInput, email: false });
    const email = event.target.value;

    if (email === "") {
      setMassageWarning({ ...massageWarning, email: "Required!" });
    } else if (!patternEmail.test(email)) {
      setMassageWarning({ ...massageWarning, email: "Invalid email" });
    } else {
      setMassageWarning({ ...massageWarning, email: "" });
      setUser({ ...user, email: email });
      setCheckInput({ ...checkInput, email: true });
    }
  }

  function handlePassword(event) {
    // more than 8 characters, with at least 1 number, uppercase, and special characters.
    const patternPassword =
      /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?]).{8,}$/;
    setCheckInput({ ...checkInput, password: false });
    const password = event.target.value;

    if (password === "") {
      setMassageWarning({ ...massageWarning, password: "Required!" });
    } else if (!patternPassword.test(password)) {
      setMassageWarning({
        ...massageWarning,
        password:
          "Invalid password, Password must consist of 8 characters, with at least 1 number, uppercase, and special characters",
      });
    } else {
      setMassageWarning({ ...massageWarning, password: "" });
      setUser({ ...user, password: password });
      setCheckInput({ ...checkInput, password: true });
    }
  }

  function handleConfirmPassword(event) {
    const password = event.target.value;

    setCheckInput({ ...checkInput, confirmPassword: false });

    if (password === "") {
      setMassageWarning({ ...massageWarning, confirmPassword: "Required!" });
    } else if (password !== user.password) {
      setMassageWarning({
        ...massageWarning,
        confirmPassword: "Password does not match",
      });
    } else {
      setMassageWarning({ ...massageWarning, confirmPassword: "" });
      setCheckInput({ ...checkInput, confirmPassword: true });
    }
  }


  function handleSubmit(event) {
    event.preventDefault();
    // console.log(checkInput.username ,checkInput.email ,checkInput.phone ,checkInput.password ,checkInput.confirmPassword, checkInput.address)
    if (
      checkInput.username &&
      checkInput.email &&
      checkInput.phone &&
      checkInput.confirmPassword &&
      checkInput.password 
    ) {
      sendDataToServer(user);
      console.log("ok");
      event.target.reset();
      // navigate(path);
    } else {
      setMassageWarning({
        ...massageWarning,
        submit:
          "Please fill in all fields or verify that the input is correct.",
      });
    }
  }

  function sendDataToServer(user) {
      axios
        .post("http://localhost:5000/users", user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          setMassageWarning({
            ...massageWarning,
            email: "Email is already exist",
          });
          // setUser({ ...user, email: email });
          // console.error(err);
        });
  }

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden mt-5'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3 text-transperant" style={{color: 'hsl(218, 81%, 95%)'}}>
          E-Auction is  <br />
            <span style={{color: 'hsl(218, 81%, 95%)'}}>your best choice</span>
          </h1>



        </MDBCol>

        <MDBCol md='4' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-2 bg-glass'>
            <MDBCardBody className='px-5'>

            <img class="logo d-flex justify-content-center" src={Logo} alt="logo"/>

              <form onSubmit={handleSubmit}>
             
                  <MDBInput  onChange={handleUsername} className='shadow signupInput'  placeholder='Enter First Name' id='form1' type='text'/>
                  <p className="mb-2 text-sm text-success">
                          <span className="fs-6">
                            {massageWarning.username}
                          </span>
                        </p>
               
                  <MDBInput wrapperClass='h-50' className='shadow signupInput' onChange={handlePhone} placeholder='Enter Phone Number' id='form2' type='text'/>
                  <p className="mb-2 text-sm text-success">
                          <span className="fs-6">
                            {massageWarning.phone}
                          </span>
                        </p>
                        
              

              <MDBInput onChange={handleEmail} className='shadow signupInput' placeholder='Enter Your Email' id='form3' type='email'/>
              <p className="mt-2 text-sm text-success">
                          <span className="fs-6">
                            {massageWarning.email}
                          </span>
                        </p>

                        
              <MDBInput  onChange={handlePassword} className='shadow signupInput' placeholder='Enter Password' id='form4' type='password'/>
              <p className="mt-2 text-sm text-success">
                          <span className="fs-6">
                            {massageWarning.password}
                          </span>
                        </p>

              <MDBInput  onChange={handleConfirmPassword} className='shadow signupInput' placeholder='Confirm Password' id='form5' type='password'/>
              <p className="mt-2 text-sm text-success">
                          <span className="fs-6">
                            {massageWarning.confirmPassword}
                          </span>
                        </p>
              <MDBBtn className='w-100' type='submit' style={{backgroundColor:' #fa851e' ,border:'none'}} size='md'>sign up</MDBBtn>
              <p className="mt-2 text-sm text-success">
                        <span className="fs-4">
                          {massageWarning.submit}
                        </span>
                      </p>
              </form>

              <div className="text-center">

              <p>
    <span>Already have an account?</span>
    <b  className="pointer">
    <Link  to="/login"> Sign in here</Link>
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

export default App;