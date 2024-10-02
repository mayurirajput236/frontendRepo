import React, { useState } from 'react';
import { useNotices } from './NoticeContext';
const Notice = () => {
    const [note, setNote] = useState('');
    const{addNotice}=useNotices();
    const handleSubmit = (e) => {
          e.preventDefault();
          if(note){
          addNotice(note);
          setNote(''); 
          }
        
    };

    return (
        <div className='flex bg-slate-600 w-90 h-50 mt-4 rounded-lg'>
            <div className='p-6 w-full'>
                <span className='text-white text-xl font-bold'>School Related Notices Here</span>
                <div className='p-4 mt-2 bg-slate-400 w-180 h-40 rounded-lg'>
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <input
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Write a Note"
                            className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border border-Gray-300 outline-none focus:outline-none focus:ring w-full pl-10"
                        />
                    </div>
                    <button
                        type='submit'
                        onClick={handleSubmit}
                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notice;

// import React, { useState } from 'react';
// import { useNotices } from './NoticeContext'; // Import your context

// const Notice = () => {
//     const [note, setNote] = useState('');
//     const { addNotice } = useNotices(); // Get addNotice function from context

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (note) {
//             addNotice(note); // Add the note to context
//             setNote(''); // Clear the input field after submission
//         }
//     };

//     return (
//         <div className='flex bg-slate-600 w-90 h-50 mt-4 rounded-lg'>
//             <div className='p-6 w-full'>
//                 <span className='text-white text-xl font-bold'>School Related Notices Here</span>
//                 <div className='p-4 mt-2 bg-slate-400 w-180 h-40 rounded-lg'>
//                     <div className="relative flex w-full flex-wrap items-stretch mb-3">
//                         <input
//                             type="text"
//                             value={note}
//                             onChange={(e) => setNote(e.target.value)}
//                             placeholder="Write a Note"
//                             className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border border-Gray-300 outline-none focus:outline-none focus:ring w-full pl-10"
//                         />
//                     </div>
//                     <button
//                         type='submit'
//                         onClick={handleSubmit}
//                         className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Notice;
