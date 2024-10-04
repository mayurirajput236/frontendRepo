import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
const AdminDashboard = () => {

    return (
        <div className="flex h-screen overflow-hidden p-6 ">
            <Navbar></Navbar>
            <main className="flex-grow p-4 ml-54 bg-slate-100 overflow-auto">
                <Header></Header>
               
                <Outlet />
            </main>
        </div>
    );
};

export default AdminDashboard;

 