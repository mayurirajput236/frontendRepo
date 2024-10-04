import React from 'react';
import { Outlet } from 'react-router-dom';

import Teacherbar from '../components/TeacherBar';
import Header from '../components/Header';
const NewTeacher = () => {

    return (
        <div className="flex h-screen overflow-hidden p-6 ">
            <Teacherbar></Teacherbar>
            <main className="flex-grow p-4 ml-54 bg-slate-100 overflow-auto">
                <Header></Header>
               
                <Outlet />
            </main>
        </div>
    );
};

export default NewTeacher;