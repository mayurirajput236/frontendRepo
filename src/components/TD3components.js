import React from 'react';

const TD3components = ({ teachers, subjects }) => {
    return (
        
        <div className="container mx-auto mt-5">
            <h2 className="text-xl font-semibold mb-4">Subject Assing To Teachers</h2>
            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Teacher Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Subject Name</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher, rowIndex) => {
                        const subjectName = subjects.find(sub => sub.id === teacher.subjectId)?.SubjectName || 'N/A';

                        return (
                            <tr key={teacher.id} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className="border border-gray-300 px-4 py-2">{teacher.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{subjectName}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TD3components;
