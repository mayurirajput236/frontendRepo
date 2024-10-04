

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NoticeProvider } from './MyContext.js';
import AppRoutes from './routes/AppRoutes.js';
const App = () => {
    return (
        <NoticeProvider>
        <Router>
            <AppRoutes></AppRoutes>
            </Router>
        </NoticeProvider>
    );
};

export default App;








