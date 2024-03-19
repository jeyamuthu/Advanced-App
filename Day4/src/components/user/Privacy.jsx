import React from 'react';
import '../../assets/css/Privacy.css'; // Import CSS file for styling

const Privacy = () => {
    return (
        <div className="privacy-policy-container"> {/* Applying a class for styling */}
            <h2>Privacy Policy</h2>
            <p>This Privacy Policy describes how your personal information is collected, used, and shared when you use our agriculture services.</p>
            
            <h3>Information We Collect</h3>
            <p>We collect information about you during the loan application process. This information may include your name, address, contact details, financial information, and other relevant details required for processing your application.</p>
            
            <h3>How We Use Your Information</h3>
            <p>We use the information we collect to process your agriculture loan application, communicate with you, and provide support services. We may also use your information to comply with legal obligations, prevent fraud, and improve our services.</p>
            
            <h3>Sharing Your Information</h3>
            <p>We may share your personal information with third-party service providers, financial institutions, and government agencies as necessary to process your loan application and comply with legal requirements.</p>
            
            <h3>Security</h3>
            <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            
            <h3>Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website.</p>
            
            <h3>Contact Us</h3>
            <p>If you have any questions or concerns about our Privacy Policy or how we handle your personal information, please contact us at privacy@agricultureservices.com.</p>
        </div>
    );
};

export default Privacy;
