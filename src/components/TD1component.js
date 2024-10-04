import React, { useState, useEffect } from 'react';
import axios from 'axios';



// const TD1component = ({ classes,subjects, teachers}) => {
//     return (
//         <div className="container mx-auto mt-5  w-80 h-60">
//             <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
//                 <thead className="bg-gray-200">
//                     <tr>
//                         <th className="border border-gray-300 px-4 py-2 text-left">Teacher ID</th>
//                         <th className="border border-gray-300 px-4 py-2 text-left">Teacher Name</th>
//                         <th className="border border-gray-300 px-4 py-2 text-left">Subject Name</th>
//                         <th className="border border-gray-300 px-4 py-2 text-left">Class Name</th>
//                         <th className="border border-gray-300 px-4 py-2 text-left">
                            
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {teachers.map((teacher, rowIndex) => {
//                         const className = classes.find(cls => cls.id === teacher.classId)?.className || 'N/A';
//                         const subjectName = subjects.find(sub => sub.id === teacher.subjectId)?.SubjectName || 'N/A';
//                         console.log(`Teacher ID: ${teacher.id}, Class ID: ${teacher.classId}, Subject ID: ${teacher.subjectId}`);
//                         console.log(`Class Name: ${className}, Subject Name: ${subjectName}`);
//                         return (
//                             <tr key={teacher.id} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
//                                 <td className="border border-gray-300 px-4 py-2">{teacher.id}</td>
//                                 <td className="border border-gray-300 px-4 py-2">{teacher.name}</td>
//                                 <td className="border border-gray-300 px-4 py-2">{subjectName}</td>
//                                 <td className="border border-gray-300 px-4 py-2">{className}</td>
                                
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
const TD1component = ({ classes, subjects, teachers }) => {
    return (
        <div className="container mx-auto mt-5">
            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Teacher ID</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Teacher Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Subject Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Class Name</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher, rowIndex) => {
                        const className = classes.find(cls => cls.id === teacher.classId)?.className || 'N/A';
                        const subjectName = subjects.find(sub => sub.id === teacher.subjectId)?.SubjectName || 'N/A';

                        return (
                            <tr key={teacher.id} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className="border border-gray-300 px-4 py-2">{teacher.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{teacher.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{subjectName}</td>
                                <td className="border border-gray-300 px-4 py-2">{className}</td>
                                
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TD1component;


