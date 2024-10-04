

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { Container, Grid } from '@mui/material';
import Students from "../assets/img1.png";
import Classes from "../assets/img2.png";
import Teachers from "../assets/img3.png";



const GridContainer=()=>{
    const [numberOfStudents, setNumberOfStudents] = useState(0);
    const [numberOfClasses, setNumberOfClasses] = useState(0);
    const [numberOfTeachers, setNumberOfTeachers] = useState(0);
   

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [studentsRes, classesRes, teachersRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/studentsCount'),
                    axios.get('http://localhost:5000/api/classesCount'),
                    axios.get('http://localhost:5000/api/teachersCount'),
                ]);

                setNumberOfStudents(studentsRes.data.count);
                setNumberOfClasses(classesRes.data.count);
                setNumberOfTeachers(teachersRes.data.count);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchDashboardData();
    }, []);



    return (
        <div>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper className="transform transition-transform duration-300 hover:scale-105">
                            <img src={Students} alt="Students" />
                            <Title>Total Students</Title>
                            <Count>{numberOfStudents}</Count>
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper className="transform transition-transform duration-300 hover:scale-105">
                            <img src={Classes} alt="Classes" />
                            <Title>Total Classes</Title>
                            <Count>{numberOfClasses}</Count>
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper className="transform transition-transform duration-300 hover:scale-105">
                            <img src={Teachers} alt="Teachers" />
                            <Title>Total Teachers</Title>
                            <Count>{numberOfTeachers}</Count>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </Container>

           </div> 
            
    );
}

const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.25rem;
`;

const Count = styled.div`
  font-size: calc(1.3rem + .6vw);
  color: green;
`;   

export default GridContainer;

