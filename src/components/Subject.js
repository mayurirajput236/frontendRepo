import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';

const SubjectDashboard = () => {

    const [subjects, setSubjects] = useState([]);
    const [subjectName, setSubjectName] = useState('');
    const [error, setError] = useState(null);
    const [isAddingSub, setAddingSub] = useState(false);
    const [subjectError, setSubjectError] = useState('');
    const fetchSubjects = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/subjectList');
            console.log(response);
            setSubjects(response.data);
        }
        catch (error) {
            console.error("error in feching data", error);
        }
    }, [])

    useEffect(() => {
        fetchSubjects();
    }, [fetchSubjects]);


    const handleSubSubmit = async (e) => {
        
        e.preventDefault();
        console.log(subjectName);
        if(!subjectName.trim()){
            setSubjectError('subject name should not empty');
            return;
        }
         setSubjectError('')
        
        try {
            const response = await axios.post('http://localhost:5000/api/subjects', { SubjectName: subjectName });
            console.log("response is", response);
            if(response.data.subjectStatus){
                setSubjectName('');
                fetchSubjects();
                setAddingSub(false);
                setError('')
            }
           else{
            setError(response.data.Error);
           }
        }
        catch (error) {
            setError("subject already created");
        }
    };
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



    return (
        <div>

            {isAddingSub ? (
                <div className='flex items-center justify-center mt-4 '>
                    <div className='border rounded-2xl shadow-lg p-8  w-96 h- 80 bg-white-400 rounded-md '>

                        <form onSubmit={handleSubSubmit}>
                            
                             <select
                                    value={subjectName}
                                    onChange={(e) => setSubjectName(e.target.value)}
                                    className="block w-full mt-2 mb-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="" className="text-gray-500">Choose Subject</option>
                                    <option value="Maths" className="text-gray-500">Maths</option>
                                    <option value="Science" className="text-gray-500">Science</option>
                                    <option value="Social Science" className="text-gray-500">Social Science</option>
                                    <option value="English" className="text-gray-500">English</option>
                                    <option value="Hindi" className="text-gray-500">Hindi</option>
                                    
                                </select>
                            {subjectError && <div className='text-red-500'>{subjectError}</div>}
                            {error && <div className='text-danger'>{error}</div>}
                            <button type="submit" className="mt-3 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Add Subject</button>
                        </form>
                    </div>
                </div>
            ) : (
                <>
                    <div className="container mx-auto mt-5 bg-slate-600 h-60">
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

                                {subjects.length > 0 ? (
                                    subjects.map((classItem, rowIndex) => (
                                        <tr key={classItem.id} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                            <td className="border border-gray-300 px-4 py-2">{classItem.id}</td>
                                            <td className="border border-gray-300 px-4 py-2">{classItem.SubjectName}</td>
                                            <button
                                                className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                                onClick={() => handleDeleteSubject(classItem.id)}
                                            >
                                                Delete
                                            </button>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" className="border border-gray-300 px-4 py-2 text-center">No subjects found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </>


            )}
        </div>
    )
}

export default SubjectDashboard;
