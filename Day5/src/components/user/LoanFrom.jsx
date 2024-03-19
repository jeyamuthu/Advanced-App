import React, { useState } from 'react';
import '../../assets/css/Loanform.css'; // Import CSS file for styling
import { Header } from './Header';

const LoanForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        age: '',
        address: '',
        adharNumber: '',
        panNumber: '',
        monthlyIncome: '',
        loanAmount: '',
        loanDuration: '',
        loanPurpose: '',
        idProof: '',
        loanType: '', // Added loanType field
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const confirmDetails = () => {
        nextStep();
    };
    

    const Step1 = (
           <div className="step">
        
            <h2>Step 1: Personal Information</h2>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" required />
            <input type="number" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" required />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
            <button onClick={nextStep}>Next</button>
        </div>
    );

    const Step2 = (
        <div className="step">
            <h2>Step 2: Document Information</h2>
            <input type="text" name="adharNumber" value={formData.adharNumber} onChange={handleChange} placeholder="Aadhar Number" required />
            <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} placeholder="PAN Number" required />
            <input type="text" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} placeholder="Monthly Income" required />
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );

    const Step3 = (
        <div className="step">
            <h2>Step 3: Loan Details</h2>
            <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} placeholder="Loan Amount" required />
            <input type="number" name="loanDuration" value={formData.loanDuration} onChange={handleChange} placeholder="Loan Duration (months)" required />
            <textarea name="loanPurpose" value={formData.loanPurpose} onChange={handleChange} placeholder="Loan Purpose" required></textarea>
            <input type="file" name="idProof" onChange={handleChange} required />
            <button onClick={prevStep}>Previous</button>
            <button onClick={confirmDetails}>Confirm Details</button>
        </div>
    );

    const Step4 = (
        <div className="step">
            <h2>Step 4: Loan Type</h2>
            <select name="loanType" value={formData.loanType} onChange={handleChange} required>
                <option value="">Select Loan Type</option>
                <option value="Equipment Loan">Equipment Loan</option>
                <option value="Crop Loan">Crop Loan</option>
                <option value="Land Purchase Loan">Land Purchase Loan</option>
                {/* Add more loan types as needed */}
            </select>
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );

    const Confirmation = (
        <div className="step">
            <h2>Confirm Details</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Mobile Number: {formData.mobileNumber}</p>
            <p>Date of Birth: {formData.dob}</p>
            <p>Address: {formData.address}</p>
            <p>Aadhar Number: {formData.adharNumber}</p>
            <p>PAN Number: {formData.panNumber}</p>
            <p>Monthly Income: {formData.monthlyIncome}</p>
            <p>Loan Amount: {formData.loanAmount}</p>
            <p>Loan Duration: {formData.loanDuration}</p>
            <p>Loan Purpose: {formData.loanPurpose}</p>
            <p>Loan Type: {formData.loanType}</p>
            <button onClick={prevStep}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
       
    );

    let currentStep;
    switch (step) {
        case 1:
            currentStep = Step1;
            break;
        case 2:
            currentStep = Step2;
            break;
        case 3:
            currentStep = Step3;
            break;
        case 4:
            currentStep = Step4;
            break;
        case 5:
            currentStep = Confirmation;
            break;
        default:
            currentStep = Step1;
    }

    return (
        <div className="loan-form-container">
            <form onSubmit={handleSubmit}>
                {currentStep}
            </form>
        </div>
    );
};

export default LoanForm;
