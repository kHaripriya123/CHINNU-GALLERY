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
          <img src={logo} className=" w-44 pb-6" alt="logo" />
        </div>
        <div className="Nav-Items py-4">
          <ul className="flex">
            <Button color="red">color red</Button>
            <li className="px-4 font-bold">HOME</li>

            <li className="px-4 underline blue-500 font-bold "><Link to="Contact">CONTACT</Link></li>
            <li className="px-4 font-bold">CART</li>
            <li className="px-4 underline blue-500 font-bold"><Link to="IPLTABLE">IPLTABLE</Link></li>
            <li className="px-4 underline blue-500 font-bold "><Link to="ITCities">ITCITIES</Link> </li>
            <button className="bg-indigo-700 rounded-lg px-1 font-bold" onClick={handleSignOut}>SIGN OUT</button>
          </ul>

        </div>
      </div>

    </>
  )
}
export default Header;

