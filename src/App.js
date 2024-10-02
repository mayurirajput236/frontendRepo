

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register.js';
import Login from './components/Login.js';
import AdminDashboard from './components/AdminDashboard.js';
import TeacherDashboard  from './components/TeacherDashboard.js';
import StudentDashboard from './components/StudentDashboard.js';
import Subject from './components/Subject.js';
import Notice from './components/Notice.js'
import Dashboard  from './components/Dashboard.js';
import CombinedClassDashboard from './components/ClassDashboard.js';
import Logout from './components/Logout.js';
import { NoticeProvider } from './components/NoticeContext.js';
const App = () => {
    return (
        <NoticeProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<AdminDashboard />}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="teachers/*" element={<TeacherDashboard />} />
                     <Route path="students" element={<StudentDashboard />} />
                    <Route path="classes" element={<CombinedClassDashboard />} />
                    <Route path="subject" element={<Subject />} />
                    <Route path="notice" element={<Notice />} />
                    <Route path="logout" element={<Logout /> } />
                   
                </Route>
            </Routes>
        </Router>
        </NoticeProvider>
    );
};
 
export default App;





// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './components/Register.js';
// import Login from './components/Login.js';
// import AdminDashboard from './components/AdminDashboard.js';
// import TeacherDashboard from './components/TeacherDashboard.js';
// import StudentDashboard from './components/StudentDashboard.js';
// import Subject from './components/Subject.js';
// import Notice from './components/Notice.js';
// import Dashboard from './components/Dashboard.js';
// import CombinedClassDashboard from './components/ClassDashboard.js';
// import Logout from './components/Logout.js';
// import { NoticeProvider } from './NoticeContext'; // Import the NoticeProvider

// const App = () => {
//     return (
//         <NoticeProvider>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Login />} />
//                     <Route path="/register" element={<Register />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/dashboard" element={<AdminDashboard />}>
//                         <Route path="/dashboard" element={<Dashboard />} />
//                         <Route path="teachers/*" element={<TeacherDashboard />} />
//                         <Route path="students" element={<StudentDashboard />} />
//                         <Route path="classes" element={<CombinedClassDashboard />} />
//                         <Route path="subject" element={<Subject />} />
//                         <Route path="notice" element={<Notice />} />
//                         <Route path="logout" element={<Logout />} />
//                     </Route>
//                 </Routes>
//             </Router>
//         </NoticeProvider>
//     );
// };

// export default App;
