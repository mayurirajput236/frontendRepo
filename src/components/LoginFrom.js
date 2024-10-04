import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


const LoginFrom=()=>{
       

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[emailError,setEmailError]=useState(null);
    const[passwordError,setPasswordError]=useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const validateEmail=(email)=>{
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
   
    const handleSubmit = async (e) => {
         e.preventDefault();
        setEmailError(null);
        setPasswordError(null);
        setError(null);
        let isValid = true;
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
           
        }
    if(email==""){
        setEmailError("email is required");
        isValid=false;
    }
    if(password.length>8){
        setPasswordError("password should not greater than 8 chracter");
        isValid=false;
    }
    if(password==""){
        setPasswordError("password is required");
        isValid=false;
    }
    if (!isValid) return;
        try {
            const response = await axios.post('http://localhost:5000/api/auth/adminlogin', { email, password });
             console.log(response);
            if (response.data.loginStatus) 
                {
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
                }
             else {
                setError(response.data.Error || "Incorrect email or password.");
            }
        } catch(err) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen " style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover' }}>
            <div className="border rounded-2xl shadow-lg p-8 bg-transparent w-96 h-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            {error && <p className='text-red-500 mb-4'>{error}</p>}
                <h2 className="text-2xl font-semibold text-center mb-6 text-white">Admin Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xl font-medium text-white">Email</label>
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            // required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {emailError && <div className='text-red-500'>{emailError}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-xl font-medium text-white">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            // required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {passwordError && <div className='text-red-500'>{passwordError}</div>}
                    </div>
                    <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Login</button>
                </form>
            </div>
        </div>
    );
       
}
export default LoginFrom;