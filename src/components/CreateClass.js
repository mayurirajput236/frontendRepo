import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';


import Classroom from "../assets/classroom.png";

const CreateClass = ({fetchClasses,setIsAddingClass}) => {

    const [className, setClassName] = useState('');
    const [classError, setClassError] = useState('');
    const [error, setError] = useState(null);
   

    

    const handleClassSubmit = async (e) => {
        e.preventDefault();
        console.log("className", className);
        if (!className.trim()) {
            setClassError('Class name cannot be empty.');
            return; // Exit the function if the validation fails
        }
        setClassError('');
        try {
            const response = await axios.post('http://localhost:5000/api/classes', { className });
            console.log(response);
            if (response.data.classStatus) {
                setClassName('');  // Reset input field
                fetchClasses();     // Refresh class list
                setIsAddingClass(false); // Close the form after submission
                setError('');
            } else {
                setError(response.data.Error);
            }
        } catch (err) {
            setError("class already created");
        }
    };

   

    return (
        
           
        <div className='flex items-center justify-center h-60 w-80 mt-16 '>
        <form onSubmit={handleClassSubmit}>
            <img src={Classroom} alt={Classroom} className=''></img>
            <div>
                <select
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="block w-full mt-2 mb-3 p-2 border border-gray-300 rounded-md shadow-sm"
                >
                    <option value="" className="text-gray-500">Choose class</option>
                    {/* Add options here */}
                    {['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'].map((cls) => (
                        <option key={cls} value={cls} className="text-gray-500">{cls}</option>
                    ))}
                </select>
                {classError && <div className='text-red-500'>{classError}</div>}
                <button className='w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200' type="submit">
                    CREATE CLASS
                </button>
                {error && <div className='text-danger'>{error}</div>}
                <button className='mt-4 w-full py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200' onClick={() => setIsAddingClass(false)}>Cancel</button>
            </div>
        </form>
    </div>
            
     
    );
};

export default CreateClass; 

