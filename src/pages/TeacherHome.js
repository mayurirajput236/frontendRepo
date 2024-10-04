import React, { useState, useEffect } from 'react';

import { useNotices } from '../MyContext.js';
import GridContainer from '../components/GridContainer';
import NoticeComponent from '../components/NoticeComponents';
import TeacherHomePage from '../components/TeacheHome.js';
const Dashboard = () => {
    
    const { notices } = useNotices();

    return (
        <div>
           <TeacherHomePage></TeacherHomePage>
           
        </div>
    );
};



export default Dashboard;
