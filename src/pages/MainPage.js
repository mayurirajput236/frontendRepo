

import React, { useState } from 'react';
import Students from "../assets/img1.png";
import Classes from "../assets/img2.png";
import Teachers from "../assets/img3.png";
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
      navigate('/login');   
    }
    const handleTeacher=()=>{
        navigate('/teacherRegister');
    }
    const handleStudent=()=>{
        navigate('/studentRegister');
    }
   return(
    <div className='flex  pt-12'>
      <div class="grid gap-x-10 gap-y-10 grid-cols-3 grid-flow-col mt-12 ml-60 ">
    <div className='row-span-6 col-span-6 bg-white-600 rounded-lg shadow transform transition-transform duration-300 hover:scale-105  '>
    <h2 className=' text-xl text-black font-bold text-center p-3'>Admin</h2>
    
    <button type="button" onClick={handleClick} class=" ml-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
  </div>
  <div className='row-span-6 col-span-6 bg-white-600 rounded-lg shadow transform transition-transform duration-300 hover:scale-105'>
  <h2 className='text-xl text-black font-bold text-center p-3'>Teacher</h2>
 
  <button type="button" onClick={handleTeacher} class=" ml-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
  </div>
  <div className='row-span-6 col-span-6 bg-white-600 rounded-lg shadow transform transition-transform duration-300 hover:scale-105'>
  <h2 className='text-xl text-black font-bold text-center p-3'>Student</h2>

  <button type="button" onClick={handleStudent} class="ml-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
  </div>
  
</div>

    </div>
   )
  
}

export default Main;
