

import React from 'react';
const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">LostLister</h2>
                <p className="text-center text-gray-400 mb-6">
                    Description about the page goes here.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                        About
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Contact
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Login
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Privacy
                    </a>
                </div>
                <p className="text-gray-400 mt-6">
                    {/* &copy; {new Date().getFullYear()} LostLister. All rights reserved. */}
                    Made with ❤️ by hunter87.
                </p>
            </div>
        </footer>
    );
};

export default Footer;