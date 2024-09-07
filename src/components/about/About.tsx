import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
const About: React.FC = () => {
    return (
        <div className="aboutUs">
            <Header/>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-700">
                    Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality products and services.
                </p>
            </div>
            <Footer/>         
        </div>

    );
};

export default About;