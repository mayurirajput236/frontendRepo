import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Container } from 'reactstrap';
import CreateClass from '../components/CreateClass';
import ClassList from '../components/classList';
import { Box, Stack } from "@mui/material";
import styled from "styled-components";

const CombinedClassDashboard = () => {
    const [classes, setClasses] = useState([]);
    const [isAddingClass, setIsAddingClass] = useState(false);

    const fetchClasses = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/classesList');
            setClasses(response.data);
        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    }, []);

    useEffect(() => {
        fetchClasses();
    }, [fetchClasses, isAddingClass]);

    return (
        <div className=' shadow h-full'>
            {isAddingClass ? (
                <div className='flex flex-col  items-center justify-center mt-9'>
                    <CreateClass fetchClasses={fetchClasses} setIsAddingClass={setIsAddingClass} />
                </div>
            ) : (
                <ClassList classes={classes} fetchClasses={fetchClasses} setIsAddingClass={setIsAddingClass} />
            )}
        </div>
    );
};

export default CombinedClassDashboard;

const StyledBox = styled(Box)`
    color: black;
    max-width: 350px;
    padding: 50px 3rem 50px;
    margin-top: 1rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 1px solid #ccc;
    border-radius: 4px;
`;


