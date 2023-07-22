/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import CarItemAdmin from "../../components/Dashboard/UI/CarItemAdmin";
import axios from "axios";
import GalaryAdmin from "../UI/Dashboard/reuseable/GalaryAdmin";
import { ToastContainer, toast } from "react-toastify";

const RentedCars = () => {
  const [AuctionData, setAuctionData] = useState();

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
      setAuctionData(response?.data.filter(fdata => (Date.parse(fdata.auction_date)-Date.now())<=0));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
         {AuctionData && (
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
             <h4 className="mr-1">${Auction?.current_bid}</h4>
             <h6 className="mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-fill-check ml-4" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
</svg> {Auction?.username}</h6>
             <h6 className="mt-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill ml-4" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
         </svg> {Auction?.phone}</h6>
             <h6 className="mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill ml-4" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg> {Auction?.email}</h6>
    
             <button className="btn btn-danger btn-sm mt-5 w-75" type="button" onClick={()=>handleDelete(Auction?.auction_id)}>
               Delete
             </button>

            
 
         </div>
       </div>

     </div>
   </div>
 </div>
            
            ))}
          </div>
      <ToastContainer />

    </>
  );
};

export default RentedCars;