import React from 'react';

function Cards() {
  return (
  <div className='bg-black h-[100vh]'>
       <div className="card card-side bg-[whitesmoke]  text-black w-[40vw] m-10 h-[40vh] drop-shadow-[3px_5px_6px_rgb(225,225,225,0.75)] glass overflow-hidden card1 ">
  <img src="https://pbs.twimg.com/media/FuTC6foaYAAcbie.jpg" alt="Movie" className='bg-cover ' />
  <div className="card-body overflow-hidden">
    <h2 className="card-title overflow-hidden">Adipurush</h2>
      <h2 className='overflow-hidden'>Rating: 3⭐</h2>
    <h3 className='overflow-hidden'>Director : Om raut</h3>
    <p className='overflow-hidden'> 
      <li>Over-reliance on visual effects</li>
      <li>poor execution of vfx</li>
      <li>Poor character development</li>
    </p>

    <span className="text-slate-400 pt-2 font-semibold font-mono overflow-hidden">
              (2023-12-02)
    </span>
    <div className="card-actions justify-between items-center  ">

      {/* <button className="btn btn-primary">Watch</button> */}
    </div>
  </div>
</div>

  </div>
  );
}

export default Cards;

