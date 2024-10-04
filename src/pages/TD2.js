import React, { useState, useEffect } from 'react';
import axios from 'axios';


import TD2components from '../components/TD2component.js';

const TD2 = () => {
    const [teachers, setTeachers] = useState([]);
    const [classes, setClasses] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [teachersRes, classesRes, subjectsRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/teachers'),
                    axios.get('http://localhost:5000/api/classesList'),
                    axios.get('http://localhost:5000/api/subjectList'),
                ]);
                setTeachers(teachersRes.data);
                setClasses(classesRes.data);
                setSubjects(subjectsRes.data);
            } catch (error) {
                setError('Failed to fetch data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddTeacher = async (name, email, password, subjectId, classId) => {
        try {
            await axios.post('http://localhost:5000/api/teachers', { name, email, password, subjectId, classId });
            setTeachers(prev => [...prev, { name, email, subjectId, classId }]); // Update state without fetching again
        } catch (error) {
            setError('Failed to add teacher');
        }
    };

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            
            
            <TD2components teachers={teachers} classes={classes} /> 
        </div>
    );
};

export default TD2;
