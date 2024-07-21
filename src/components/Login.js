import { useRef, useState } from "react";
import Validate from "./Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";



const Login = () => {
const [isSignIn, setIsSignIn] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);
const [user , setUser] = useState(null);
const navigate = useNavigate();

const fullName = useRef(null);

const Email = useRef(null);
const Password = useRef(null);

const handleButtonClick = () => {


     { !isSignIn && console.log(fullName.current.value)}
     
     console.log(Email.current.value);
     console.log(Password.current.value);

    const message =  Validate(Email.current.value, Password.current.value);

    console.log(message);


     setErrorMessage(message);

 if(!isSignIn)

createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    setUser(user);
    //navigate("/");
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..

    setErrorMessage(errorCode + "-" + errorMessage);
  });

  else

  signInWithEmailAndPassword(auth, Email.current.value, Password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    setUser(user);
   
    //navigate("/");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });


    
}


const toggleSignIn = () => {

     setIsSignIn(!isSignIn)
}
return (

<div className="">
  <div>
            
            <h1 className="justify-between font-bold px-10">CART</h1>
            
            </div>
<div className=" w-3/12 mx-auto left-0 right-0 rounded-3xl ">
            <form onSubmit={(e)=> e.preventDefault()} className="mt-20  bg-gray-300 pt-5 rounded-lg">
          
           <h1 className="mx-3 mb-3 cursor-pointer font-bold">{isSignIn ? "SIGN IN" : "SIGN UP"}</h1>
           {!isSignIn && <input ref={fullName} type= "text" placeholder="FullName" className="flex mb-3  mx-3 w-5/6 border border-black rounded-lg"/>}
          
             
              <input  ref= {Email} type= "text" placeholder="Email" className=" p-2 flex mb-3  mx-3 w-5/6 border border-black rounded-lg"/>
              <input  ref= {Password} type= "password" placeholder="Password" className=" p-2 flex  mb-3  mx-3 w-5/6 border border-black rounded-lg"/>
              <p className="bg-red-500 mb-3 mx-3 w-5/6">{errorMessage}</p>
              <button className="bg-red-300 px-1 rounded-lg mx-3 mt-4 mb-3 font-bold " onClick={handleButtonClick}>{isSignIn ? "SIGN IN" : "SIGN UP"}</button>
              <h1 className="cursor-pointer mx-3 mt-5 mb-7 font-bold underline black " onClick={toggleSignIn}>{isSignIn ?  "New User? SIGN UP!" : "Already a Registered User? SIGN IN!"}</h1>
             
           </form>
       
            </div>

           

    
    </div>
     )
}


export default Login;