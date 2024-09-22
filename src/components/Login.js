import { useRef, useState } from "react";
import Validate from "./Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from "./Header";

import {
  Card,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  //const [user , setUser] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = Validate(email.current.value, password.current.value);

    console.log(message);

    setErrorMessage(message);

    if (!isSignIn) {

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
          // setUser(user);
          //console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

    else {

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          //console.log(user);
          //setUser(user);
          navigate("/");


          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }

  }


  const toggleSignIn = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className="">
      <div>

        <Header />

      </div>

      <div className="w-3/12 mx-auto rounded-3xl">
        <Card shadow={false}>
          <Typography variant="h4" className="text-customPurple">
            {!isSignIn ? "SIGN UP" : "SIGN IN"}
          </Typography>

          <form onSubmit={(e) => e.preventDefault()} className="mt-4 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">

              {!isSignIn && (
                <div>
                  <Typography variant="h6" color="black" className="-mb-3 pb-5">
                    Your FullName
                  </Typography>
                  <Input inputRef={fullName}
                    size="lg"
                    placeholder="fullname"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              )}


              <Typography variant="h6" color="black" className="-mb-3">
                Your Email
              </Typography>
              <Input inputRef={email}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="black" className="-mb-3">
                Password
              </Typography>
              <Input inputRef={password}
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <p className="font-bold text-red-700">{errorMessage}</p>
            <Button className="mt-6 fullWidth bg-customPurple" onClick={handleButtonClick}>
              {!isSignIn ? "SIGN UP" : "SIGN IN"}
            </Button>

            <Typography color="black" className="mt-4 text-center font-bold cursor-pointer " onClick={toggleSignIn}>
              {!isSignIn ? "Already a registered user? SIGN IN" : "Are you a new user? SIGN UP"}
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  )
}
export default Login;