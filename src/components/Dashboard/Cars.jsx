/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "../../css/Cars.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import GalaryAdmin from "../UI/Dashboard/reuseable/GalaryAdmin";
import Timer from "../Timer";

const Cars = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [AuctionData, setAuctionData] = useState();
  const [AuctionsDataNotActive, setAuctionsDataNotActive] = useState();
  const [selectedOption, setSelectedOption] = useState("serviceProviders");


  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAccept = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/accept_auction/${id}`,
        {},
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchData();
      toast.success(`Auction with id: ${id} Accepted!`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/delete_auction/${id}`,
        {},
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchData();
      toast.success(`Auction with id: ${id} deleted!`);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auction/null");
      setAuctionData(response?.data.filter(fdata => (Date.parse(fdata.auction_date)-Date.now())>0));
    } catch (error) {
      console.error(error);
    }
    try {
      const response = await axios.get("http://localhost:5000/not_active_auction", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = response.data;
      console.log(data);
      setAuctionsDataNotActive(data);
    } catch (error) {
      console.error(error);
    }

  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bookings">
      <div
        className="booking__wrapper "
        style={{ display: "flex", justifyContent: "center" }}
      >
        
        <div
          className="radio-inputs"
          style={{
            width: "100%",
            backgroundColor: "#000000",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            zIndex:'2'
          }}
        >
          <label className="radio">
            <input
              type="radio"
              name="radio"
              value="serviceProviders"
              checked={selectedOption === "serviceProviders"}
              onChange={handleRadioChange}
            />
            <span className="name" style={{color:'orange'}}>All Auction</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              name="radio"
              value="joiningRequests"
              checked={selectedOption === "joiningRequests"}
              onChange={handleRadioChange}
            />
            <span className="name"style={{color:'orange'}}>Auction Requests</span>
          </label>
        </div>
        {selectedOption === "serviceProviders" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "5rem",
            }}
          >
            {AuctionData?.map((Auction) => (
   <div className="container mt-5 mb-5">
   <div className="d-flex justify-content-center row" >
     <div className="col-md-10" >
       <div className="row p-2 bg-white border rounded shadow" style={{minHeight:'200px'}}>
         <div className="col-md-3 "   >
         {AuctionsDataNotActive && (
     <GalaryAdmin 
       img1={Auction?.productimage[0]}
       img2={Auction?.productimage[1]}
       img3={Auction?.productimage[2]}
       img4={Auction?.productimage[3]}
       img5={Auction?.productimage[4]}
       img6={Auction?.productimage[5]}
       img7={Auction?.productimage[6]}
       img8={Auction?.productimage[7]}
       img9={Auction?.productimage[8]}
       
     />
   )}
         </div>
         <div className="col-md-6 mt-1">
           <h5>{Auction?.title}</h5>
           <hr className="bg-black text-black"/>
           <p className="text-justify  para mb-0">
            {Auction?.discrabtion}
             <br />
             <br />
           </p>
         </div>
         <div className="align-items-center align-content-center col-md-3 border-left mt-1">
         <h6 className="text-success">Primary Price</h6>
             <h4 className="mr-1">${Auction.current_bid}</h4>
    
             <button className="btn btn-danger btn-sm mt-5 w-75" type="button" onClick={()=>handleDelete(Auction?.auction_id)}>
               Delete
             </button>

             <Timer data={Auction?.auction_date}/>
 
         </div>
       </div>

     </div>
   </div>
 </div>
            
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "5rem",
            }}
          >
              {AuctionsDataNotActive?.map((Auction) => (
              <div className="container mt-5 mb-5">
              <div className="d-flex justify-content-center row" >
                <div className="col-md-10" >
                  <div className="row p-2 bg-white border rounded shadow" style={{minHeight:'200px'}}>
                    <div className="col-md-3 "   >
                    {AuctionsDataNotActive && (
                <GalaryAdmin 
                  img1={Auction?.productimage[0]}
                  img2={Auction?.productimage[1]}
                  img3={Auction?.productimage[2]}
                  img4={Auction?.productimage[3]}
                  img5={Auction?.productimage[4]}
                  img6={Auction?.productimage[5]}
                  img7={Auction?.productimage[6]}
                  img8={Auction?.productimage[7]}
                  img9={Auction?.productimage[8]}
                  
                />
              )}
                    </div>
                    <div className="col-md-6 mt-1">
                      <h5>{Auction?.title}</h5>
                      <hr className="bg-black text-black"/>
                      <p className="text-justify  para mb-0">
                       {Auction?.discrabtion}
                        <br />
                        <br />
                      </p>
                    </div>
                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <h6 className="text-success">Primary Price</h6>
                        <h4 className="mr-1">${Auction.current_bid}</h4>
                      <div className="d-flex flex-row mt-4">
                        <button className="btn btn-success btn-sm mr-3" type="button" onClick={()=>handleAccept(Auction?.auction_id)}>
                          Accept
                        </button>
                        <button
                          className="btn btn-danger btn-sm" onClick={()=>handleDelete(Auction?.auction_id)}
                          type="button"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            ))}

          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cars;
