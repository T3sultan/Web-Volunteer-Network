import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logos/Group 1329.png";

const Login = () => {
  return (
    <div className="grid items-center h-full justify-items-center">
      <img className="w-1/12" src={logo} alt="" />
      <div className="h-full mt-4 mr-2 border w-72">
        <form>
          <div className="mt-6">
            <input
              autoComplete="off"
              className="w-64 pl-2 border rounded h-9"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />{" "}
          </div>{" "}
          <br />
          <div className="my-4 -mt-2">
            <input
              autoComplete="off"
              className="w-64 pl-2 border rounded h-9"
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />
          </div>
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
    </div>
  );
};

export default Login;
