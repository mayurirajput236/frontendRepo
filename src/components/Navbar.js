import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaTachometerAlt, FaChalkboardTeacher, FaUserGraduate, FaSchool, FaSignOutAlt } from 'react-icons/fa';
import { MdSubject } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

const navItems=[
    { path:'/dashboard',
      label:'Dashbord',
      icons:<FaTachometerAlt/>
    },
    {
        path:'/dashboard/teachers',
        label:'Teacher',
        icons:<FaChalkboardTeacher/>
    },
    {
        path:'/dashboard/students',
        label:'Students',
        icons:<FaUserGraduate/>
    },
    {
        path:'/dashboard/classes',
        label:'Classes',
        icons:<FaSchool/>
    },
    {
       path:'/dashboard/subject',
       label:'Subjects',
       icons:<MdSubject/>
    },
    {
        path:'/dashboard/notice',
        label:'Notice',
        icons:<IoIosNotifications/>
     },
     {
        path:'/dashboard/logout',
        label:'Logout',
        icons:<FaSignOutAlt/>
     },
 

]

const Navbar=()=>{
    return(
        <nav className="bg-slate-600 w-64 p-6 shadow-md rounded-lg">
                <h2 className='text-3xl text-white font-bold mb-4 mt-2'> <FaSchool className='mt-4 ml-20' />SCHOOL</h2>
                <hr class="border-white dark:border-white"></hr>
                <ul className="flex flex-col space-y-4 space-x-1 border-gray-700 text-white">
                   {navItems.map((item,index)=>
                    <li key={index}>
                        <Link
                            className="flex items-center p-2 hover:bg-slate-500 hover:scale-110 transition text-white  rounded text-xl  no-underline "
                            to={item.path}
                        >
                            {item.icons}
                            <span className="ml-5">{item.label}</span>
                        </Link>
                    </li>)}
                    </ul>
            </nav>
    )
}
 
export default Navbar;