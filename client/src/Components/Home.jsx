import React from "react";
import collage from "../assets/collage4.png";

const Home = () => {
  return (
    <div className="containers flex px-12">
      <span
        style={{ listStyleType: "none", width: "60vw", marginTop: "8vh" }}
        className="text-7xl font-bold leading-tight uppercase"
      >
        <li>
          <h2>Discover the</h2>
          <h1>Cinematic </h1>
          <h1> Disappointments</h1>
          <h2>of the year</h2>
        </li>
        <h1 className=" text-lg text-red-700" style={{ marginTop: "20px" }}>
          Warning: Watch these movies at your own risk,
          <br /> but don't say we didn't warn you!
        </h1>
        
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mx-1">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 " >
            TRAVERSE
          </span>
     
        </button>
      </span>
      <img
        src={collage}
        alt="collage"
        style={{
          marginTop: "2vh",
          height: "93vh",
          width: "48vw",
          marginRight: "3vh",
          marginRight: "3vh",
          marginRight: "3vh",
        }}
      />
    </div>
  );
};


export default Home;
