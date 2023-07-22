import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Timer from './Timer';
import sold from '../images/soled.png'
import { Link } from 'react-router-dom';

export default function Cart() {
    const [AuctionCurrentData,setCurrentAuctionData] =useState()
    const [AuctionEndData,setEndAuctionData] =useState()

    const [selectedOption, setSelectedOption] = useState("currentAuctions");

    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
  
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
      fetchData()
    },[User?.user_id])
   
  
    async function fetchData() {
      try {
        const response = await axios
          .get(`http://localhost:5000/user_auction/${User?.user_id}`)
          .then((response) => {
            setEndAuctionData(response?.data.filter(fdata => (Date.parse(fdata.auction_date)-Date.now())<=0));
            setCurrentAuctionData(response?.data.filter(fdata => (Date.parse(fdata.auction_date)-Date.now())>0))
          
            
          });
      } catch (error) {
        console.error(error);
        return false;
      }}
  return (
    <div>
        <div
        className="booking__wrapper "
        style={{ display: "flex", justifyContent: "center" ,marginTop:'150px' }}
      >
         <div
          className="radio-inputs"
          style={{
            width: "90%",
            backgroundColor: "#000000",
            display: "flex",
            flexWrap:'nowrap',
            justifyContent: "center",
           
          }}
        >
                      <label className="radio">
            <input
            style={{width:'25px'}}
              type="radio"
              name="radio"
              value="currentAuctions"
              checked={selectedOption === "currentAuctions"}
              onChange={handleRadioChange}
            />
            <span className="name" style={{color:'orange'}}>Current Auctions</span>
          </label>
          <label className="radio">
            <input
            style={{width:'25%'}}
              type="radio"
              name="radio"
              value="WinningAuctions"
              checked={selectedOption === "WinningAuctions"}
              onChange={handleRadioChange}
            />
            <span className="name"style={{color:'orange'}}>Winning Auctions</span>
          </label>
        </div>
        </div>
        {selectedOption === "currentAuctions" ? (
      <div
      className="carousel-inner "
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "space-between",
      }}
    >
      {AuctionCurrentData?.map((product) => (
        
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
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
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
        ) : (
          <div
          className="carousel-inner "
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "space-between",
          }}
        >
          {AuctionEndData?.map((product) => (
            
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
              <span style={{position:'absolute',top:'10px'}}>
             <img src={sold} alt="" />
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
                <div className="d-flex justify-content-center">
                  <div className="d-flex mt-3 ml-4">
                  </div>

                  <div
                    className="d-flex  justify-content-center mb-0 px-5"
                    style={{ color: "green", fontFamily: "impact" }}
                  >
                    
                    <h4>${product.current_bid}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>)}
    </div>
    )
  
}
