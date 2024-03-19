import React from 'react'
import { Header } from '../../components/user/Header';
import Footer from '../../components/user/Footer';
import Faq from '../../components/user/Faq';

const FaqPage = () => {
    return (
     <div>
     <Header/>
      <div className="page">
     
        <section id="vision" >
          <h1 >FAQ</h1>
        </section>
        <Faq/>
        <Footer/>
      </div>
      </div>
    );
  }

export default FaqPage;