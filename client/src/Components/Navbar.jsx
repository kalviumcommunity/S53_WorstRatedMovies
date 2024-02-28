import React from 'react'
import Cookies from 'js-cookie'; 
// import theatre from 'client\src\assets\theatre.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const handleLogout = () => {
    Cookies.remove('username');
    // Cookies.remove('token')
    console.log("Logged out");
    // notify()
  };
  return (
    <>
   {/* component */}
      <div className="flex flex-wrap place-items ">
        <section className="relative mx-auto" >
          {/* navbar */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-2xl font-bold font-heading title uppercase" href="#">
                {/* <img className="h-9" src="logo.png" alt="logo"> */}
                WorstRatedMovies
              </a>
              {/* Nav Links */}


              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-10">
                <Link to="/">
                
                <li><a className="hover:text-gray-200" href="#">Home</a></li>
                </Link>
              <Link to='/post'>
              
                <li><a className="hover:text-gray-200" href="#">Add</a></li>
              </Link>

              <Link to='/filter'>
                <li><a className="hover:text-gray-200" href="#">Filter</a></li>
              </Link>
                {/* <li><a className="hover:text-gray-200" href="#">Sign in</a></li> */}
              </ul>
              {/* Header Icons */}
              <div className="hidden xl:flex items-center space-x-5 ">
                    <div>
                    <ul className='flex flex-row w-[14vw] justify-between mr-[4vw] ' >
        <Link to={"/Signup"} >
        
        <li className='cursor-pointer'>Sign up</li>
        </Link>

        <Link to={"/Signin"} >
        <li className='cursor-pointer'>Sign in</li>
        </Link>
        <li className='cursor-pointer' onClick={() => {
              if (window.confirm("Are you sure you want to Signout?")) {
                handleLogout();
              }
            }}>Sign out</li>
        {/* <li>Log Out< /li> */}
      </ul>
                    </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
  
      {/* <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg" alt="twitter logo"/>
          </a>
        </div>
      </div> */}
    


    </>
  )
}

export default Navbar


