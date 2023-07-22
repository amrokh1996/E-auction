import React, { useEffect, useState } from 'react';
import '../css/Header.css';
import { Link, useNavigate,} from 'react-router-dom';
import axios from 'axios';
import { useScroll } from './custom-hooks/useScroll';
import profile from '../images/profile.png'



export default function Header(){
  const { y, x, scrollDirection } = useScroll();  

  const styles = {
    active: {
      visibility: "visible",
      // transition: "all 0.5s"
    },
    hidden: {
      visibility: "hidden",
      // transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }
  const navigate = useNavigate()
  const  [findUser,setFindUser]=useState(sessionStorage.getItem("token"))
  const  [User,setUser]=useState()

  
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

  useEffect(()=>{
    setFindUser(sessionStorage.getItem("token"))
    if (findUser) {
      checkToken(findUser).then((resultUsers) => {
       setUser(resultUsers)
        //console.log(resultUsers)
        // if (resultUsers) {
        //   updateIsLog(true);
        //   navigate(path);
        // }
      });
    }
    console.log(findUser)
  },[sessionStorage.getItem("token")])
 
    return(
    <div >
        <div className="fixed-top">
            <header className="topbar">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <ul className="social-network">
                        <li><a className="waves-effect waves-dark" href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a className="waves-effect waves-dark" href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a className="waves-effect waves-dark" href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a className="waves-effect waves-dark" href="#"><i class="fab fa-google"></i></a></li>
                      </ul>
                    </div>
          
                  </div>
                </div>
            </header>
            <nav  style={scrollDirection === "down" ? styles.active: styles.hidden} className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
              <div className="container">
                <a className="navbar-brand" rel="nofollow" target="_blank" href="http://scadonsak.com/7bF" style={{textTransform: 'uppercase'}}> E-Auction</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
          
                  <ul className="navbar-nav ml-auto">
          
                    <li className="nav-item active" >
                    
                      <Link className="nav-link" to={"./"}>Home</Link>
                        <span className="sr-only">(current)</span>
                      
                    </li>
          
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About Us</Link>
                    </li>
          
                   <li className="nav-item">
                      <Link className="nav-link" to="/auction">Auctions</Link>
                    </li>
          

                    {!findUser?(<li className="nav-item">
                      <Link className="nav-link text-red" to="/login">Join Us</Link>
                    </li>):
                    (<li className="nav-item">
                       <a className="nav-link" onClick={()=>{
                        sessionStorage.removeItem("token");
                        setUser(null)
                        navigate("/login")
                       }}>Logout</a>
                    </li>
                    
                      )}
                      {findUser?(
                        <li>
                              <Link to="/cart" class="nav-link me-3" >
                              <i class="fa fa-shopping-cart icon-red icon-large"></i>
                              <span class="badge rounded-pill badge-notification bg-danger">0</span>
                              </Link>
                              </li>
                      ): null}

                      {findUser?(
                        <li>
                              <a class="nav-link me-3" href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                              </svg>
                              </a>
                              </li>
                      ): null}
                  </ul>

{findUser?(
          <div className="d-flex flex-row">
            <Link to="/profile">
        <img
          style={{ borderRadius: 12,width:'40px',height:'40px' }}
          src={profile}
          width="40px"
          height="40px"
        /></Link>
        <div className="d-flex flex-column ml-1 justify-content-center">
          <small className="text-white">{User?.username}</small>
        </div>
      </div>):null}
                </div>
              </div>
            </nav>
          </div>
          </div>
    
    )
}