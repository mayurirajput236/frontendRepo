// import React from 'react';

// import axios from 'axios';
// import {  Outlet } from 'react-router-dom';
// import styled from 'styled-components'; 
// import Paper from '@mui/material/Paper'; 
// // import Count from 'react-countup'; 
// import { Container, Grid } from '@mui/material'; 
// import Students from "../assets/img1.png";
// import Classes from "../assets/img2.png";
// import Teachers from "../assets/img3.png";
// import { useState ,useEffect} from 'react';
// const Dashboard = () => {
//     const [numberOfStudents, setNumberOfStudents] = useState(0); 
//     const [numberOfClasses, setNumberOfClasses] = useState(0);
//     const [numberOfTeachers, setNumberOfTeachers] = useState(0); 


//     useEffect(() => {
//         const fetchDashboardData = async () => {
//             try {
//                 // Assuming these endpoints exist and return the counts
//                 const [studentsRes, classesRes, teachersRes] = await Promise.all([
//                     axios.get('http://localhost:5000/api/studentsCount'),
//                     axios.get('http://localhost:5000/api/classesCount'),
//                     axios.get('http://localhost:5000/api/teachersCount'),
//                 ]);

//                 setNumberOfStudents(studentsRes.data.count);
//                 console.log("the student count is",studentsRes.data.count);
//                 setNumberOfClasses(classesRes.data.count);
//                 setNumberOfTeachers(teachersRes.data.count);
//             } catch (error) {
//                 console.error('Error fetching dashboard data:', error);
//             }
//         };

//         fetchDashboardData();
//     }, []);

//     return (
//         <div>
//           <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//                     <Grid container spacing={3} > 
//                         <Grid item xs={12} md={3} lg={3} >
//                             <StyledPaper className="transform transition-transform duration-300 hover:scale-105">
//                                 <img src={Students} alt="Students" />
//                                 <Title>Total Students</Title>

//                              <Count>{numberOfStudents}</Count>
//                             </StyledPaper>
//                         </Grid>
//                         <Grid item xs={12} md={3} lg={3}>
//                             <StyledPaper className="transform transition-transform duration-300 hover:scale-105">
//                                 <img src={Classes} alt="Classes" />
//                                 <Title>Total Classes</Title>

//                              <Count>{numberOfClasses}</Count>
//                             </StyledPaper>
//                         </Grid>
//                         <Grid item xs={12} md={3} lg={3}>
//                             <StyledPaper className="transform transition-transform duration-300 hover:scale-105">
//                                 <img src={Teachers} alt="Teachers" />
//                                 <Title>Total Teachers</Title>

//                              <Count>{numberOfTeachers}</Count>
//                             </StyledPaper>
//                         </Grid>
//                     </Grid>
//                 </Container>
//                 <Outlet  />

//            <div className='w-full h-60 bg-white rounde-lg p-6 shadow'>
//                Notice Here
//            </div>

//         </div>


//     );
// };

// const StyledPaper = styled(Paper)`
//   padding: 16px;
//   display: flex;
//   flex-direction: column;
//   height: 200px;
//   justify-content: space-between;
//   align-items: center;
//   text-align: center;
// `;

// const Title = styled.p`
//   font-size: 1.25rem;
// `;

// const Count = styled.div`
//   font-size: calc(1.3rem + .6vw);
//   color: green;
// `;

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { Container, Grid } from '@mui/material';
import Students from "../assets/img1.png";
import Classes from "../assets/img2.png";
import Teachers from "../assets/img3.png";
import { useNotices } from './NoticeContext';

const Dashboard = () => {
    const [numberOfStudents, setNumberOfStudents] = useState(0);
    const [numberOfClasses, setNumberOfClasses] = useState(0);
    const [numberOfTeachers, setNumberOfTeachers] = useState(0);
    const { notices } = useNotices();

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

            {/* Render the Notice component and pass the addNotice function */}


            {/* Display the notices */}
            <div className='w-full h-60 bg-white rounded-lg p-6 shadow mt-4'>
                <h2 className='text-lg font-bold'>Notices</h2>
                <div>
                    {notices.length > 0 ? (
                        notices.map((notice, index) => (
                            <div key={index} className="border-b border-gray-300 py-2 text-xl font-bold">
                                {notice}
                            </div>
                        ))
                    ) : (
                        <div>No notices available</div>
                    )}
                </div>
            </div>
        </div>
    );
};

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

export default Dashboard;




// import React from 'react';
// import { useNotices } from './NoticeContext'; // Import your context

// const Dashboard = () => {
//     const { notices } = useNotices(); // Get notices from context

//     return (
//         <div>
//             {/* Your existing dashboard code... */}

//             <div className='w-full h-60 bg-white rounded-lg p-6 shadow mt-4'>
//                 <h2 className='text-lg font-bold'>Notices</h2>
//                 <div>
//                     {notices.length > 0 ? (
//                         notices.map((notice, index) => (
//                             <div key={index} className="border-b border-gray-300 py-2">
//                                 {notice}
//                             </div>
//                         ))
//                     ) : (
//                         <div>No notices available</div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
