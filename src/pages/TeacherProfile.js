import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from '../assets/profile.png'
const TeacherProfile=()=>{
    return(

        <div className='flex flex-col  items-center justify-center mt-9'>
           <img src={Profile}></img>
        </div>
    )
}

export default TeacherProfile;
