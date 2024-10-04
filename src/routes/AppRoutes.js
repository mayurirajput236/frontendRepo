
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from '../pages/MainPage.js'
import Login from '../pages/Login.js';
import AdminDashboard from '../pages/AdminDashboard.js';
import TeacherDashboard  from '../pages/TeacherDashboard.js';
import StudentDashboard from '../pages/StudentDashboard.js';
import Subject from '../pages/Subject.js';
import Notice from '../pages/Notice.js'
import Dashboard  from '../pages/Dashboard.js';
import CombinedClassDashboard from '../pages/ClassDashboard.js';
import Logout from '../pages/Logout.js';
import TeacherRegister from '../pages/TeacherRegister.js';
import StudentRegister from '../pages/StudentRegister.js';
import NewTeacher from '../pages/NewTeacher.js';
import TeacherHome from '../pages/TeacherHome.js';
import TD1 from '../pages/TD1.js'
import TD2 from '../pages/TD2.js'
import TD3 from '../pages/TD3.js'
import TeacherProfile from '../pages/TeacherProfile.js';
const AppRoutes=()=>{
    return(
        <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/teacherRegister' element={<TeacherRegister/>}></Route>
                <Route path='/studentRegister' element={<StudentRegister/>}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<AdminDashboard />}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="teachers" element={<TeacherDashboard />} />
                     <Route path="students" element={<StudentDashboard />} />
                    <Route path="classes" element={<CombinedClassDashboard />} />
                    <Route path="subject" element={<Subject />} />
                    <Route path="notice" element={<Notice />} />
                    <Route path="logout" element={<Logout /> } />
                   
                </Route>
                <Route path="/newTeacher" element={<NewTeacher></NewTeacher>}>
                       <Route path='/newTeacher' element={<TeacherHome></TeacherHome>}></Route>
                       <Route path='teacherprofile' element ={<TeacherProfile/>}/>
                       <Route path="newteachers" element={<TD1/>} />
                       <Route path="newclasses" element={<TD2/>} />
                       <Route path="newsubject" element={<TD3/>} />
                       <Route path="logout" element={<Logout /> } />
                </Route>

            </Routes>
    )
}

export default AppRoutes;