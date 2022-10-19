import React from "react";
import logo from "../../../../assets/logos/Group 1329.png";

const Signup = () => {
  return (
    <div className="grid items-center h-full -mt-2 justify-items-center">
      <div className="grid items-center justify-items-center">
        <img className="w-2/12" src={logo} alt="" />
        <div className="mt-4 bg-white border border-gray-300 rounded w-80">
          <form>
            <div className="">
              <input
                className="w-64 border-b border-gray-300 focus:outline-none h-9"
                type="text"
                name="name"
                id=""
                required
                placeholder="Full Name"
              />
            </div>
            <br />
            <div className="-mt-2">
              <input
                className="w-64 border-b border-gray-300 focus:outline-none h-9"
                type="email"
                name="email"
                id=""
                required
                placeholder="Username or Email"
              />
            </div>
            <div className="mt-2">
              <input
                className="w-64 border-b border-gray-300 focus:outline-none h-9"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                required
              />
            </div>
            <div className="mt-2">
              <input
                className="w-64 border-b border-gray-300 focus:outline-none h-9"
                type="password"
                name="confirm-password"
                id=""
                placeholder="Confirm-Password"
                required
              />
            </div>
            <div className="mt-2">
              <input
                className="w-64 border-b border-gray-300 focus:outline-none h-9"
                type="text"
                name="description"
                id=""
                placeholder="Description"
                required
              />
            </div>
            <div className="mt-2">
              <input
                className="w-64 border-b border-gray-300 focus:outline-none h-9"
                type="text"
                name="text"
                id=""
                placeholder="Organize books at the library"
                required
              />
            </div>
            <div className="my-4 mt-2 ">
              <input
                className="w-64 text-white bg-blue-400 cursor-pointer h-9"
                type="submit"
                value="Registration"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
