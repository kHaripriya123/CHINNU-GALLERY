import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import logo from "../KRIYAASH.svg";
import { Button } from "@material-tailwind/react";

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

  return (

    <>
      <div className="flex justify-between">
        <div className="">
          <img src={logo} className="w-52" alt="logo"/>
        </div>
        <div className="Nav-Items py-4 mt-6">
          <ul className="flex">
            
            <li className="px-4 font-bold">HOME</li>
           
            <li className="px-4 font-bold">CART</li>
            <li className="px-4 underline blue-500 font-bold"><Link to="IPLTABLE">IPLTABLE</Link></li>
            <li className="px-4 underline blue-500 font-bold "><Link to="ITCities">ITCITIES</Link> </li>
            <button className="bg-purple-800 rounded-lg px-1 font-bold text-white mr-3" onClick={handleSignOut}>SIGN OUT</button>
          </ul>

        </div>
      </div>

    </>
  )
}
export default Header;

