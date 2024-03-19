import React from 'react'
import { Header } from '../../components/user/Header';
import Footer from '../../components/user/Footer';
import LoanType from '../../components/user/LoanType';

const Loanpage = () => {
    return (
     <div>
     <Header/>
      <div className="page">
        <section id="vision" >
          <h1 >LoanType</h1>
        </section>
        <LoanType/>
        <Footer/>
      </div>
      </div>
    );
  }

export default Loanpage;