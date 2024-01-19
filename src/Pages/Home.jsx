import React from 'react'
import syngenta from "../image/Syngenta_Logo.svg.png"
import { NavLink} from 'react-router-dom';


const Home = () => {
  return (
     

    <div className="w-screen flex flex-col mt-10 p-4 gap-[60px] select-none ">
  {/* *****************************
  
  This div consist of heading of and image 
  
  ****************************/}
      <div className="flex flex-row justify-between items-center">
        {/* Heading of Webpage */}
        <p className="font-bold text-5xl ">P&S Machine Learning</p>

        {/* Syngenta Logo */}
        <img className="w-[130px] h-[60px] aspect-auto object-center " alt="card" src={syngenta} ></img>
      </div>



    
      <div className="flex flex-row gap-6 ">

      {/* *****************************
  
         Card 1 HTML
  
  ****************************/}
        <NavLink to="/dashboard">

          <div className="flex flex-col w-[300px]  p-4  shadow-xl h-[165px] gap-5 rounded-lg border-t-4 transition-transform transform hover:-translate-y-2 ">

            <div className="flex flex-row justify-between">
              <p className="font-semibold text-xl">Smart Supply</p>
              <p className="bg-[#ffc107bf] px-1 rounded-lg" >New</p>
            </div>
            <div>
              this dashboad gives the preidtcion till end of 2023 for all products per state and districts of india
            </div>

          </div>

        </NavLink>

   
  
          {/* *****************************
  
           Card 2 HTML
  
  ****************************/}
        <NavLink to="/dashboard">

          <div className="flex flex-col w-[300px]  p-4  shadow-xl h-[165px] gap-5 rounded-lg border-t-4 transition-transform transform hover:-translate-y-2 ">

            <div className="flex flex-row justify-between">
              <p className="font-semibold text-xl">Smart Supply</p>
              <p className="bg-[#ffc107bf] px-1 rounded-lg" >New</p>
            </div>
            <div>
              this dashboad gives the preidtcion till end of 2023 for all products per state and districts of india
            </div>

          </div>

        </NavLink>



      </div>


     

    </div>




  )
}

export default Home