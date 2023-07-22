import React, { useEffect, useState } from 'react'
import Hero from '../images/heroo3.jpg'
import '../css/Home.css'
import Land from '../images/land.png'
import Bulding from '../images/bulding.jpg'
import Car from '../images/car.jpg'
import Animal from '../images/animal.png'
import Diamond from '../images/diamond.png'
import Phone from '../images/phone.png'
import auctionclosed from '../images/auctionclosed.png'
import auctionopen from '../images/auctionopen.png'
import members from '../images/members.png'
import auction from '../images/auction.png'
import sealNow from '../images/sealNow.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Counter from './UI/Counter'
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // Number of slides to slide when next/previous buttons are clicked
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};


export default function Home(probs) {
  const navigation =useNavigate()

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

  useEffect(() => {
    console.log(window.location.pathname)
    const token = sessionStorage.getItem("token") || false;
    if (token) {
      checkToken(token).then((resultUsers) => {
        probs.setlogged(resultUsers?.role)
        //console.log(resultUsers)
        // if (resultUsers) {
        //   updateIsLog(true);
        //   navigate(path);
        // }
      });
    }
  }, []);
  return (
    <div>
      <div className="hero-section" style={{backgroundImage:`linear-gradient(to right, rgb(0, 0, 0) , rgba(250, 250, 250, 0.2)), url(${Hero})`}} id="home">
  <div className="herotextContainer">
  <Bounce left>
    <h1 data-aos="zoom-in-right" data-aos-delay={500}>
      E-Auction Website
    </h1>
    </Bounce>
    <Bounce right>
    <h3 data-aos="fade-left" data-aos-delay={800}>
      An auction website is an online platform that allows users to buy and sell
      goods and services through an online auction process.
    </h3>
    </Bounce>
  
    <div className="hero-button">
    <Flip right>
      <a className="btn-get-started text-white">
      <Link to="/pubishauction">
        Start Auction Now
        </Link>
      </a>
      </Flip>
      <Flip right>
      <a href="" className="btn-watch-details">
      Explore our website
      </a></Flip>
    </div>
  </div>
</div>


<Zoom bottom>
<h2 className="h2LineUnder">
    Select <b>Auctions</b> Type
  </h2>
  </Zoom>
  {/* <svg style={{position:'relative',top:'-200px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffecdc" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,213.3C480,213,600,171,720,165.3C840,160,960,192,1080,181.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
  </path>
</svg> */}

<section className="pt-5 pb-5 mb-5 mx-md-5 px-md-5">
<div className="carousel-wrapper mx-md-5 ">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
                  <Link to='/auction'  state={'Real Estate'}>
                 <div className="card mx-3"  style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                    height="100px"
                      className="img-fluid"
                      alt="Real Estate"
                      src={Bulding}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center" style={{fontFamily:'impact'}}>Real Estate</h4>
                      {/* <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p> */}
                    </div>
                  </div>
                  </Link>
                  <Link to='/auction'  state={'Vehicles'}>
                  <div className="card mx-3"  style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                      className="img-fluid"
                      alt="Vehicles"
                      height="100px"
                      src={Car}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center"style={{fontFamily:'impact'}}>Vehicles</h4>
                      {/* <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p> */}
                    </div>
                  </div>
                  </Link>
                  <Link to='/auction'  state={'Electronics'}>
                  <div className="card mx-3"  style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                      className="img-fluid"
                      height="100px"
                      alt="Electronics"
                      src={Phone}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center"style={{fontFamily:'impact'}}>Electronics</h4>
                      {/* <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p> */}
                    </div>
                  </div>
                  </Link>
                  <Link to='/auction'  state={'Land'}>
                  <div className="card mx-3"  style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                      className="img-fluid"
                      alt="Land"
                      src={Land}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center"style={{fontFamily:'impact'}}>Land</h4>
                      {/* <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p> */}
                    </div>
                  </div>
                  </Link>
                  <Link to='/auction'  state={'Animal'}>
                  <div className="card mx-3"  style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                      className="img-fluid"
                      alt="Animal"
                      src={Animal}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center"style={{fontFamily:'impact'}}>Animal</h4>
                      {/* <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p> */}
                    </div>
                  </div>
                  </Link>
                  <Link to='/auction'  state={'Jewelry'}>
                  <div className="card mx-3"  style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                      className="img-fluid"
                      alt="Jewelry"
                      src={Diamond}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center"style={{fontFamily:'impact'}}>Jewelry</h4>
                      {/* <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p> */}
                    </div>
                  </div></Link>

      </Carousel>
    </div>
  {/* <div className="container">
    <div className="row">
      <div className="col-12 d-flex justify-content-center">

        <div
          id="carouselExampleIndicators2"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className='d-flex'>
          <a
          className="btn btn-primary mb-3 mr-1 d-flex align-items-center w-50 justify-content-center"style={{backgroundColor:'#ffaf6d'}}
          href="#carouselExampleIndicators2"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-arrow-left" />
        </a>
        <a
          className="btn btn-primary mb-3 d-flex align-items-center justify-content-center  " style={{backgroundColor:'#ffaf6d'}}
          href="#carouselExampleIndicators2"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-arrow-right text-center" />
        </a>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card" style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                    height="100px"
                      className="img-fluid"
                      alt="Real Estate"
                      src={Bulding}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center" style={{fontFamily:'impact'}}>Real Estate</h4>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card" style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                      className="img-fluid"
                      alt="Vehicles"
                      height="100px"
                      src={Car}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center"style={{fontFamily:'impact'}}>Vehicles</h4>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3 ">
                  <div className="card" style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                      className="img-fluid"
                      height="100px"
                      alt="Electronics"
                      src={Phone}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center"style={{fontFamily:'impact'}}>Electronics</h4>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card" style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                      className="img-fluid"
                      alt="Land"
                      src={Land}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center"style={{fontFamily:'impact'}}>Land</h4>
                       <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p> 
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card" style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                      className="img-fluid"
                      alt="Animal"
                      src={Animal}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center"style={{fontFamily:'impact'}}>Animal</h4>
                       <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p> 
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card" style={{boxShadow:'7px 7px 12px rgba(253, 195, 87, 0.42)'}}>
                    <img
                      className="img-fluid"
                      alt="Jewelry"
                      src={Diamond}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-center"style={{fontFamily:'impact'}}>Jewelry</h4>
                       <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div> */}
</section>

<>
  {/* Container for demo purpose */}
  <div>
    {/* Section: Design Block */}
    <section className="mb-5">
      
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="svg absolute hidden lg:block"
        style={{ height: 560, width: "100%", zIndex: -10, overflow: "hidden" }}
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
            <stop stopColor="hsl(50, 50%, 99%)" offset="0%" />
            <stop stopColor="hsl(45,60%, 90%)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
        />
      </svg>

    </section>
    
    <section id="start-Auction" className="seal-now-section">
  <div className="sealNow">
    <div data-aos="fade-right" data-aos-delay={500}>
      <Fade left>
      <p>
      Ready to maximize your profits and sell your valuable commodity at the highest possible price? Look no further! Our state-of-the-art online auction platform is here to make your selling experience a breeze.
      </p>
      </Fade>
      
      <Link to="/pubishauction" className=" btn-auction-now btn-get-started shadow">
        Start your auction Now
      </Link>
     
    </div>
    <Rotate buttom right>
    <img
      data-aos="fade-left"
      data-aos-delay={1000}
      src={sealNow}
      alt="man and weman"
      width="100%"
      height="100%"
    />
    </Rotate>
  </div>
</section>

  </div>
  
</>


    <div className='trending-content'>
    <Zoom bottom>
    <h2 className="h2LineUnder">
    Recommended <b> auctions </b> for you
  </h2>
  </Zoom>
<div className="row">
  <div className="col-md-3 col-sm-6">
    <Flip left>
    <div className="product-grid shadow-lg">
      <div className="product-image">
        <a href="#" className="image">
          <img className="pic-1" alt="Bulding" src={Bulding} />
        </a>
        <ul className="product-links">
          <li>
            <a href="#">
              <i className="fa fa-shopping-bag" /> View Details
            </a>
          </li>
        </ul>
      </div>
      <div className="product-content">
        <h3 className="title">
          <a href="#">bulding in amman</a>
        </h3>
        <div className="price">$1000.99</div>
      </div>
    </div>
    </Flip>
  </div>

  <div className="col-md-3 col-sm-6">
  <Flip left>
    <div className="product-grid shadow-lg">
      <div className="product-image">
        <a href="#" className="image">
          <img alt="Phone" className="pic-1" src={Phone} />
        </a>
        <ul className="product-links">
          <li>
            <a href="#">
              <i className="fa fa-shopping-bag" /> View Details
            </a>
          </li>
        </ul>
      </div>
      <div className="product-content">
        <h3 className="title">
          <a href="#">Apple Laptop</a>
        </h3>
        <div className="price">$15000</div>
      </div>
    </div>
    </Flip>
  </div>
  <div className="col-md-3 col-sm-6">
  <Flip left>
    <div className="product-grid shadow-lg">
      <div className="product-image">
        <a href="#" className="image">
          <img className="pic-1" alt="Car" src={Car} />
        </a>
        <ul className="product-links">
          <li>
            <a href="#">
              <i className="fa fa-shopping-bag" /> View Details
            </a>
          </li>
        </ul>
      </div>
      <div className="product-content">
        <h3 className="title">
          <a href="#">mitsubishi 2020</a>
        </h3>
        <div className="price">$790000.99</div>
      </div>
    </div>
    </Flip>
  </div>
</div>
</div>


  <div id="infoContainer" className="info-container" data-aos="zoom-in" data-aos-delay={500}>
  <div>
    <div className="circule-div">
      <img src={auctionopen} alt="auctions open" />
    </div>
    <p>
      Auctions Starting <br /> Today
    </p>
    <div ><Counter value="250"/></div>
  </div>
  <div>
    <div className="circule-div">
      <img src={auctionclosed} alt="auction closed" />
    </div>
    <p>
      Auctions Closing
      <br /> Today
    </p>
    <div ><Counter value="200"/></div>
  </div>
  <div>
    <div className="circule-div">
      <img src={auction} alt="auctions list" />
    </div>
    <p>Auctions Published</p><br />
    <div ><Counter value="3500"/></div>
  </div>
  <div>
    <div className="circule-div">
      <img src={members} alt="members" />
    </div>
    <p>Members Number</p><br />
    <div ><Counter value="10200"/></div>
  </div>
</div>

<section id="pricing">
  <div className="row">
    <div className="col-md-4 col-sm-6">
      <Fade left>
      <div className="pricing-table-3 basic">
        <div className="pricing-table-header">
          <h4>
            <strong>BASIC</strong>
          </h4>
          <p>Loerm Ipsum Donor Sit Amet</p>
        </div>
        <div className="price">
          <strong>$3</strong> / MONTH
        </div>
        <div className="pricing-body">
          <ul className="pricing-table-ul">
            <li>
              <i className="fa fa-send" /> Unlimited Email Addresses
            </li>
            <li>
              <i className="fa fa-cloud" /> 50 GB Disk Space
            </li>
            <li>
              <i className="fa fa-database" /> Unlimited MySQL Database
            </li>
            <li className="not-avail">
              <i className="fa fa-clock-o" /> 24X7 Support
            </li>
            <li className="not-avail">
              <i className="fa fa-envelope" /> Email Support
            </li>
          </ul>
          <a href="#" className="view-more">
            View More
          </a>
        </div>
      </div>
      </Fade>
    </div>
    <div className="col-md-4 col-sm-6">
    <Fade buttom>
      <div className="pricing-table-3 premium">
        <div className="pricing-table-header">
          <h4>
            <strong>PREMIUM</strong>
          </h4>
          <p>Loerm Ipsum Donor Sit Amet</p>
        </div>
        <div className="price">
          <strong>$8</strong> / MONTH
        </div>
        <div className="pricing-body">
          <ul className="pricing-table-ul">
            <li>
              <i className="fa fa-send" /> Unlimited Email Addresses
            </li>
            <li>
              <i className="fa fa-cloud" /> 80 GB Disk Space
            </li>
            <li>
              <i className="fa fa-database" /> Unlimited MySQL Database
            </li>
            <li className="not-avail">
              <i className="fa fa-clock-o" /> 24X7 Support
            </li>
            <li className="not-avail">
              <i className="fa fa-envelope" /> Email Support
            </li>
          </ul>
          <a href="#" className="view-more">
            View More
          </a>
        </div>
      </div>
      </Fade>
    </div>
    <div className="col-md-4 col-sm-12">
    <Fade right>
      <div className="pricing-table-3 business">
        <div className="pricing-table-header">
          <h4>
            <strong>BUSINESS</strong>
          </h4>
          <p>Loerm Ipsum Donor Sit Amet</p>
        </div>
        <div className="price">
          <strong>$12</strong> / MONTH
        </div>
        <div className="pricing-body">
          <ul className="pricing-table-ul">
            <li>
              <i className="fa fa-send" /> Unlimited Email Addresses
            </li>
            <li>
              <i className="fa fa-cloud" /> 120 GB Disk Space
            </li>
            <li>
              <i className="fa fa-database" /> Unlimited MySQL Database
            </li>
            <li className="not-avail">
              <i className="fa fa-clock-o" /> 24X7 Support
            </li>
            <li className="not-avail">
              <i className="fa fa-envelope" /> Email Support
            </li>
          </ul>
          <a href="#" className="view-more">
            View More
          </a>
        </div>
      </div>
      </Fade>
    </div>
  </div>
</section>

    </div>
  )
}
