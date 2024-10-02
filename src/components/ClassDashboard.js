

import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';

import { Box, Stack, TextField } from "@mui/material";
import { Card, CardBody, CardTitle, CardText, Button, Container, Row, Col } from 'reactstrap';
import styled from "styled-components";
import { BlueButton } from "../components/BlueButton";
import Classroom from "../assets/classroom.png";

const CombinedClassDashboard = () => {
    const [classes, setClasses] = useState([]);
    const [className, setClassName] = useState('');
    const [classError, setClassError] = useState('');
    const [error, setError] = useState(null);
    const [isAddingClass, setIsAddingClass] = useState(false); // Track form visibility



    const fetchClasses = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/classesList');
            console.log(response.data);
            setClasses(response?.data)

        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    }, []);


    useEffect(() => {
        fetchClasses();
    }, [fetchClasses, isAddingClass]);

    const handleClassSubmit = async (e) => {
        e.preventDefault();
        console.log("className", className);
        if (!className.trim()) {
            setClassError('Class name cannot be empty.');
            return; // Exit the function if the validation fails
        }
        setClassError('');
        try {

            const response = await axios.post('http://localhost:5000/api/classes', { className });
            console.log(response);
            if (response.data.classStatus) {
                setClassName('');  // Reset input field
                fetchClasses();     // Refresh class list
                setIsAddingClass(false); // Close the form after submission
                setError('')

            }
            else {
                setError(response.data.Error);
            }


        } catch (err) {
            setError("class already created");
        }
    };

    const handleDeleteClass = async (classId) => {
        console.log("the class id", classId);
        try {

            await axios.delete(`http://localhost:5000/api/classes/${classId}`);
            fetchClasses();
        } catch (error) {
            console.error('Failed to delete class:', error);
        }
    };



    useEffect(() => {
        console.log(classes, 'classes');
    }, [classes])

    return (
        <Container className="mt-5 ">

            {isAddingClass ? (
                <div className='flex items-center justify-center h-full'>
                    <StyledBox align="center">
                        <Stack sx={{ alignItems: 'center', mb: 3 }}>
                            <img src={Classroom} alt="classroom" style={{ width: '80%' }} />
                        </Stack>
                        <form onSubmit={handleClassSubmit}>
                            <Stack spacing={3}>
                                
                                <select
                                    value={className}
                                    onChange={(e) => setClassName(e.target.value)}
                                    className="block w-full mt-2 mb-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="" className="text-gray-500">Choose class</option>
                                    <option value="First" className="text-gray-500">First</option>
                                    <option value="Second" className="text-gray-500">Second</option>
                                    <option value="Third" className="text-gray-500">Third</option>
                                    <option value="Fourth" className="text-gray-500">Fourth</option>
                                    <option value="Fifth" className="text-gray-500">Fifth</option>
                                    <option value="Sixth" className="text-gray-500">Sixth</option>
                                    <option value="Seventh" className="text-gray-500">Seventh</option>
                                    <option value="Eighth" className="text-gray-500">Eighth</option>
                                    <option value="Ninth" className="text-gray-500">Ninth</option>
                                    <option value="Tenth" className="text-gray-500">Tenth</option>
                                </select>

                                {classError && <div className='text-red-500'>{classError}</div>}
                                <BlueButton fullWidth size="large" variant="contained" type="submit">
                                    CREATE CLASS
                                </BlueButton>
                                {error && <div className='text-danger'>{error}</div>}
                                <Button color="secondary" onClick={() => setIsAddingClass(false)}>Cancel</Button>
                            </Stack>
                        </form>
                    </StyledBox>
                </div>
            ) : (
                <>


                    <div className="container mx-auto mt-5 bg-slate-500 h-60">
                        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Class ID</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Class Name</th>
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                        onClick={() => setIsAddingClass(true)}
                                    >
                                        Add Class
                                    </button>
                                </tr>
                            </thead>
                            <tbody>
                                {classes.map((classItem, rowIndex) => (
                                    <tr key={classItem.id} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                        <td className="border border-gray-300 px-4 py-2 text-l">{classItem.id}</td>
                                        <td className="border border-gray-300 px-4 py-2 text-l">{classItem.className}</td>
                                        <button
                                            className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                            onClick={() => handleDeleteClass(classItem.id)}
                                        >
                                            Delete
                                        </button>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>

            )}
        </Container>
    );
};

export default CombinedClassDashboard;
// const Container = styled(Box)`
//   flex: 1 1 auto;
//   align-items: center;
//   display: flex;
//   justify-content: center;
// `;

const StyledBox = styled(Box)`
    
    color:black;
    max-width: 350px;
   
    padding: 50px 3rem 50px;
    margin-top: 1rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 1px solid #ccc;
    border-radius: 4px;
`;


