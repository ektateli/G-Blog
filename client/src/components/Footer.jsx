import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo-white.png'

const Footer = () => {
    return (
        <div className="bg-blue-50 p-7"> {/* Background color and padding */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
                    <div>
                        <h3 className="text-lg font-bold">About</h3>
                        <div>
                            <Link to="/about" target="_blank" rel="noopener noreferrer" className="block mt-1">Know about Us</Link>
                            <Link to="http://localhost:5173" target="_blank" rel="noopener noreferrer" className="block mt-1"> Blog</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Follow Us</h3>
                        <div>
                            <Link to="https://github.com/ektateli/G-Blog.git" target="_blank" rel="noopener noreferrer" className="block mt-1">Github</Link>
                            
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Legal</h3>
                        <div>
                            <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="block mt-1">Privacy Policy</Link>
                            <Link to="/terms-conditions" className="block mt-1">Terms & Conditions</Link>
                            
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 my-2"></div>
                <div className="flex justify-between items-center">
                <div className='text-sm text-center py-2 mt-2'>
                <img src={logo} alt="Logo" className="h-9 mx-auto" /> {/* Adjust the path and size as needed */}
                </div>
                    <div className=" text-sm text-center py-4 mt- flex gap-4">
                    <p className='text-sm text-center py-2 mt-2'>ektablog@gmail.com</p>
                <p className='text-sm text-center py-2 mt-2'>+91 1234567890</p>
       
                          </div>
                </div>
                <div className='text-sm text-center bg-blue-50 py-3 mt-3'>
                © Copyright 2025 | Designed & Developed By: Ekta Teli.
            </div>
            </div>
            
        </div>
       
    );
}

export default Footer;