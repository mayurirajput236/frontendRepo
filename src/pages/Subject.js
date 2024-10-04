import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import CreateSubject from '../components/createSubject';
import SubjectList from '../components/subjectList';
const SubjectDashboard = () => {

    const [subjects, setSubjects] = useState([]);
    const [subjectName, setSubjectName] = useState('');
    const [error, setError] = useState(null);
    const [isAddingSub, setAddingSub] = useState(false);
    const [subjectError, setSubjectError] = useState('');
    const fetchSubjects = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/subjectList');
            console.log(response);
            setSubjects(response.data);
        }
        catch (error) {
            console.error("error in feching data", error);
        }
    }, [])

    useEffect(() => {
        fetchSubjects();
    }, [fetchSubjects]);


    const handleSubSubmit = async (e) => {
        
        e.preventDefault();
        console.log(subjectName);
        if(!subjectName.trim()){
            setSubjectError('subject name should not empty');
            return;
        }
         setSubjectError('')
        
        try {
            const response = await axios.post('http://localhost:5000/api/subjects', { SubjectName: subjectName });
            console.log("response is", response);
            if(response.data.subjectStatus){
                setSubjectName('');
                fetchSubjects();
                setAddingSub(false);
                setError('')
            }
           else{
            setError(response.data.Error);
           }
        }
        catch (error) {
            setError("subject already created");
        }
    };
    const handleDeleteSubject = async (subjectId) => {
        console.log("the subject id is", subjectId);
        try {
            await axios.delete(`http://localhost:5000/api/subjects/${subjectId}`);
            fetchSubjects();

        } catch (error) {
            setError("failed to delete the subject");
        }
    };



    useEffect(() => {
        console.log(subjects, 'subjects');
    }, [subjects])



    return (
        <div>

            {isAddingSub ? (
                <CreateSubject fetchSubjects={fetchSubjects} setAddingSub={setAddingSub}></CreateSubject>
            ) : (
                <>
                   <SubjectList subjects={subjects} fetchSubjects={fetchSubjects} setAddingSub={setAddingSub}></SubjectList>
                </>


            )}
        </div>
    )
}

export default SubjectDashboard;
