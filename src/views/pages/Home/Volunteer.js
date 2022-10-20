import React from "react";

const Volunteer = props => {
  const { title, description, date, image, color } = props.volunteer;

  console.log(title);
  return (
    <div className="bg-white border-gray-200 transition transform duration-500 hover:shadow-lg hover:scale-100 rounded  relative">
      <img
        className=" mx-auto transform transition duration-300 hover:scale-105"
        src={image}
        alt=""
      />
      <div className="">
        <h3
          className="flex justify-center items-center rounded h-16 -mt-4 text-xl text-white"
          style={{ backgroundColor: color }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Volunteer;
