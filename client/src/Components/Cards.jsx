import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Cards({ img, name, rating,director, date, comments, onDelete, path }) {
  const navigate = useNavigate()
  function goUpdate(){
    navigate(`/update/${path}`)
  }
  return (
    <div className="bg-black  w-[50vw] ml-[4vh]">
      <div className="card card-side bg-[whitesmoke]  text-black w-[40vw] m-10 h-[40vh] drop-shadow-[3px_5px_6px_rgb(225,225,225,0.75)] glass overflow-hidden card1 ">
        <img src={img} alt="Movie" className="bg-cover w-[15vw]" />
        <div className=" overflow-hidden ml-4 ">
          <h2 className="card-title overflow-hidden mt-5 ">{name}</h2>
          <h2 className="overflow-hidden mt-3">Rating: {rating}⭐</h2>
          <h3 className="overflow-hidden mt-1">Director : {director}</h3>
          <p className="overflow-hidden mt-6">
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
            {/* {comments} */}
            {/* {description} */}
          </p>
          <h3 className="text-slate-400 font-semibold font-mono mt-5 mb-[0.5vh]">
            ({date})
          </h3>
          <div className="card-actions items-center">
          <button className="  cursor-pointer flex items-center rounded-full px-5 py-0 text-xl font-mono font-semibold text-green-600 hover:text-white border-2 border-green-600
            hover:bg-green-600 mr-[1vh]" onClick={goUpdate}>Update</button>

          <button
            className="  cursor-pointer flex items-center rounded-full px-5 py-0 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
            hover:bg-rose-600"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete?")) {
                onDelete(path);
              }
            }}
          >
            DELETE
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
