import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Students from "../assets/img1.png";

const AddStudentForm = ({ classes, onStudentAdded }) => {
    const [name, setName] = useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [address, setAddress] = useState('');
    const [classId, setClassId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        onStudentAdded(name,email,password, address, classId);
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
                     <label htmlFor='email' className='block text-l font-medium text-black'>Student Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                    />
                    <label htmlFor='password' className='block text-l font-medium text-black'>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        required
                    />
                     <label htmlFor='address' className='block text-l font-medium text-black'>Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="address"
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


export default AddStudentForm;