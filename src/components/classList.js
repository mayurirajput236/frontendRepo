
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
const ClassList=({classes,fetchClasses,setIsAddingClass})=>{
 
    const handleDeleteClass = async (classId) => {
        console.log("the class id", classId);
        try {

            await axios.delete(`http://localhost:5000/api/classes/${classId}`);
            fetchClasses();
        } catch (error) {
            console.error('Failed to delete class:', error);
        }
    };

 useEffect(() => {
        console.log(classes, 'classes');
    }, [classes])
   

    return(
        <div className="container mx-auto mt-5  h-60">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
                <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Class ID</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Class Name</th>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        onClick={() => setIsAddingClass(true)}
                    >
                        Add Class
                    </button>
                </tr>
            </thead>
            <tbody>
                {classes.map((classItem, rowIndex) => (
                    <tr key={classItem.id} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                        <td className="border border-gray-300 px-4 py-2 text-l">{classItem.id}</td>
                        <td className="border border-gray-300 px-4 py-2 text-l">{classItem.className}</td>
                        <button
                            className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            onClick={() => handleDeleteClass(classItem.id)}
                        >
                            Delete
                        </button>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default ClassList;