

import React, { useState, useEffect } from 'react';

import { useNotices } from '../MyContext.js';
import GridContainer from '../components/GridContainer';
import NoticeComponent from '../components/NoticeComponents';
const Dashboard = () => {
    
    const { notices } = useNotices();

    return (
        <div>
            <GridContainer></GridContainer>
            <NoticeComponent></NoticeComponent>
           
        </div>
    );
};



export default Dashboard;




