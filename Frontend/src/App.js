import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/userFuctionalities/dashboard";

import Cardetails from "./components/userFuctionalities/cardetails";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/userFuctionalities/login";
import Payment from "./components/userFuctionalities/payment";
import Viewstatus from "./components/userFuctionalities/viewstatus";
import Usersignup from "./components/userFuctionalities/usersignup";
import Bookingdetails from "./components/userFuctionalities/bookingdetails";
import Ownersignup from "./components/ownerFunctionalities/ownersignup";
import OwnerDashboard from "./components/ownerFunctionalities/ownerDashboard";
import OwnerCardetails from "./components/ownerFunctionalities/ownerCardetails";
import OwnerviewStatus from "./components/ownerFunctionalities/OwnerviewStatus";
import Ownerviewhistory from "./components/ownerFunctionalities/Ownerviewhistory";
import Ownerpayment from "./components/ownerFunctionalities/Ownerpayment";
function App() {

  
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/cardetails" element={<Cardetails />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/viewhistory" element={<Viewstatus />}></Route>
          <Route path="/usersignup" element={<Usersignup />}></Route>
          <Route path="/bookinghistory" element={<Bookingdetails />}></Route>


          <Route path="/ownersignup" element={<Ownersignup />}></Route>
          <Route path="/ownerdashboard" element={<OwnerDashboard />}></Route>
          <Route path="/ownercardetails" element={<OwnerCardetails />}></Route>
          <Route path="/ownerviewstatus" element={<OwnerviewStatus />}></Route>
          <Route path="/ownerbookinghistory" element={<Ownerviewhistory />}></Route>
          <Route path="/ownerpayments" element={<Ownerpayment />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
