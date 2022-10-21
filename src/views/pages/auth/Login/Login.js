import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logos/Group 1329.png";
import google from "../../../../assets/google_.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "./../../../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // let errorElement;

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <h3>loading ...</h3>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  // if (!error) {
  //   errorElement = <p className="text-red-400">Error: {error?.message}</p>;
  // }

  const handleOnSignIn = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="grid items-center h-full justify-items-center">
      <img className="w-1/12" src={logo} alt="" />
      <div className="h-full mt-4 bg-white border rounded w-72">
        <form onSubmit={handleOnSignIn}>
          <div className="mt-6">
            <input
              ref={emailRef}
              required
              autoComplete="off"
              className="w-64 pl-2 border rounded focus:outline-none h-9"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />{" "}
          </div>{" "}
          <br />
          <div className="my-2 -mt-3">
            <input
              ref={passwordRef}
              autoComplete="off"
              className="w-64 pl-2 border rounded focus:outline-none h-9"
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />
          </div>
          <div className="my-4 mt-3">
            <input
              className="w-64 pl-2 text-white bg-blue-400 border rounded cursor-pointer focus:outline-none h-9"
              type="submit"
              value="Login"
            />
          </div>
          {/* {errorElement} */}
          <div className="-mt-2">
            <p className="text-xs font-bold">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="text-blue-400 cursor-pointer">
                  Create an account?
                </span>{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="flex items-center h-10 mt-4 border cursor-pointer rounded-3xl w-72">
        <img className="w-6 ml-2 " src={google} alt="" />
        <div className="flex justify-center ">
          <h4 className="ml-10 text-sm ">Continue with Google</h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
