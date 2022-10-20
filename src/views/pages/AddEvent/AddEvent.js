import React from "react";

const AddEvent = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const date = event.target.date.value;
    const image = event.target.image.value;
    const color = event.target.color.value;

    const all = { title, description, date, image, color };

    const url = `http://localhost:5000/volunteer`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(all),
    })
      .then(res => res.json())
      .then(data => {
        console.log("Success", data);
        alert("Successfully Add");
        event.target.reset();
      });
  };

  return (
    <div>
      <div className=" ml-20 mt-6">
        <h2 className="text-start font-bold text-xl">Add Event</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="justify-center mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="h-64 bg-gray-50 ml-12 mr-12 rounded ">
            <div className="mt-4 text-start ml-6">
              <label className=" font-bold" htmlFor="">
                Event Title
              </label>
              <br />
              <input
                className="w-96 border mt-2 pl-2 rounded focus:outline-none h-9"
                required
                type="text"
                name="title"
                id=""
                placeholder="Enter title"
              />
            </div>
            <div className="mt-4 text-start ml-6">
              <label className=" font-bold" htmlFor="">
                Description
              </label>
              <br />
              <textarea
                className="w-96 h-24 border mt-2 pl-2 rounded focus:outline-none "
                required
                type="text"
                name="description"
                id=""
                placeholder="Enter Description"
              />
            </div>
          </div>
          <div className="bg-gray-50 ml-12 mr-12 h-64 rounded">
            <div className="mt-4 text-start ml-6">
              <label className="font-bold" htmlFor="">
                Event Date
              </label>
              <br />
              <input
                className="w-96 border mt-2 pl-2 rounded focus:outline-none h-9"
                type="date"
                name="date"
                data-date=""
                data-date-format="DD MMMM YYYY"
                value="2022-10-20"
              />
            </div>
            <div className="mt-4 text-start ml-6">
              <label className="font-bold" htmlFor="">
                Banner
              </label>
              <br />
              <input
                className="w-96 border mt-2 pl-2 rounded focus:outline-none h-9"
                required
                type="text"
                name="image"
                id=""
                placeholder="Enter Image"
              />{" "}
            </div>
            <div className="mt-4 text-start ml-6">
              <label className="font-bold" htmlFor="">
                Color
              </label>
              <br />
              <input
                className="w-96 border mt-2 pl-2 rounded focus:outline-none h-9"
                required
                type="text"
                name="color"
                id=""
                placeholder="Enter Color"
              />{" "}
            </div>
          </div>
        </div>
        <div className="text-end  ">
          <input
            className="bg-blue-500 cursor-pointer rounded text-white w-1/12 mr-12"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
