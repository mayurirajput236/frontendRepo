// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Teachers from "../assets/img3.png";
// import TeacherList from '../components/TeacherList';
// import AddTeacherForm from '../components/TeacherFrom';
// import TD1component from '../components/TD1component';
// import { teal } from '@mui/material/colors';
// const TeacherDashboard = () => {
//     const[name,setName]=useState('');
//     const[email,setEmail]=useState('');
//     const[password,setPassword]=useState('');
//     const [teachers, setTeachers] = useState([]);
//     const [classes, setClasses] = useState([]);
//     const[subjects,setSubjects]=useState([]);
//     const[error,setError]=useState(null);
//     const [isAddingTeacher, setIsAddingTeacher] = useState(false);

//     useEffect(() => {
        
//         fetchTeachers();
//         fetchClasses();
//         fetchSubjects();
//     }, []);

//     const fetchTeachers = async () => {
      
//         const response = await axios.get(`http://localhost:5000/api/teachers/${teacherId}`);
//         setTeachers(response.data);
//     };

//     const fetchSubjects=async () =>{
//         const response = await axios.get('http://localhost:5000/api/subjectList');
//         console.log("my data",response);
//         setSubjects(response.data);
//     }
    
//     const fetchClasses = async () => {
//         const response = await axios.get('http://localhost:5000/api/classesList');
//         setClasses(response.data);
//     };
    
//     const handleAddTeacher = async (name, email,password,subjectId, classId) => {
//         console.log("data",name ,email,password,subjectId,classId)
//         try{
//            const response=await axios.post('http://localhost:5000/api/teachers', { name,email,password ,subjectId, classId });
//            console.log(response);
//            fetchTeachers();
//            setIsAddingTeacher(false);
//         }catch(error){
//             console.error('Error adding teacher:', error);
//             setError('Failed to add teacher');
//         }
//     };
  

//     const handleDelete= async (teacherId)=>{
//         console.log("teacher id",teacherId);
//         try{
//         await axios.delete(`http://localhost:5000/api/teachers/${teacherId}`);
//         fetchTeachers();
//         }catch{
//             setError("failed to delete the teacher");
//         }
//     };
//     return (
           
//         <div>
            
           
//                 <TD1component
//                     classes={classes}
//                     subjects={subjects}
//                     teachers={teachers}
//                 />
            
//         </div>
//     );
// };



// export default TeacherDashboard;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TD1component from '../components/TD1component';


const TD1 = () => {
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
          
            <TD1component classes={classes} subjects={subjects} teachers={teachers}  />
        </div>
    );
};


export default TD1;
