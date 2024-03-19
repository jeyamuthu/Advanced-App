import React from 'react'
import { Header, Section } from '../../components/user/Header';
import Footer from '../../components/user/Footer';
import Privacy from '../../components/user/Privacy';



const PrivacyPage = () => {
    return (
     <div>
     <Header/>
      <div className="page">
     
        <section id="vision" >
          <h1 >Privacy Policy</h1>
        </section>
        <Privacy/>
        <Footer/>
      </div>
      </div>
    );
  }

export default PrivacyPage;