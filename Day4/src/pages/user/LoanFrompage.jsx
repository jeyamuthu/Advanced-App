import React from 'react'
import { Header } from '../../components/user/Header';
import Footer from '../../components/user/Footer';

import LoanForm from '../../components/user/LoanFrom';

const Loanformpage = () => {
    return (
     <div>
     <Header/>
      <div className="page">
     
        <section id="vision" >
          <h1 >Application Form</h1>
        </section>
        <LoanForm/>
        <Footer/>
      </div>
      </div>
    );
  }

export default Loanformpage;