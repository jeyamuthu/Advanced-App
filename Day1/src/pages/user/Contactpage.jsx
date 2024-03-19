import React from 'react'
import { Header } from '../../components/user/Header';
import Footer from '../../components/user/Footer';

import Contact from '../../components/user/Contact';

const Contactpage = () => {
    return (
     <div>
     <Header/>
      <div className="page">
     
        <section id="vision" >
          <h1 >Contact</h1>
        </section>
        <Contact/>
        <Footer/>
      </div>
      </div>
    );
  }

export default Contactpage;