import  React, { useEffect, useState } from 'react';
import { Box, Stepper, Step, StepLabel, StepContent, Button, Paper, Typography } from '@mui/material';
import '../css/publish.css'
import image from '../images/pauction.png'
import imageplace1 from '../images/imageplace1.png'
import imageplace2 from '../images/imageplace2.png'
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export default function PubishAuction() {
  const navigation =useNavigate()
  const  [findUser,setFindUser]=useState(sessionStorage.getItem("token"))
  const  [User,setUser]=useState()

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [productName,setproductName]=useState()
  const [productType,setproductType]=useState("Real Estate")
  const [productDes,setproductDes]=useState()
  const [productPrice,setproductPrice]=useState()
  const [productDate,setproductDate]=useState()
  // const [productImg,setproductImg]=useState()
  const [productImg, setproductImg] = useState([]);
  const [productVideo,setproductVideo]=useState()
  const [renderedImages,setRenderedImages]=useState(null)



  const handleCaptchaVerification = (response) => {
    console.log('reCAPTCHA verification response:', response);
    setIsCaptchaVerified(true);
  };

  console.log(productName,productVideo,productImg,productType,productDes,productPrice,productDate)

  useEffect(() => {
    const renderImages = async () => {
      const imagePromises = productImg.map((imageFile) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = (e) => reject(e);
          reader.readAsDataURL(imageFile);
        });
      });
  
      try {
        const imageUrls = await Promise.all(imagePromises);
        setRenderedImages(imageUrls);
      } catch (error) {
        console.error('Error reading image files:', error);
      }
    };
  
    renderImages();
  }, [productImg]);
 

  const handleNext = (step) => {
    if(step === "step1"){
      if(productName != null && productDes != null){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        document.getElementById("step1Label").style ="color:black"
      }else{
        document.getElementById("step1Label").style ="color:red"
      }  
    }
    if(step === "step2"){
      if(productPrice != null && productDate != null){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        document.getElementById("step2Label").style ="color:black"
      }else{
        document.getElementById("step2Label").style ="color:red"
      }  
    }
    if(step === "step3"){
      if(productImg != null){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        document.getElementById("step3Label").style ="color:black"
      }else{
        document.getElementById("step3Label").style ="color:red"
      }  
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
      });
    }
    console.log(findUser)
  },[sessionStorage.getItem("token")])


  const handleFileChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setproductImg(selectedImages);
  };

  const onSelect =(e)=> {
    if (e.files.length > 5) {
        alert("Only 5 files accepted.");
        e.preventDefault();
    }
}

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isCaptchaVerified) {
    const formData = new FormData();
    formData.append("discrabtion", productDes);
    formData.append("title", productName);
    formData.append("type", productType);
    formData.append("user_id", User?.user_id);
    formData.append("current_bid", productPrice);
    formData.append("productVideo", productVideo);
    formData.append("auction_date", productDate);
    for (let i = 0; i < productImg.length; i++) {
      formData.append("images", productImg[i]);
    }
  
    axios
      .post("http://localhost:5000/auction", formData)
      .then((res) => {
        console.log(res);
        Swal.fire(
          'Posted Successfully!',
          'You clicked the button!',
          'success'
        )
        navigation('/')

      })
      .catch((err) => {
        console.error(err);
      });
    }else{
      alert("Please do capatcha")
    }
  };
  


  return (
    <div className='d-flex pl-lg-5 px-2'>
      <div className=''>
        
      <Box sx={{ maxWidth: 400, marginTop: "6rem", marginBottom:'6rem' }} className="mobile-container">
     <form onSubmit={handleSubmit}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step className='pg-dark'>
          <StepLabel><span id='step1Label'>General Information of Product</span></StepLabel>
          <StepContent>
            <small>what do you want to sell or advertise?</small>
            <input
            onChange={(event)=>setproductName(event.target.value)}
            className='form-control auction-input shadow-lg'
              type="text"
              required
              style={{  height: "3rem" }}
            />

            <small>select type of your product</small>

            <div class="form-group">
            <select style={{  height: "3rem" }} onChange={(event)=>setproductType(event.target.value)} id="product_type" className="form-control auction-input shadow-lg" data-role="select-dropdown">
            <option value={"Real Estate"}>Real Estate</option>
            <option value={"Vehicles"}>Vehicles</option>
            <option value={"Electronics"}>Electronics</option>
            <option value={"Land"}>Land</option>
            <option value={"Animal"}>Animal</option>
            <option value={"Jewelry"}>Jewelry</option>
            </select>
            </div>
     
            <small>add more discription:</small>
            <input
            onChange={(event)=>setproductDes(event.target.value)}
            className='form-control auction-input shadow-lg'
              type="text"
              required
              style={{  height: "10rem" }}
            />

            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={()=>handleNext("step1")}
                  sx={{ mt: 1, mr: 1, backgroundColor: "orange" }}
                >
                  Continue
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>

        <Step>
          <StepLabel><span id='step2Label'>more details</span></StepLabel>
          <StepContent>
          <small>What is the starting price of the auction? <span className='text-success'><b>in $</b></span></small>
            <input
              type="number"
              onChange={(event)=>setproductPrice(event.target.value)}
              className='form-control auction-input shadow-lg'
              required
              style={{  height: "3rem" }}
            />
            <small>What is the END DATE of the auction</small>
            <input
            onChange={(event)=>setproductDate(event.target.value)}
              type="datetime-local"
              className='form-control auction-input shadow-lg'
              required
              style={{  height: "3rem" }}
            />
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={()=>handleNext("step2")}
                  sx={{ mt: 1, mr: 1, backgroundColor: "orange" }}
                >
                  Continue
                </Button>
                <Button onClick={handleBack} sx={{ mt: 1, mr: 1 ,color: "orange"}}>
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>

        <Step>
          <StepLabel><span id='step3Label'>images and videoes</span></StepLabel>
          <StepContent>
            <small>add images to your Product:</small>     <br /> 
               <small><small className='text-success'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg>At least one Image</small></small>

                      <input
                        className="form-control auction-input shadow-lg"
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        id="multiple_files"
                        name="multiple_files"
                        multiple
                        onSelect={onSelect}
                        onChange={handleFileChange}
                      /><br/>

                      

<div className="d-flex flex-wrap placeholderimage " >
  {/* Render the placeholder images */}
  {[...Array(6)].map((_, index) => (
    <img
    className='shadow'
      key={index}
      src={index < renderedImages?.length ? renderedImages[index] : imageplace2}
      alt="placeholderimage"     
    />
  ))}
</div>

                     
              <small>add video link to your Product <span className='text-success'>*optional</span></small> 
              <input
              onChange={(event)=>setproductVideo(event.target.value)}
              className='form-control auction-input shadow-lg'
              type="text"
              style={{ height: "3rem",marginBottom:'0.5rem' }}
            />
                  <ReCAPTCHA
        sitekey="6LdXdc4mAAAAAHFk-Gy0OYXac-8dKY67-bLFQO6m"
        onChange={handleCaptchaVerification}
      />
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  type='submit'
                  sx={{ mt: 1, mr: 1, backgroundColor: "orange" }}
                >
                  finish
                </Button>
                <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>

      </Stepper>
      </form>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
    </div>

     {/* <div>
      <img src={image} className='p-auction-image ' width={'20rem'} alt="auction" style={{marginLeft:'25rem',marginTop:'8rem' ,width:'50%'}} />
    </div>  */}

    </div>
  );
}