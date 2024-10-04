import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';


const SubjectList=({subjects,fetchSubjects,setAddingSub})=>{
   console.log("subject is",subjects);
    const[error,setError]=useState('');
    const handleDeleteSubject = async (subjectId) => {
        console.log("the subject id is", subjectId);
        try {
            await axios.delete(`http://localhost:5000/api/subjects/${subjectId}`);
            fetchSubjects();

        } catch (error) {
            setError("failed to delete the subject");
        }
    };

    useEffect(() => {
        console.log(subjects, 'subjects');
    }, [subjects])
     
    return(
   
        <div className="container mx-auto mt-5  h-60">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
                <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Subject ID</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Subject Name</th>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        onClick={() => setAddingSub(true)}
                    >
                        Add Subject
                    </button>
                </tr>
            </thead>
            <tbody>

              

            {subjects.map((classItem, rowIndex) => (
                    <tr key={classItem.id} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                        <td className="border border-gray-300 px-4 py-2 text-l">{classItem.id}</td>
                        <td className="border border-gray-300 px-4 py-2 text-l">{classItem.SubjectName}</td>
                        <button
                            className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            onClick={() => handleDeleteSubject(classItem.id)}
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
export default SubjectList;