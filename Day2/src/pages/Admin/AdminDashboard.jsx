import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/AdminDashboard.css';

// Sample JSON data
const loanData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    loanType: 'Personal Loan',
    loanAmount: '$5000',
    monthlyIncome: '$3000'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    loanType: 'Home Loan',
    loanAmount: '$10000',
    monthlyIncome: '$4000'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael@example.com',
    loanType: 'Car Loan',
    loanAmount: '$15000',
    monthlyIncome: '$3500'
  },
  {
    id: 4,
    name: 'Emily Brown',
    email: 'emily@example.com',
    loanType: 'Education Loan',
    loanAmount: '$20000',
    monthlyIncome: '$3800'
  },
  {
    id: 5,
    name: 'Daniel Wilson',
    email: 'daniel@example.com',
    loanType: 'Business Loan',
    loanAmount: '$25000',
    monthlyIncome: '$4500'
  },
  {
    id: 6,
    name: 'Sophia Martinez',
    email: 'sophia@example.com',
    loanType: 'Medical Loan',
    loanAmount: '$18000',
    monthlyIncome: '$3200'
  }
];

export default function AdminDashboard() {
  // Define handleDelete function if needed

  return (
    <>
      <div className="bol">
        <div className="plant-details-list-container">
          <center>
            <h2>Loan Details</h2>
          </center>
          <Link to="/addloan">
              <button className="btn-info">Add Loan</button>
            </Link>

    
          <table className="text-center mt-3">
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Email</th>
                <th>Loan Type</th>
                <th>Loan Amount</th>
                <th>Monthly Income</th>
                <th colSpan="3" style={{textAlign:'center'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {loanData.map((loan, index) => (
                <tr key={index}>
                  <td>{loan.name}</td>
                  <td>{loan.email}</td>
                  <td>{loan.loanType}</td>
                  <td>{loan.loanAmount}</td>
                  <td>{loan.monthlyIncome}</td>
                   <td>
                    <button className="btn-success">
                 
                        View
                    
                    </button>
                  </td>
                  <td>
                    <button className="btn-danger">
                     
                       Approve
                    
                    </button>
                  </td>
                  <td>
                 
                  <button className="btn-info">
                     
                 Reject
              
              </button>
                 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
