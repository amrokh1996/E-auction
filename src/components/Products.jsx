import React, { useContext, useEffect, useState } from 'react';
// import { ProductsData } from '../App';
import '../css/Product.css';
import Timer from './Timer';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Products(props) {
  const [AuctionData,setAuctionData] =useState()
  
  const location = useLocation();
const auctiontype = location.state;
console.log(auctiontype)

  // const data = useContext(ProductsData);
  // console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios
        .get(`http://localhost:5000/auction/${auctiontype}`)
        .then((response) => {
          setAuctionData(response?.data.filter(fdata => (Date.parse(fdata.auction_date)-Date.now())>0))
          console.log(response?.data)
          
        });
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return (
    <div>
      <div style={{ marginTop: "10rem" }}>
    
        <div className='mx-3 mx-lg-5' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <input
            type="text"
            className="form-control input-text bg-white"
            placeholder="Search products...."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            style={{height:'3rem'}}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-warning btn-lg" type="button">
              <i className="fab fa-search" />
            </button>
          </div>
        </div>

        <h2>
          Available <b>Auctions</b>
        </h2>

        <div
          className="carousel-inner "
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "space-between",
          }}
        >
          {AuctionData?.map((product) => (
            
            <div
              key={product?.auction_id}
              className="card cardd d-flex fle justify-content-center shadow mx-lg-5" 
            >
              {console.log(product?.auction_date)}
              <img
                src={product?.productimage[0]}
                className="card-img-top img-box"
                width="50%"
                style={{ borderBottom: "1px #e5cca69b solid" }}
              />
              <span className="wish-icon d-flex justify-content-center align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
              </span>
              <div className="d-flex justify-content-center">
                <p className=" mt-2">
                  <b>{product?.title}</b>
                </p>
              </div>

              <hr className="mt-2 mx-3" />
              <div
                className="text-muted"
                style={{
                  height: "3rem",
                  overflowY: "hidden",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <small style={{height:'10px',overflowY:'hidden'}}>{product?.discrabtion}</small>
              </div>

              <div className="mx-3">
                <Link to={`/productdetails/${product?.auction_id}`}><button type="button" className="btn btn-vie-details btn-block">
                  <small>VIEW DETAILS</small>
                </button></Link>
              </div>

              <div className="card-body pt-2 px-0">
                <div className="d-flex justify-content-between">
                  <div className="d-flex mt-3 ml-4">
                    <b>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                    </b>

                    <small className=" ml-2">
                      <Timer data={product?.auction_date} />
                    </small>
                  </div>

                  <div
                    className="d-flex flex-column justify-content-between mb-0 px-5"
                    style={{ color: "green", fontFamily: "impact" }}
                  >
                    <small className="mt-1">CURRENT BID</small>
                    <h4>${product.current_bid}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}


   