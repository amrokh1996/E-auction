import React from 'react';
import '../css/Footer.css';
import { Link,} from 'react-router-dom';
import Logo from '../images/logo2.png';
import TranslationPage from './custom-hooks/Translate';


export default function Footer(){
    return (
<div className="d-flex flex-column h-100">

  {/* FOOTER */}
   <footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
      <div className="row gy-4 gx-5">
        <div className="col-lg-4 col-md-6">
          <img src={Logo} alt="logo" style={{width:'150px'}} />
          <p className="small text-muted w-75">
          An auction website is an online platform that allows users to buy and sell goods and services through an online auction process.
          </p>
        </div>

        <div className="col-lg-2 col-md-6">
          <h5 className="text-white mb-3">Quick Auction</h5>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#">Real Estate</a>
            </li>
            <li>
              <a href="#">Vehicles</a>
            </li>
            <li>
              <a href="#">Electronics</a>
            </li>
            <li>
              <a href="#">Land</a>
            </li>
            <li>
              <a href="#">Animal</a>
            </li>
            <li>
              <a href="#">Jewelry</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5 className="text-white mb-3">Quick links</h5>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Auction</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">How It Work</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6">
          <h5 className="text-white mb-3">suggestions</h5>
          <p className="small text-muted">
          If you have a specific suggestion or idea, share it with us without hesitation.
          </p>
          <form action="#">
            <div className="input-group mb-3">
              <input
                className="form-control mt-2"
                type="text"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn "style={{backgroundColor:'rgb(250,133,30)'}}
                id="button-addon2"
                type="button"
              >
                <i className="fas fa-paper-plane" />
              </button>
            </div>
          </form>
          <TranslationPage/>
        </div>
      </div>
    </div>
    <div className="text-center p-3" style={{backgroundColor: '#fa851e'}}>
          © 2023 Copyright:
          <a className="text-white" href="">E-Auction.com</a>
          <br/>By<a className="text-white" href=""> Amro Alkhazaleh</a>
        </div>
  </footer>

</div>

      )
    
      }

