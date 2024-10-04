import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    
    const navigate = useNavigate();
    const handleLogout = () => {
       
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/dashboard');
    };

    return (
        
        <div className="m-8 w-full h-full rounded-lg ">
          <div>
            <h3 className='text-center text-xl text-black'>Are you sure you want to Logout</h3>
            <div className=' mt-6 flex flex-col  
                    items-center justify-center '>
            <button className='p-2 bg-red-600 text-black rounded-lg' onClick={handleLogout}>Logout</button>
            <button className='p-2 bg-gray-800 text-white rounded-lg' onClick={handleCancel}>Cancel</button>
            </div>
            
          </div>
        </div>
    );
};

export default Logout;

