import React from 'react'
import { Header, Section } from '../../components/user/Header';
import Footer from '../../components/user/Footer';

import Terms from '../../components/user/Terms';

const TermPage = () => {
    return (
     <div>
     <Header/>
      <div className="page">
     
        <section id="vision" >
          <h1 >Term & Condition</h1>
        </section>
        <Terms/>
        <Footer/>
      </div>
      </div>
    );
  }

export default TermPage;