import React, { useEffect, useState } from 'react'
import profile from '../images/profile.png'
import { Link } from 'react-router-dom';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import Timer from './Timer';
import sold from '../images/soled.png'

export default function Profile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [adminData, setadminData] = useState();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [address, setaddress] = useState();
  const [password, setpassword] = useState();
  const [YourAuctionCurrentData,setYourCurrentAuctionData] =useState()
  const [YourAuctionEndData,setYourEndAuctionData] =useState()
  const [selectedOption, setSelectedOption] = useState("YourAuctions");

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
        .get(`http://localhost:5000/end_auction_with_user/${User?.user_id}`)
        .then((response) => {
          setYourEndAuctionData(response?.data.filter(fdata => (Date.parse(fdata.auction_date)-Date.now())<=0));
          setYourCurrentAuctionData(response?.data.filter(fdata => (Date.parse(fdata.auction_date)-Date.now())>0))
          console.log(YourAuctionCurrentData)
          console.log(YourAuctionEndData)
          
        });
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  return (
    <>

<Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add A New Inormation </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className='px-5'>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(event) => setname(event.target.value)}
                  placeholder="Johnatan Smith"
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="0799999999"
                  autoFocus
                  onChange={(event) => setphone(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zarqa , Jordan"
                  autoFocus
                  onChange={(event) => setaddress(event.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" >
              Update
            </Button>
          </Modal.Footer>
        </Modal>

<div className=' mt-5 pt-5' style={{backgroundColor:'#1B1E21', height:'15rem',display:'flex',alignItems:'end'}}>
<div className='d-flex align-items-end'>
<div className='d-flex justify-content-center align-items-center ml-5' style={{borderRadius:'110px',height:'210px',width:'210px',backgroundColor:'white',position:'relative',top:'100px'}}>
<img src={profile} alt="profile image" style={{width:'200px',width:'200px',}} />
<svg style={{position:'absolute',bottom:'30',right:'30'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
</div>


</div>
</div>
<div className='row'>
<div className='col'>
  
<h3 className='mt-4' style={{marginLeft:'18rem',fontFamily:'impact'}}>{User?.username}</h3>
<b><h3 className='mt-1 text-success' style={{marginLeft:'18rem',fontFamily:'impact'}}>Balance : {User?.balance}$</h3></b>
<div className='d-flex ml-4'>
<svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
&nbsp;<p>Follower: 20</p>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill-check ml-4" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
</svg>
&nbsp;<p>Following: 40</p>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill ml-4" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
           &nbsp;<p>{User?.email}</p>

           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill ml-4" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
         </svg>
         &nbsp; <p>{User?.phone}</p>

</div>
</div>
<div className='col'>
  <div className='d-flex mt-4'>
    <button className='btn px-4 text-white mx-2' style={{backgroundColor:'#FA851E'}}>Follow +</button>
    <button className='btn px-4 text-white mx-2' onClick={handleShow} style={{backgroundColor:'#FA851E'}}>Edit Profile</button>
    <>
  <button
    type="button"
    className="btn btn-primary launch"
    data-toggle="modal"
    data-target="#staticBackdrop"
  >
    {" "}
    <i className="fa fa-rocket" /> Pay Now
  </button>
  {/* Modal */}
  <div
    className="modal fade"
    id="staticBackdrop"
    data-backdrop="static"
    data-keyboard="false"
    tabIndex={-1}
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    {" "}
    <div className="modal-dialog">
      {" "}
      <div className="modal-content">
        {" "}
        <div className="modal-body">
          {" "}
          <div className="text-right">
            {" "}
            <i className="fa fa-close close" data-dismiss="modal" />{" "}
          </div>{" "}
          <div className="tabs mt-3">
            {" "}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {" "}
              <li className="nav-item" role="presentation">
                {" "}
                <a
                  className="nav-link active"
                  id="visa-tab"
                  data-toggle="tab"
                  href="#visa"
                  role="tab"
                  aria-controls="visa"
                  aria-selected="true"
                >
                  {" "}
                  <img src="https://i.imgur.com/sB4jftM.png" width={80} />{" "}
                </a>{" "}
              </li>{" "}
              <li className="nav-item" role="presentation">
                {" "}
                <a
                  className="nav-link"
                  id="paypal-tab"
                  data-toggle="tab"
                  href="#paypal"
                  role="tab"
                  aria-controls="paypal"
                  aria-selected="false"
                >
                  {" "}
                  <img src="https://i.imgur.com/yK7EDD1.png" width={80} />{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
            <div className="tab-content" id="myTabContent">
              {" "}
              <div
                className="tab-pane fade show active"
                id="visa"
                role="tabpanel"
                aria-labelledby="visa-tab"
              >
                {" "}
                <div className="mt-4 mx-4">
                  {" "}
                  <div className="text-center">
                    {" "}
                    <h5>Credit card</h5>{" "}
                  </div>{" "}
                  <div className="form mt-3">
                    {" "}
                    <div className="inputbox">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Cardholder Name</span>{" "}
                    </div>{" "}
                    <div className="inputbox">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        min={1}
                        max={999}
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Card Number</span> <i className="fa fa-eye" />{" "}
                    </div>{" "}
                    <div className="d-flex flex-row">
                      {" "}
                      <div className="inputbox">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          min={1}
                          max={999}
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>Expiration Date</span>{" "}
                      </div>{" "}
                      <div className="inputbox">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          min={1}
                          max={999}
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>CVV</span>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="px-5 pay">
                      {" "}
                      <button className="btn btn-success btn-block">
                        Add card
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div
                className="tab-pane fade"
                id="paypal"
                role="tabpanel"
                aria-labelledby="paypal-tab"
              >
                {" "}
                <div className="px-5 mt-5">
                  {" "}
                  <div className="inputbox">
                    {" "}
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                    />{" "}
                    <span>Paypal Email Address</span>{" "}
                  </div>{" "}
                  <div className="pay px-5">
                    {" "}
                    <button className="btn btn-primary btn-block">
                      Add paypal
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  </div>
</>

  </div>
</div>
</div>
<hr className='mb-5 text-black bg-black' />
<hr className='text-black bg-black'/>
<div
        className="booking__wrapper "
        style={{ display: "flex", justifyContent: "center" }}
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
            style={{width:'25%'}}
              type="radio"
              name="radio"
              value="YourAuctions"
              checked={selectedOption === "YourAuctions"}
              onChange={handleRadioChange}
            />
            <span className="name"style={{color:'orange'}}>Your Auctions</span>
          </label>
          <label className="radio">
            <input
            style={{width:'25%'}}
              type="radio"
              name="radio"
              value="YourEndAuctions"
              checked={selectedOption === "YourEndAuctions"}
              onChange={handleRadioChange}
            />
            <span className="name"style={{color:'orange'}}>Your End Auctions</span>
          </label>
        </div>
        </div>
        {selectedOption === "YourAuctions" ?
        <div
        className="carousel-inner "
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "space-between",
        }}
      >
        {YourAuctionCurrentData?.map((product) => (
          
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

            <div className="d-flex justify-content-center">
              <p className=" mt-2">
                <b>{product?.title}</b>
              </p>
            </div>

            <hr className="mt-2 mx-3" />

            {/* <b><p style={{textAlign:'center',marginTop:'5px'}}>*Contact Info</p></b>
            <hr className='mx-5 text-black bg-black' /> */}
                        <div className='ml-3 d-flex text-muted'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </svg>
              &nbsp; highest bidder :{product?.username}
            </div>
            <div className='ml-3 d-flex text-muted'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
             <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
              </svg>
              &nbsp; highest bid :{product.current_bid}$
            </div>
            <div className='ml-3 d-flex text-muted'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
                <p>&nbsp;  {product?.phone}</p>
            </div>

            <div className='d-flex text-muted ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
            <p>&nbsp;  {product?.email}</p>

            </div>


            <div className="mx-3">
              <Link to={`/productdetails/${product?.auction_id}`}><button type="button" className="btn btn-vie-details btn-block">
                <small>VIEW DETAILS</small>
              </button></Link>
            </div>
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
          </div>
        ))}
      </div>
       :
       <div
       className="carousel-inner "
       style={{
         display: "flex",
         flexWrap: "wrap",
         justifyContent: "center",
         alignContent: "space-between",
       }}
     >
       {YourAuctionEndData?.map((product) => (
         
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

           {/* <b><p style={{textAlign:'center',marginTop:'5px'}}>*Contact Info</p></b>
           <hr className='mx-5 text-black bg-black' /> */}
                       <div className='ml-3 d-flex text-muted'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
           <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
             </svg>
             &nbsp; highest bidder :{product?.username}
           </div>
           <div className='ml-3 d-flex text-muted'>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
             </svg>
             &nbsp; highest bid :{product.current_bid}$
           </div>
           <div className='ml-3 d-flex text-muted'>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
         </svg>
               <p>&nbsp;  {product?.phone}</p>
           </div>

           <div className='d-flex text-muted ml-3'>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
           <p>&nbsp;  {product?.email}</p>

           </div>


           <div className="mx-3">
             <Link to={`/productdetails/${product?.auction_id}`}><button type="button" className="btn btn-vie-details btn-block">
               <small>VIEW DETAILS</small>
             </button></Link>
           </div>
         </div>
       ))}
     </div> }
     

</>

  )
}
