import React, { useState } from 'react';
import '../../assets/css/LoanType.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const LoanType = () => {
    // Dummy data representing different types of loans
    const loanTypesData = [
        {
            id: 1,
            name: "Equipment Loan",
            description: "Loan for purchasing agricultural equipment.",
            image: "https://www.adanicapital.in/-/media/Project/AdaniCapital/Farm-Equipments/Tractor-Loan/tractorloan.webp",
            eligibility: "Farmers with a minimum of 2 years of farming experience.",
        },
        {
            id: 2,
            name: "Crop Loan",
            description: "Loan for financing crop production expenses.",
            image: "https://i.ndtvimg.com/i/2016-02/agriculture-farm-generic-istock_650x400_61455603415.jpg",
            eligibility: "Farmers with suitable land and a viable crop plan.",
        },
        {
            id: 3,
            name: "Land Purchase Loan",
            description: "Loan for buying agricultural land.",
            image: "https://www.horizonfc.com/sites/default/files/styles/news_featured/public/images/blog/Land%20Mortgage%20vs.%20Home%20Mortgage.jpg?h=4e81ff6a&itok=_Ho7j7tR",
            eligibility: "Farmers looking to expand their land holdings.",
        },
        {
            id: 4,
            name: "Livestock Loan",
            description: "Loan for purchasing livestock.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMS4wLfueCFGb4J49i3guR1FlwzQNmHuhgA&usqp=CAU",
            eligibility: "Farmers engaged in livestock farming.",
        },
        {
            id: 5,
            name: "Farm Improvement Loan",
            description: "Loan for making improvements to the farm infrastructure.",
            image: "https://media.istockphoto.com/id/1221831931/photo/farmer-on-combine-harvester-in-cornfield-during-harvest.jpg?s=612x612&w=0&k=20&c=1riZGLmPvBwVvGEndDSoxZWP0-oU-9h_swvNub7nkhc=",
            eligibility: "Farmers seeking to enhance their farm infrastructure.",
        },
        {
            id: 6,
            name: "Working Capital Loan",
            description: "Loan for covering day-to-day operating expenses of the farm.",
            image: "https://www.smefinanceforum.org/sites/default/files/styles/720x486/public/shutterstock_1635308305-NL.jpg?itok=CZF9dwkLhttps://www.shutterstock.com/image-photo/farmer-holding-money-bag-on-260nw-1934020754.jpg",
            eligibility: "Farmers needing funds for day-to-day operations.",
        },
        {
            id: 7,
            name: "Irrigation Loan",
            description: "Loan for installing or upgrading irrigation systems.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0ztoMuiK4ZjP4AkuE0Gy_Ul7JY14n6SzHw&usqp=CAU",
            eligibility: "Farmers looking to improve irrigation facilities.",
        },
        {
            id: 8,
            name: "Greenhouse Loan",
            description: "Loan for building or expanding greenhouse facilities.",
            image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?cs=srgb&dl=pexels-mark-stebnicki-2886937.jpg&fm=jpg",
            eligibility: "Farmers interested in greenhouse farming.",
        },
        {
            id: 9,
            name: "Organic Farming Loan",
            description: "Loan for transitioning to or expanding organic farming practices.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-ern29G_DE7J60qqUZkwsHfWXcWEkqvxDA&usqp=CAU",
            eligibility: "Farmers transitioning to or expanding organic farming.",
        }
    ];

    const [loanTypes, setLoanTypes] = useState(loanTypesData);
    const [searchQuery, setSearchQuery] = useState('');

    const handleApplyLoan = (loanId) => {
        // Handle applying for the loan based on the loan ID
        console.log(`Apply for loan ${loanId}`);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        const filteredLoans = loanTypesData.filter(loan => loan.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setLoanTypes(filteredLoans);
    };

    return (
        <div className="loan-type-container">
            <h2 style={{textAlign:'center'}}>Types of Loans</h2>
            <input 
                type="text"
                placeholder="Search by loan name... "
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className="loan-types">
                {loanTypes.map((loan) => (
                    <div key={loan.id} className="loan-card">
                        <img src={loan.image} alt={loan.name} />
                        <h3>{loan.name}</h3>
                        <p>{loan.description}</p>
                        <p><strong>Eligibility:</strong> {loan.eligibility}</p>
                        <button onClick={() => handleApplyLoan(loan.id)}><Link to="/loanformpage" style={{textDecoration:'none',color:'white'}}>Apply Loan</Link></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoanType;
