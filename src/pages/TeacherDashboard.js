import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Teachers from "../assets/img3.png";
import TeacherList from '../components/TeacherList';
import AddTeacherForm from '../components/TeacherFrom';
const TeacherDashboard = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [teachers, setTeachers] = useState([]);
    const [classes, setClasses] = useState([]);
    const[subjects,setSubjects]=useState([]);
    const[error,setError]=useState(null);
    const [isAddingTeacher, setIsAddingTeacher] = useState(false);

    useEffect(() => {
        
        fetchTeachers();
        fetchClasses();
        fetchSubjects();
    }, []);

    const fetchTeachers = async () => {
        const response = await axios.get('http://localhost:5000/api/teachers');
        setTeachers(response.data);
    };

    const fetchSubjects=async () =>{
        const response = await axios.get('http://localhost:5000/api/subjectList');
        console.log("my data",response);
        setSubjects(response.data);
    }
    
    const fetchClasses = async () => {
        const response = await axios.get('http://localhost:5000/api/classesList');
        setClasses(response.data);
    };
    
    const handleAddTeacher = async (name, email,password,subjectId, classId) => {
        console.log("data",name ,email,password,subjectId,classId)
        try{
           const response=await axios.post('http://localhost:5000/api/teachers', { name,email,password ,subjectId, classId });
           console.log(response);
           fetchTeachers();
           setIsAddingTeacher(false);
        }catch(error){
            console.error('Error adding teacher:', error);
            setError('Failed to add teacher');
        }
    };
  

    const handleDelete= async (teacherId)=>{
        console.log("teacher id",teacherId);
        try{
        await axios.delete(`http://localhost:5000/api/teachers/${teacherId}`);
        fetchTeachers();
        }catch{
            setError("failed to delete the teacher");
        }
    };
    return (
           
        <div>
            
            {!isAddingTeacher ? (
                <TeacherList
                    classes={classes}
                    subjects={subjects}
                    teachers={teachers}
                    onAddTeacher={() => setIsAddingTeacher(true)}                                         
                    onDelete={handleDelete} 
                />
            ) : (
                <AddTeacherForm classes={classes} subjects={subjects} onTeacherAdded={handleAddTeacher}  />
            )}
        </div>
    );
};



export default TeacherDashboard;







