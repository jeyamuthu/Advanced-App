import React from 'react';
import { Header } from './Header';
import "../../assets/css/Description.css"
import { Link } from 'react-router-dom';
class Description extends React.Component {
  render() {
    return (
      <div>
      <Header/>
      
        <section className="slider__area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 slider__area__content__wrap">
                <div className="slider__area__content">
                  <h6>Investing in Agriculture</h6>
                  <h1>Empowering Farmers with Financial Solutions</h1>
                  <p className="lead">Access affordable loans for agricultural expansion and sustainability. Grow your farm, grow your future.</p>
                  <a  className="btn btn-primary my-3"><Link to="/loanpage" style={{textDecoration:"none"}}>Apply Loan</Link></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="icon__area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 icon__area--border">
                <ul>
                  <li><img src="https://templates.envytheme.com/finix/default/assets/img/partner/image1.png" alt="" /></li>
                  <li><img src="https://templates.envytheme.com/finix/default/assets/img/partner/image2.png" alt="" /></li>
                  <li><img src="https://templates.envytheme.com/finix/default/assets/img/partner/image4.png" alt="" /></li>
                  <li><img src="https://templates.envytheme.com/finix/default/assets/img/partner/image5.png" alt="" /></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="about__area py-5 mb-4 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mb-sm-5">
                <div className="about__area__img">
                  <div className="about__area__img1">
                    <img src="https://templates.envytheme.com/finix/default/assets/img/about/image3.png" alt="" />
                  </div>

                  <div className="about__area__img2">
                    <div className="about__area__img2__inner">
                      <h2>25</h2>
                      <span>Years Of Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="finix__text ms-2  ">
                  <h6>About Our Agricultural Loan Services</h6>
                  <h2>Partnering with Farmers for Sustainable Growth</h2>
                  <p>At Agriculture Loan Co., we've been dedicated to supporting farmers with financing for over 25 years. Our loans are tailored to help you expand your farm, invest in new equipment, and adopt sustainable practices.</p>
                  <strong>In agriculture, we focus on:</strong>
                  <ul>
                    <li>Flexible loan options</li>
                    <li>Expert advice</li>
                    <li>Commitment to sustainability</li>
                  </ul>
                  <a href="#" className="btn btn-primary my-2">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Choose__area mainbg py-5">
          <div className="container-fluid">
            <div className="row my-4">
              <div className="col-xl-6 col-lg-6 mb-md-5 mb-sm-5 text-md-center">
                <div className="finix__text text-md-center text-sm-center me-5">
                  <h6>Transparent Process</h6>
                  <h1>Why Choose Our Agriculture Loans?</h1>
                  <p>Discover why farmers trust us for their financial needs. We provide transparent processes, competitive rates, and dedicated support to help you succeed in agriculture.</p>
                  <img src="https://templates.envytheme.com/finix/default/assets/img/choose.png" alt="" />

                  <div className="choose__area__box__btn">
                    <a href="https://www.youtube.com/watch?v=gN8uPQzi7Xc&pp=ygUlYWdyaWN1bHR1cmUgbG9hbiBhcHBseSB2ZWRpbyBpbiB0YW1pbA%3D%3D"><i className="fas fa-play-circle"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 mt-md-5 mt-sm-5">
                <div className="row ms-2 mb-3">
                  <div className="col-lg-6 col-md-6 text-center mb-4 mt-3">
                    <div className="choose__area__box__item">
                      <span><i className="fab fa-fonticons-fi"></i></span>
                      <h2>Flexible Options</h2>
                      <p>Customize your loan to fit your farming needs. Whether it's for land purchase, equipment, or working capital, we have flexible options to support you.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 text-center mb-4">
                    <div className="choose__area__box__item ">
                      <span><i className="fas fa-cogs"></i></span>
                      <h2>Expert Advice</h2>
                      <p>Benefit from our team's expertise in agriculture finance. We provide personalized advice and guidance to help you make informed financial decisions.</p>
                    </div>
                  </div>
                </div>

                <div className="row ms-2">
                  <div className="col-lg-6 col-md-6 text-center mb-4">
                    <div className="choose__area__box__item ">
                      <span><i className="fab fa-cc-discover"></i></span>
                      <h2>Commitment to Sustainability</h2>
                      <p>We're committed to supporting sustainable farming practices. Our loans can help you invest in eco-friendly technologies and practices for a greener future.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 text-center choose__area__box__iteml ">
                    <div className="choose__area__box__item ">
                      <span><i className="fas fa-brain"></i></span>
                      <h2>Trusted Experience</h2>
                      <p>With over 25 years of experience, we've earned the trust of farmers across the country. Join the thousands who have benefited from our agricultural loan services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Description;
