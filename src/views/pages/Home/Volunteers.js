import React, { useEffect, useState } from "react";
import Volunteer from "./Volunteer";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/volunteer";
    fetch(url)
      .then(res => res.json())
      .then(data => setVolunteers(data));
  }, []);
  console.log(volunteers);

  return (
    <div className="grid grid-cols-1 p-16 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
      {volunteers.map(volunteer => (
        <Volunteer key={volunteer._id} volunteer={volunteer} />
      ))}
    </div>
  );
};

export default Volunteers;
