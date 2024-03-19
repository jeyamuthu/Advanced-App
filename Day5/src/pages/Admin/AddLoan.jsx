import React, { useState } from 'react';
import '../../assets/css/AddLoan.css'; // Import CSS file for styling

const AddLoan = () => {
    const [newLoan, setNewLoan] = useState({
        name: '',
        loanType: '',
        loanAmount: '',
        monthlyIncome: '',
        eligibility: '' // Added eligibility field
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewLoan({ ...newLoan, [name]: value });
    };

    const addLoan = () => {
        // Handle adding the new loan data (e.g., sending to backend, updating state)
        console.log('New loan added:', newLoan);
        // Clear the form fields after adding the loan
        setNewLoan({
            name: '',
            loanType: '',
            loanAmount: '',
            monthlyIncome: '',
            eligibility: ''
        });
    };

    return (
        <div className="loan-form-container">
            <h3 style={{textAlign:'center', marginTop:'15%'}}>Add New Loan</h3>
            <form className="loan-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className='input'
                        value={newLoan.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                    />
                </div>
                
                <div className="form-group">
                    <input
                        type="text"
                        name="loanType"
                        className='input'
                        value={newLoan.loanType}
                        onChange={handleInputChange}
                        placeholder="Loan Type"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className='input'
                        name="loanAmount"
                        value={newLoan.loanAmount}
                        onChange={handleInputChange}
                        placeholder="Loan Amount"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className='input'
                        name="monthlyIncome"
                        value={newLoan.monthlyIncome}
                        onChange={handleInputChange}
                        placeholder="Monthly Income"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className='input'
                        name="eligibility"
                        value={newLoan.eligibility}
                        onChange={handleInputChange}
                        placeholder="Eligibility"
                    />
                </div>
                <div className="form-group">
                    <button  className="btn-success" onClick={addLoan} style={{marginLeft:'30%'}}>Add Loan</button>
                </div>
            </form>
        </div>
    );
};

export default AddLoan;
