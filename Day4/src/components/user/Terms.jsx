import React from 'react';
import '../../assets/css/Term.css'; // Import CSS file for styling
import Footer from './Footer';

const Terms = () => {
    return (
        <div>
        
        <div className="terms-container"> {/* Applying a class for styling */}
            <h2>Terms and Conditions</h2>
            <p>Please read the following terms and conditions carefully before applying for the agriculture loan:</p>
            <ul>
                <li>
                    <strong>Loan Amount:</strong> Display the minimum and maximum loan amounts available for agricultural purposes.
                </li>
                <li>
                    <strong>Interest Rate:</strong> Clearly state the interest rate applicable to the loan, whether fixed or variable, and any factors that may influence rate changes.
                </li>
                <li>
                    <strong>Repayment Period:</strong> Specify the duration of the loan repayment period, including any grace periods or flexibility in scheduling payments.
                </li>
                <li>
                    <strong>Collateral Requirements:</strong> Outline the types of collateral accepted to secure the loan, such as land, equipment, or crops.
                </li>
                <li>
                    <strong>Eligibility Criteria:</strong> List the requirements for borrowers, including creditworthiness, agricultural experience, and any specific qualifications for accessing the loan.
                </li>
                <li>
                    <strong>Fees and Charges:</strong> Detail any upfront fees, processing charges, or penalties for late payments associated with the loan.
                </li>
                <li>
                    <strong>Insurance Requirements:</strong> Explain any mandatory insurance coverage necessary to secure the loan against unforeseen events such as crop failure or equipment damage.
                </li>
                <li>
                    <strong>Default Consequences:</strong> Clearly state the consequences of defaulting on the loan, including potential loss of collateral or legal action.
                </li>
            </ul>
            <p>By applying for the loan, you agree to abide by these terms and conditions. If you have any questions or concerns, please contact our customer service team for assistance.</p>
        </div>
     
        </div>
    );
};

export default Terms;
