import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import logo from "../KRIYAASH.svg";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();


  const handleSignOut = () => {


    signOut(auth).then(() => {
      // Sign-out successful.

      navigate("/login");

    }).catch((error) => {
      // An error happened.

    });
  }

    useEffect(()=> {

         onAuthStateChanged(auth, (user) => {
        if (user) {
    
          //navigate("/");
        //const uid = user.uid;
   
         } else {
          // User is signed out
            navigate("/login")
            }
           });
          },[])

  return (

    <>
      <div className="flex justify-between shadow-md">
        <div className="">
          <img src={logo} className="w-28" alt="logo"/>
          </div>
        <div className="Nav-Items py-4 mt-6">
          <ul className="flex">
            
            <li className="px-4 font-bold text-customPurple">HOME</li>
            <li className="px-4 font-bold text-customPurple">CART</li>
            <li className="px-4 underline blue-500 font-bold text-customPurple"><Link to="IPLTABLE">IPLTABLE</Link></li>
            <li className="px-4 underline blue-500 font-bold text-customPurple"><Link to="ITCities">ITCITIES</Link> </li>
            <li className="px-4 underline blue-500 font-bold text-customPurple"><Link to="userform">USERFORM</Link> </li>
            <li className="px-4 underline blue-500 font-bold text-customPurple"><Link to="usertable">USERTABLE</Link> </li>
            <button className="bg-customPurple rounded-lg px-1 font-bold text-white mr-3" onClick={handleSignOut}>SIGN OUT</button> 
         
          </ul>
        
        </div>
       
      </div>

    </>
  )
}
export default Header;

