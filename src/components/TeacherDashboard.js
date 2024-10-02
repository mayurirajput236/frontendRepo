import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Teachers from "../assets/img3.png";
const TeacherDashboard = () => {
    const [teachers, setTeachers] = useState([]);
    const [classes, setClasses] = useState([]);
    const[subjects,setSubjects]=useState([]);
    const[error,setError]=useState(null);
    const [isAddingTeacher, setIsAddingTeacher] = useState(false);

    useEffect(() => {
        
        fetchTeachers();
        fetchClasses();
        fetchSubjects();
    }, []);

    const fetchTeachers = async () => {
        const response = await axios.get('http://localhost:5000/api/teachers');
        setTeachers(response.data);
    };
    const fetchSubjects=async () =>{
        const response = await axios.get('http://localhost:5000/api/subjectList');
        console.log("my data",response);
        setSubjects(response.data);
    }
    const fetchClasses = async () => {
        const response = await axios.get('http://localhost:5000/api/classesList');
        setClasses(response.data);
    };
    
    const handleAddTeacher = async (name, subjectId, classId) => {
        await axios.post('http://localhost:5000/api/teachers', { name, subjectId, classId });
        fetchTeachers(); // Refresh the teacher list
        setIsAddingTeacher(false); // Go back to the list view
    };
  

    const handleDelete= async (teacherId)=>{
        console.log("teacher id",teacherId);
        try{
        await axios.delete(`http://localhost:5000/api/teachers/${teacherId}`);
        fetchTeachers();
        }catch{
            setError("failed to delete the teacher");
        }
    };
    return (
           
        <div>
            
            {!isAddingTeacher ? (
                <TeacherList
                    classes={classes}
                    subjects={subjects}
                    teachers={teachers}
                    onAddTeacher={() => setIsAddingTeacher(true)}                                         
                    onDelete={handleDelete} 
                />
            ) : (
                <AddTeacherForm classes={classes} subjects={subjects} onTeacherAdded={handleAddTeacher} />
            )}
        </div>
    );
};

const AddTeacherForm = ({ classes,subjects, onTeacherAdded }) => {
    const [name, setName] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const [classId, setClassId] = useState('');
    const[nameError,setNameError]=useState('');
    // const{subjectIdError,setSubjectIdError}=useState('');
    // const{classIdError,setClassIdError}=useState('');

    const handleSubmit = (e) => {
        console.log("techer name" ,name);
        console.log("subjectId",subjectId);
        console.log("classId",classId);
        e.preventDefault();
         if(!name.trim()){
            setNameError('Teacher name should not empty');
         }
        setNameError('');
       
        onTeacherAdded(name, subjectId, classId);

        setName('');
        setSubjectId('');
        setClassId('');
    };

    return (
        <div className='flex items-center justify-center  '>
            <div className='border rounded-2xl shadow-lg p-8  w-96 h- 80 bg-white-400 rounded-md mt-4'>
            <img src={Teachers} alt="Students"  className="mx-auto block" />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className="block text-l font-medium text-black">Teacher Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Teacher Name"
                        
                    />
                     {nameError && <div className='text-red-500'>{nameError}</div>}
                    <select
                        value={subjectId}
                        onChange={(e) => setSubjectId(e.target.value)}
                        
                        className="block w-full mt-2 mb-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="" className="text-gray-500">Choose Subjects</option>
                        {subjects.map((sub) => (
                            <option key={sub.id} value={sub.id}>
                                {sub.SubjectName}
                            </option>
                        ))}
                    </select>
                    <select
                        value={classId}
                        onChange={(e) => setClassId(e.target.value)}
                       
                        className="block w-full mt-2 mb-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="" className="text-gray-500">Choose Class</option>
                        {classes.map((cls) => (
                            <option key={cls.id} value={cls.id}>
                                {cls.className}
                            </option>
                        ))}
                    </select>

                    <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Add Teacher</button>
                </form>
            </div>
        </div>
    );
};


const TeacherList = ({ classes,subjects, teachers, onAddTeacher ,onDelete}) => {
    return (
        <div className="container mx-auto mt-5 bg-slate-600 w-80 h-60">
            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Teacher ID</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Teacher Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Subject Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Class Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                onClick={onAddTeacher}
                            >
                                Add Teacher
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher, rowIndex) => {
                        const className = classes.find(cls => cls.id === teacher.classId)?.className || 'N/A';
                        const subjectName = subjects.find(sub => sub.id === teacher.subjectId)?.SubjectName || 'N/A';
                        console.log(`Teacher ID: ${teacher.id}, Class ID: ${teacher.classId}, Subject ID: ${teacher.subjectId}`);
                        console.log(`Class Name: ${className}, Subject Name: ${subjectName}`);
                        return (
                            <tr key={teacher.id} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className="border border-gray-300 px-4 py-2">{teacher.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{teacher.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{subjectName}</td>
                                <td className="border border-gray-300 px-4 py-2">{className}</td>
                                <button 
                                            className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                            onClick={() => onDelete(teacher.id)}
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

export default TeacherDashboard;







