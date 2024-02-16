import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from 'axios';



function Listings() {
    const [data,setdata] = useState([])

useEffect(()=>{
    fetchData();

},[])


const fetchData = async()=>{
    axios.get("http://localhost:3000/api")
    .then((res)=>{
        console.log(res);
        setdata(res.data.data)
        console.log(res.data.data)
    })
    .catch((err)=>{
        console.error(err);
    })


}

  return (
 

        <div className='bg-black grid grid-cols-2'>
        {data.length!=0 && data.map((e,i)=>(
            <Cards key={i} name={e.MovieName} img={e.ImgLink} rating={e.Rating} director={e.Director} date={e.Date} comments={e.Comments}/>
        ))}
        </div>

  
  )
}

export default Listings