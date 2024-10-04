import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Students from "../assets/img1.png";


const StudentList = ({ students, classes, onStudentAdded ,onDelete}) => {
    if (!Array.isArray(students)) {
        return <p>No students available.</p>;
    }
    return (

        <div className="container mx-auto mt-5 h-60">
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
export default StudentList;