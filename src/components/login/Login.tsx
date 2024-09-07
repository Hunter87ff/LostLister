// npm install tailwindcss
import React from 'react';
import Header from '../Header';

import './LoginStyle.css';
import Footer from '../Footer';
const Login: React.FC = () => {
    return (
        
    <div className="loginPage">
        <Header/>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <div className="flex flex-col items-center">
                <input
                    className="border border-gray-400 rounded py-2 px-4 mb-2"
                    type="email"
                    placeholder="Email"
                />
                <input
                    className="border border-gray-400 rounded py-2 px-4"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                Login with Google
            </button>
            <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4">
                Login with Apple
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Login
            </button>
        </div>
        <Footer/>
    </div>
    );
};

export default Login;