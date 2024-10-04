import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaTachometerAlt, FaChalkboardTeacher, FaUserGraduate, FaSchool, FaSignOutAlt } from 'react-icons/fa';
import { MdSubject } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const navItems=[
    { 
      path:'/newTeacher',
      label:'Home',
      icons:<FaHome/>
    },
    {
       path:'/newTeacher/teacherprofile',
       label:'Profile',
       icons:<CgProfile/>
    },
    {
        path:'/newTeacher/newteachers',
        label:'Teacher',
        icons:<FaChalkboardTeacher/>
    },
    
    {
        path:'/newTeacher/newclasses',
        label:'Classes',
        icons:<FaSchool/>
    },
    {
       path:'/newTeacher/newsubject',
       label:'Subjects',
       icons:<MdSubject/>
    },
   
     {
        path:'/newTeacher/logout',
        label:'Logout',
        icons:<FaSignOutAlt/>
     },
 

]

const TeacherBar=()=>{
    return(
        <nav className="bg-slate-600 w-64 p-6 shadow-md rounded-lg">
                <h2 className='text-3xl text-white font-bold mb-4 mt-2'> <LiaChalkboardTeacherSolid className='mt-4 ml-20' />TEACHER</h2>
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
 
export default TeacherBar;