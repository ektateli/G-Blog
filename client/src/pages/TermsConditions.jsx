import React from 'react';

const TermsConditions = () => {
    return (
        <div className="container mx-auto p-4 bg-blue-50"> {/* Added background color class */}
            <h1 className='text-3xl font-bold text-center mb-16 relative'>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-30 -z-1 w-3/4 h-12 mx-auto"></span>
                Terms & Conditions
            </h1>
                
            <p className="mb-4">
                Welcome to my Blog! By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not access the website.
            </p>
            <ol className="list-decimal list-inside mb-4">
                <li className="mb-2">
                    <strong>Use of the Site:</strong> You may use our website for lawful purposes only. You agree not to use the site in any way that violates any applicable federal, state, local, or international law or regulation.
                </li>
                <li className="mb-2">
                    <strong>Intellectual Property:</strong> All content on this site, including text, graphics, logos, and images, is the property of my Blog or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
                </li>
                <li className="mb-2">
                    <strong>User Contributions:</strong> You are responsible for any content you post on our site. By posting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and publish that content.
                </li>
                <li className="mb-2">
                    <strong>Disclaimer of Warranties:</strong> Our website is provided on an "as is" and "as available" basis. We do not warrant that the site will be uninterrupted, secure, or free of errors.
                </li>
                <li className="mb-2">
                    <strong>Limitation of Liability:</strong> In no event shall be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the site.
                </li>
                <li className="mb-2">
                    <strong>Changes to These Terms:</strong> We may revise these Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms on this page.
                </li>
                <li className="mb-2">
                    <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India.
                </li>
            </ol>
            <p className="mb-4">
                <strong>Contact Us:</strong> If you have any questions about these Terms, please contact us at ektablog@gmail.com.
            </p>
        </div>
    );
}

export default TermsConditions;