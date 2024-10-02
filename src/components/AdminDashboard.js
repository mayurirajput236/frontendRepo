
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaTachometerAlt, FaChalkboardTeacher, FaUserGraduate, FaSchool, FaSignOutAlt } from 'react-icons/fa';
import { MdSubject } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
const AdminDashboard = () => {

    return (
        <div className="flex h-screen overflow-hidden p-6 ">
            <nav className="bg-slate-600 w-64 p-6 shadow-md rounded-lg">
                <h2 className='text-3xl text-white font-bold mb-4 mt-2'> <FaSchool className='mt-4 ml-20' />SCHOOL</h2>
                <hr class="border-white dark:border-white"></hr>
                <ul className="flex flex-col space-y-4 space-x-1 border-gray-700 text-white">
                    <li>
                        <Link
                            className="flex items-center p-2 hover:bg-slate-500 hover:scale-110 transition text-white  rounded text-xl  no-underline "
                            to="/dashboard"
                        >
                            <FaTachometerAlt className="mr-5"  /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center p-2  hover:bg-slate-500 hover:text-white hover:scale-110 transition rounded text-xl text-white no-underline"
                            to="/dashboard/teachers"
                        >
                            <FaChalkboardTeacher className="mr-5" /> Teachers
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center p-2  hover:bg-slate-500 hover:text-white hover:scale-110 transition rounded text-xl text-white no-underline"
                            to="/dashboard/students"
                        >
                            <FaUserGraduate className="mr-5" /> Students
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center p-2  hover:bg-slate-500 hover:text-white hover:scale-110 transition rounded text-xl text-white no-underline"
                            to="/dashboard/classes"
                        >
                            <FaSchool className="mr-5" /> Classes
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center p-2  hover:bg-slate-500 hover:text-white hover:scale-110 transition rounded text-xl text-white no-underline"
                            to="/dashboard/subject"
                        >
                            < MdSubject className="mr-5" /> Subjects
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center p-2  hover:bg-slate-500 hover:text-white hover:scale-110 transition rounded text-xl text-white no-underline"
                            to="/dashboard/notice"
                        >
                            < IoIosNotifications className="mr-5" /> Notice
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center p-2  hover:bg-slate-500 hover:text-white hover:scale-110 transition rounded text-xl text-white no-underline"
                            to="/dashboard/logout"
                        >
                            <FaSignOutAlt className="mr-5" /> Logout
                        </Link>
                    </li>

                </ul>
            </nav>
            <main className="flex-grow p-4 ml-54 bg-slate-100 overflow-auto">
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
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search student Teachers..." required />
                        </div>
                    </form>
                    <button type="button" className=" flex item-center bg-white text-xl font-semibold text-slate-600 px-4 py-2 rounded-full hover:bg-black-600 transition transform transition-transform duration-300 hover:scale-105"><CgProfile className='mt-1 mr-1'/>
                        Profile
                    </button>
                </div>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminDashboard;

