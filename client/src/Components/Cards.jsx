import React from 'react';


function Cards({img,name,rating,director,date,comments}) {
  return (

  <div className='bg-black  w-[50vw] '>
       <div className="card card-side bg-[whitesmoke]  text-black w-[40vw] m-10 h-[40vh] drop-shadow-[3px_5px_6px_rgb(225,225,225,0.75)] glass overflow-hidden card1 ">
  <img src={img} alt="Movie" className='bg-cover w-[15vw]' />
  <div className=" overflow-hidden ml-4 ">

    <h2 className="card-title overflow-hidden mt-5 ">{name}</h2>
      <h2 className='overflow-hidden mt-3'>Rating: {rating}⭐</h2>
    <h3 className='overflow-hidden mt-1'>Director : {director}</h3>
    <p className='overflow-hidden mt-6'>
    {comments.map((comment, index) => (
        <li key={index}>{comment}</li>
    ))}
    </p >
    <h3 className="text-slate-400 font-semibold font-mono mt-5">
              ({date})
    </h3>
    <div className="card-actions justify-between items-center  ">
    </div>
  </div>
</div>

  </div>
  
  );
}

export default Cards;

