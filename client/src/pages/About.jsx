import React from 'react';
import Banner from '../components/Banner';

const About = () => {
    return (
        
        
        <div className="p-5">
            <h1 className='text-3xl font-semibold text-center my-3 relative inline-block py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 mx-auto'>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-30 -z-1"></span>
                About Blog
            </h1>
            <div className="mb-8"> {/* Add margin below the heading */}
                <Banner /> {/* Add the Banner component here */}
            </div>

            <div className='text-md text-black-500 flex flex-col gap-6'>
              <p  className="font-bold">
                Welcome to my Blog! This blog was created by Ekta Teli
                to share his thoughts and ideas with the world. behind 
                this project main purpose is who loves to write about
                technology, coding, and everything in between.
              </p>
  
              <p  className="font-bold">
                On this blog, you'll find weekly articles and tutorials on topics
                such as web development, software engineering, and programming
                languages. learning and exploring new
                technologies, so be sure to check back often for new content!
              </p>
  
              <p  className="font-bold">
                We encourage you to leave comments on our posts and engage with
                other readers. You can like other people's posts and reply to
                them as well. We believe that a community of learners can help
                each other grow and improve.
              </p>
            </div>
          </div>
          
        
            );
};

export default About;