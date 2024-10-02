
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Students from "../assets/img1.png";
const StudentDashboard = () => {
    const [students, setStudent] = useState([]);
    const [classes, setClasses] = useState([]);
    const[error,setError]=useState([]);
    const [isAddingStudent, setIsAddingStudent] = useState(false);

    useEffect(() => {
        fetchStudent();
        fetchClasses();
    }, []);


    const fetchStudent = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/student');
            console.log("Response structure:", response.data);

            if (response.data.students && Array.isArray(response.data.students)) {
                setStudent(response.data.students);
            } else {
                console.error("Expected an array but got:", response.data);
                setStudent([]);
            }
        } catch (error) {
            console.error("Error fetching students:", error);
            setStudent([]);
        }
    };


    const fetchClasses = async () => {
        const response = await axios.get('http://localhost:5000/api/classesList');
        console.log(response);
        setClasses(response.data);
    };
    const handleAddStudent = async (name, address, classId) => {
        const response = await axios.post('http://localhost:5000/api/student', { name, address, classId });
        fetchStudent(); 
        setIsAddingStudent(false); 
    };
    const handleDelete=async(studentId)=>{
        console.log("student id is",studentId);
        try{
               await axios.delete(`http://localhost:5000/api/student/${studentId}`);
               fetchStudent();
        }
        catch(error){
            setError("failed to delete student");
        }
    }
    return (
        <div>
           
            {!isAddingStudent ? (
                <>
                    <StudentList
                        students={students}
                        classes={classes}
                        onStudentAdded={() => setIsAddingStudent(true)}
                        onDelete={handleDelete}
                    />
                </>
            ) : (
                <AddStudentForm classes={classes} onStudentAdded={handleAddStudent} />
            )}
        </div>
    );
};
const AddStudentForm = ({ classes, onStudentAdded }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [classId, setClassId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        onStudentAdded(name, address, classId);
        setName('');
        setAddress('');
        setClassId('');

    };

    return (
        <div className='flex items-center justify-center mt-4 '>
            <div className='border rounded-2xl shadow-lg p-8 w-96 bg-white-400 rounded-md '>
            <img src={Students} alt="Students"  className="mx-auto block" />
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name' className='block text-l font-medium text-black'>Student Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Student Name"
                        required
                    />
                    <label htmlFor='name' className='block text-l font-medium text-black'>Student Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required
                    />

                    <select value={classId}
                        onChange={(e) => setClassId(e.target.value)}
                        required className='block w-full mt-2 mb-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500'>
                        <option value="">Choose Class</option>
                        {classes.map((cls) => (
                            <option key={cls.id} value={cls.id}>
                                {cls.className}
                            </option>
                        ))}
                    </select>
                    <button type="submit" className='w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200'>Add Student</button>
                </form>
            </div>
        </div>
    );
};

const StudentList = ({ students, classes, onStudentAdded ,onDelete}) => {
    if (!Array.isArray(students)) {
        return <p>No students available.</p>;
    }
    return (

        <div className="container mx-auto mt-5 bg-slate-600 h-60">
            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Student ID</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Student Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Class Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                onClick={onStudentAdded}
                            >
                                Add Student
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((stu, rowIndex) => {
                        const className = classes.find(cls => cls.id === stu.classId)?.className || 'N/A';
                        return (
                            <tr key={stu.id} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className="border border-gray-300 px-4 py-2">{stu.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{stu.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{stu.address}</td>
                                <td className="border border-gray-300 px-4 py-2">{className}</td>
                                <button 
                                            className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                            onClick={() => onDelete(stu.id)}
                                        >
                                            Delete
                                        </button>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};




export default StudentDashboard;
