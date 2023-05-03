import React from "react";
import Navbar from "./navbar";
import { useEffect,useState } from "react";
import Loader from "./loader";
import axios from "axios";
function Bookingdetails() {
    const [data,setData] = useState([]);
    const [fe,setFe] = useState(false);
    {useEffect(() => {
        axios.get(`http://localhost:4000/getbookingdetails:${sessionStorage.getItem("gmail")}`).then((res) => {
          setData(res.data);
          setFe(true)
        });
      }, [])};
  return (
    <>
      <Navbar />
      {!fe?<Loader/>:fe && data.length==0 ?<center> <h1 className="mt-4">No Booking details found</h1><h2>please book a car to view history</h2></center>:
      <div className="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">s.no</th>
              <th scope="col">Booked on name</th>
              <th scope="col">Car name</th>
              <th scope="col">Adress</th>
              <th scope="col">from date</th>
              <th scope="col">to date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele,index)=>{
                return (
                    <tr scope="row">
                        <td>{index+1}</td>
                        <td>{ele.user_name}</td>
                        <td>{ele.car_name}</td>
                        <td>{ele.user_Adress}</td>
                        <td>{ele.start_date}</td>
                        <td>{ele.end_date}</td>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>}
    </>
  );
}

export default Bookingdetails;
