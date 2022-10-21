import React from "react";
import logo from "../../../../assets/logos/Group 1329.png";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "./../../../../firebase.init";

const Signup = () => {
  const navigate = useNavigate();

  const [updateProfile, updating] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading || updating) {
    return <h3>Loading..</h3>;
  }

  const handleSignupClicked = async event => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const description = event.target.description.value;
    // const organize = event.target.organize.value;

    console.log(name, email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
  };

  return (
    <div className="grid items-center h-full -mt-2 justify-items-center">
      <div className="grid items-center justify-items-center">
        <img className="w-2/12" src={logo} alt="" />
        <div className="mt-4 bg-white border border-gray-300 rounded w-80">
          <form onSubmit={handleSignupClicked}>
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
                name="organize"
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
