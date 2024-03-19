import React from 'react'
import "../../assets/css/Aboutus.css";
import aboutImg from "../../assets/images/About.jpeg"
import { Header, Section } from '../../components/user/Header';
import Footer from '../../components/user/Footer';
function Aboutus() {
  return (
   <div>
   <Header/>
   <Section/>
      <section className='hero1'>
        <div className='heading1'>
          <h1>About Us</h1>
        </div>
        <div className='container1'>
          <div className='hero-content1'>
            <h2>Welcome To Agri Loan</h2>
            <p>An agriculture loan is specialized financing for farmers and agricultural businesses, covering equipment, land, seeds, and operational costs. Offered by banks and government agencies, these loans feature flexible repayment terms and varying interest rates. Collateral may be required, with some lenders providing technical assistance to improve operational efficiency.</p>
            <button className='cta-button1'>Learn More</button>
          </div>
          <div className='hero-image1'>
           <img src={aboutImg}/>
          </div>
        </div>
      </section>
      <Footer/>
   </div>
  )
}

export default Aboutus