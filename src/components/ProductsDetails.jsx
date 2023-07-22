import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';
import '../css/ProductDetails.css';
import profile from '../images/profile.png';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



export default function ProductsDetails() {
  const navigation =useNavigate()
  const [auctionData, setAuctionData] = useState(null);
  const [bidAmount, setbidAmount] = useState(null);
  const params = useParams().id;
  const  [findUser,setFindUser]=useState(sessionStorage.getItem("token"))
  const  [User,setUser]=useState()

  const handleBid =async ()=>{
    if (User?.user_id) {
    const response = await axios
    .put("http://localhost:5000/bid_on_auction", {
      user_id:User?.user_id,
      current_bid:(auctionData[0]?.current_bid)+ bidAmount,
      auction_id:params,
      user_name:User?.username
    })
    .then((res) => {
      fetchData();
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  }else{
    navigation(`/login?id=${params}`)

  }
  }

  useEffect(() => {
    setFindUser(sessionStorage.getItem("token"))
    if (findUser) {
      checkToken(findUser).then((resultUsers) => {
       setUser(resultUsers)
      });
    }
    fetchData();
  }, []);

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

  

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:5000/auctionid/${params}`);
      setAuctionData(response?.data);
      console.log(response?.data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(auctionData)

useEffect(()=>{
  if(auctionData){
    let bidamount;
      if(auctionData[0]?.current_bid<=10){
        bidamount=1;
      }else if(auctionData[0]?.current_bid>10 && auctionData[0]?.current_bid<=100){
        bidamount=5;
      }else if(auctionData[0]?.current_bid>100 && auctionData[0]?.current_bid<=500){
        bidamount=10;
      }else if(auctionData[0]?.current_bid>500 && auctionData[0]?.current_bid<=1000){
        bidamount=50;
      }else if(auctionData[0]?.current_bid>1000 && auctionData[0]?.current_bid<=5000){
        bidamount=100;
      }else if(auctionData[0]?.current_bid>5000 && auctionData[0]?.current_bid<=10000){
        bidamount=500;
      }else if(auctionData[0]?.current_bid>10000){
        bidamount=1000;
      }
      setbidAmount(bidamount);
      }
},[auctionData])




  return (
    
    <div>
      <main className="mt-5 pt-4">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 mb-4 col-sm-12">
              {auctionData && (
                <Gallery
                  img1={auctionData[0]?.productimage[0]}
                  img2={auctionData[0]?.productimage[1]}
                  img3={auctionData[0]?.productimage[2]}
                  img4={auctionData[0]?.productimage[3]}
                  img5={auctionData[0]?.productimage[4]}
                  img6={auctionData[0]?.productimage[5]}
                  img7={auctionData[0]?.productimage[6]}
                  img8={auctionData[0]?.productimage[7]}
                  img9={auctionData[0]?.productimage[8]}
                  videoUrl={auctionData[0]?.productvideo}
                />
              )}
            </div>
            <div className="details col-md-6 col-sm-12">
            <div className="d-flex flex-row justify-content-between p-3 mid mb-3" style={{ borderTopRightRadius: '20px' }}>
  <div className="d-flex flex-row">
    <img style={{ borderRadius: 12 }} src={profile} width="40px" alt="profileimage" height="40px" />
    <div className="d-flex flex-column ml-1 justify-content-center">
      <small className="ghj"><span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{auctionData?auctionData[0]?.user_name:null}</span></small>
    </div>
  </div>
  <span className="follow-icon">
    <i className="fa fa-user-plus" />
  </span>
</div>
              <h3 className="product-title">{auctionData?auctionData[0]?.title:null}</h3>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <span className="review-no">41 reviews</span>
              </div>
              <p className="product-description">
              {auctionData?auctionData[0]?.discrabtion:null}
              </p>
              <h5 className="price">
              The highest bidder: <span>{auctionData? (auctionData[0]?.user_name != null?auctionData[0]?.user_name:"There Is No Bidder"):null}</span>
              </h5>
              <h5 className="price">
                current Bid: <span>${auctionData?auctionData[0]?.current_bid:null}</span>
              </h5>
              <p className="vote">
                Many buyers are interested in this product! <strong>(87 Bid)</strong>
              </p>
              {/* <p className="vote text-success">
                Bid amount! <strong>(${bidAmount})</strong>
              </p> */}
              <div className="action">
                <button className="add-to-cart btn btn-default mr-2" type="button" onClick={handleBid}>
                  Bid Now <span className='text-black'>{`(${bidAmount})$`}</span>
                </button>
                <button className="like btn btn-default" type="button">
                  <span className="fa fa-heart" />
                </button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </main>
      
    </div>
  );
}
