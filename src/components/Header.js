import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";
import './Header.css';
import { IoReorderThreeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const [students, setStudent] = useState([]);
    const[value,setValue]=useState('');
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate=useNavigate();

    const fetchStudent = async () => {
        const response = await axios.get('http://localhost:5000/api/student/list');
        console.log("the list response is", response);
        setStudent(response.data.student);
    };

    useEffect(() => {
        fetchStudent();

    }, []);
    //function to handle input changes
    const handleInputChange=(e)=>{
        setValue(e.target.value);
        setDropdownOpen(e.target.value.length>0);
    }
    //filter student bases on search

    const filterStudents=students.filter(stu=>
        stu.name.toLowerCase().includes(value.toLowerCase()),
    );
   const handleStudentSelect=(name)=>{
      setValue(name);
      setDropdownOpen(false);
      navigate('/dashboard/students')

   }

    return (
        <div className="p-2 h-20 bg-white text-white shadow rounded-lg flex items-center justify-evenly">

            <h1 className="text-xl p-4 font-bold text-slate-600">Welcome To School Management System</h1>

            <form class="flex items-center max-w-sm mx-auto">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input  value={value}  
                    onChange={handleInputChange}
                    type="text" id="simple-search" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search student Teachers..."
                    required />
                    {isDropdownOpen && filterStudents.length > 0 && (
                        <ul className="absolute z-10 bg-white border border-gray-300 w-full max-h-40 overflow-y-auto rounded-lg shadow-lg mt-1">
                            {filterStudents.map((stu, index) => (
                                <li
                                    key={index}
                                    className="p-2 hover:bg-gray-100 cursor-pointer text-black"
                                    onClick={() => handleStudentSelect(stu.name)}
                                >
                                    {stu.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                
            </form>
            <button type="button" className=" flex item-center bg-white text-xl font-semibold text-slate-600 px-4 py-2 rounded-full hover:bg-black-600 transition transform transition-transform duration-300 hover:scale-105"><CgProfile className='mt-1 mr-1' />
                Profile
            </button>
        </div>
    )
}

export default Header; 