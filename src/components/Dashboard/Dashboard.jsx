import "../../css/dashboard.css";
import SingleCard from "../UI/Dashboard/reuseable/SingleCard";
import axios from 'axios'

import CarStatsChart from "../../charts/CarStatsChart";

import UsersChart from "../../charts/UsersChart";
import { useEffect, useState } from "react";





const Dashboard = () => {
  const [userCount, setuserCount] = useState()
  const [providerCount, setproviderCount] = useState()
  const [carsCount, setcarsCount] = useState()
  const [carsRentedCount, setcarsRentedCount] = useState()
  console.log(localStorage.getItem("token"))

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users_count", {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = response.data;
      setuserCount(data);

    } catch (error) {
      console.error(error);
    }

    try {
      const response = await axios.get("http://localhost:5000/auction_count", {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = response.data;
      setproviderCount(data);

    } catch (error) {
      console.error(error);
    }

    try {
      const response = await axios.get("http://localhost:5000/auction_count", {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = response.data;
      setcarsCount(data);

    } catch (error) {
      console.error(error);
    }

    try {
      const response = await axios.get("http://localhost:5000/request_auction_count", {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = response.data;
      setcarsRentedCount(data);

    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    fetchData()
  }, [])

  const clientObj1 = {
    title: "Users",
    totalNumber: userCount,
    icon: "fas fa-users",
  };

  const clientObj2 = {
    title: "Auction",
    totalNumber: providerCount,
    icon: "fas fa-gavel",
  };
  const carObj = {
    title: "End Auction",
    totalNumber: carsCount,
    icon: "fas fa-dollar-sign",
  };

  const RentedObj = {
    title: "Auction Request",
    totalNumber: carsRentedCount,
    icon: "fas fa-solid fa-bell",
  };
  return (
    
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={clientObj1} />
          <SingleCard item={clientObj2} />
          <SingleCard item={carObj} />
          <SingleCard item={RentedObj} />
          
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Users Statistics</h3>
            <UsersChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Auctions Statistics</h3>
            <CarStatsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;