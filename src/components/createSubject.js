import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';

const CreateSubject=({fetchSubjects, setAddingSub})=>{
    
   const[subjectName,setSubjectName]=useState('');
   const[subjectError,setSubjectError]=useState('');
   const [error, setError] = useState(null);

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

 
    return(

        <div className='flex items-center justify-center mt-4 '>
        <div className='border rounded-2xl shadow-lg p-8  w-96 h- 80 bg-white-400 rounded-md '>

            <form onSubmit={handleSubSubmit}>
                
                 <select
                        value={subjectName}
                        onChange={(e) => setSubjectName(e.target.value)}
                        className="block w-full mt-2 mb-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="" className="text-gray-500">Choose Subject</option>
                        <option value="Maths" className="text-gray-500">Maths</option>
                        <option value="Science" className="text-gray-500">Science</option>
                        <option value="Social Science" className="text-gray-500">Social Science</option>
                        <option value="English" className="text-gray-500">English</option>
                        <option value="Hindi" className="text-gray-500">Hindi</option>
                        
                    </select>
                {subjectError && <div className='text-red-500'>{subjectError}</div>}
                {error && <div className='text-danger'>{error}</div>}
                <button type="submit" className="mt-3 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Add Subject</button>
            </form>
        </div>
    </div>

    )

}
export default CreateSubject;