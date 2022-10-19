import React from "react";
import CustomLink from "../../../../hooks/CustomLink";
import logo from "../../../../assets/logos/Group 1329.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../../firebase.init";
import { signOut } from "firebase/auth";
import { Icon } from "@iconify/react";

const Header = () => {
  const [user] = useAuthState(auth);
  // console.log("user", user);
  const handleOnSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="navbar bg-base-100">
      <div className="mt-4 ml-10 navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 "
          >
            <li>
              <CustomLink to="/home">Home</CustomLink>
            </li>

            <li>
              <CustomLink to="/donation">Donation</CustomLink>
            </li>
            <li>
              <CustomLink to="/events">Events</CustomLink>
            </li>
            <li>
              <CustomLink to="/blog">Blog</CustomLink>
            </li>
            <li>
              <CustomLink to="/addEvent">Add Event</CustomLink>
            </li>
            <li>
              <CustomLink to="/volunteerRegisterList">Volunteer</CustomLink>
            </li>
            {user ? (
              <li>
                <CustomLink onClick={handleOnSignOut}>
                  <Icon className="w-16 h-10 -ml-5" icon="uil:signout" />
                </CustomLink>
              </li>
            ) : (
              <li>
                <CustomLink to="/login">Login</CustomLink>
              </li>
            )}
          </ul>
        </div>
        <Link to="/home">
          <img src={logo} className={`w-2/12 cursor-pointer -ml-4`} alt="" />
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex navbar-end ">
        <ul className="p-0 mr-2 menu menu-horizontal ">
          <li>
            <CustomLink to="/home">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/donation">Donation</CustomLink>
          </li>
          <li>
            <CustomLink to="/events">Events</CustomLink>
          </li>
          <li>
            <CustomLink to="/blog">Blog</CustomLink>
          </li>

          {user ? (
            <li>
              <CustomLink to="/addEvent">Add Event</CustomLink>
              <CustomLink to="/volunteer">List</CustomLink>

              <CustomLink>{user?.displayName}</CustomLink>
              <CustomLink onClick={handleOnSignOut}>
                <Icon className="w-12 h-8 -ml-5" icon="uil:signout" />
              </CustomLink>
            </li>
          ) : (
            <li>
              <CustomLink to="/login">Login</CustomLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
