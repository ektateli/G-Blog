import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto p-3 bg-blue-50">
            <h1 className='text-3xl font-bold text-center mb-16 relative'>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-30 -z-1 w-3/4 h-12 mx-auto"></span>
                Privacy Policy
            </h1>
            
            <p className="mb-4">
                At my Blog, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website.
            </p>
            <h2 className="text-2xl font-normal mb-2">Information We Collect:</h2>
            <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                    <strong>Personal Information:</strong> We may collect personal information that you provide to us, including your name, email address, and any other information you choose to provide.
                </li>
                <li className="mb-2">
                    <strong>Usage Data:</strong> We may collect information about how you access and use our website, including your IP address, browser type, pages visited, and the time and date of your visit.
                </li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">How We Use Your Information:</h2>
            <ul className="list-disc list-inside mb-4">
                <li className="mb-2">To provide, maintain, and improve our website.</li>
                <li className="mb-2">To communicate with you, including responding to your comments.</li>
                <li className="mb-2">To send you newsletters, marketing communications, and other information that may be of interest to you.</li>
            </ul>
            <p className="mb-4">
                <strong>Cookies:</strong> We may use cookies and similar tracking technologies to monitor activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p className="mb-4">
                <strong>Data Security:</strong> We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. 
            </p>
            <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy:</h2>
            <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
        </div>
    );
}

export default PrivacyPolicy;