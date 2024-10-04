import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Teachers from "../assets/img3.png";
const AddTeacherForm=({classes,subjects,onTeacherAdded})=>{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[classId,setClassId]=useState();
    const [subjectId,setSubjectId]=useState();
    
    const[nameError,setNameError]=useState('');
    
    const handleSubmit=(e)=>
    {
    e.preventDefault();
    if(!name.trim()){
        setNameError('Teacher name should not empty');
     }
    setNameError('');   
   

    onTeacherAdded(name,email,password, subjectId, classId);
    
    setName('');
    setSubjectId('');
    setClassId('');
  }
    return(
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
                 <label htmlFor="email" className="block text-l font-medium text-black">Teacher Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    
                />
                 <label htmlFor="password" className="block text-l font-medium text-black">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    
                />
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
    )
}
export default AddTeacherForm;
