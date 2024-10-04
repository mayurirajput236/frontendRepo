
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Students from "../assets/img1.png";
import StudentList from '../components/StudentList';
import AddStudentForm from '../components/StudentFrom';
const StudentDashboard = () => {
    const [students, setStudent] = useState([]);
    const [classes, setClasses] = useState([]);
    const[error,setError]=useState([]);
    const [isAddingStudent, setIsAddingStudent] = useState(false);

    useEffect(() => {
        fetchStudent();
        fetchClasses();
    }, []);


    const fetchStudent = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/student');
            console.log("Response structure:", response.data);

            if (response.data.students && Array.isArray(response.data.students)) {
                setStudent(response.data.students);
            } else {
                console.error("Expected an array but got:", response.data);
                setStudent([]);
            }
        } catch (error) {
            console.error("Error fetching students:", error);
            setStudent([]);
        }
    };


    const fetchClasses = async () => {
        const response = await axios.get('http://localhost:5000/api/classesList');
        console.log(response);
        setClasses(response.data);
    };
    const handleAddStudent = async (name,email,password, address, classId) => {
        const response = await axios.post('http://localhost:5000/api/student', { name,email,password, address, classId });
        fetchStudent(); 
        setIsAddingStudent(false); 
    };
    const handleDelete=async(studentId)=>{
        console.log("student id is",studentId);
        try{
               await axios.delete(`http://localhost:5000/api/student/${studentId}`);
               fetchStudent();
        }
        catch(error){
            setError("failed to delete student");
        }
    }
    return (
        <div>
           
            {!isAddingStudent ? (
                <>
                    <StudentList
                        students={students}
                        classes={classes}
                        onStudentAdded={() => setIsAddingStudent(true)}
                        onDelete={handleDelete}
                    />
                </>
            ) : (
                <AddStudentForm classes={classes} onStudentAdded={handleAddStudent} />
            )}
        </div>
    );
};

export default StudentDashboard;
