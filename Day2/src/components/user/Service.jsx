import React from 'react';
import '../../assets/css/Service.css'; // Import your corrected CSS file here

function Service() {
    return (
        <div className="our-service-sass">
            <div className="container">
                <div className="theme-title-one text-center">
                    <div className="icon-box hide-pr">
                        <img src="http://html.creativegigs.net/rogan/rogan-c/html/images/shape/bg-shape1.svg" alt="" className="bg-shape" />
                        <img src="http://html.creativegigs.net/rogan/rogan-c/html/images/icon/icon23.svg" alt="" className="icon" />
                    </div>
                    <h2 className="main-title">Supporting Agriculture with Flexible Loan Options</h2>
                </div>

                <div className="inner-wrapper">
                    <div className="row">
                     
                        <div className="col-lg-4 single-block aos-init aos-animate" data-aos="fade-up">
                            <div className="service-block">
                                <i className="flaticon-web user"></i>
                                <h5 className="title"><a href="#">Flexible Loan Terms</a></h5>
                                <p>Our agriculture loan options come with flexible terms to suit the needs of farmers, ranchers, and agricultural businesses.</p>
                                <a className="detail-button" href="#"><i className="icon-img"><img src="https://cdn-icons-gif.flaticon.com/6172/6172532.gif" width="100%" alt="Detail Button" /></i></a>
                            </div>
                        </div>

                        {/* Service Block 2 */}
                        <div className="col-lg-4 single-block aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-block">
                                <i className="flaticon-value icon-s"></i>
                                <h5 className="title"><a href="#">Competitive Interest Rates</a></h5>
                                <p>We offer competitive interest rates on our agriculture loans, ensuring affordability for farmers and agricultural entrepreneurs.</p>
                                <a className="detail-button" href="#"><i className="icon-img"><img src="https://cdn-icons-gif.flaticon.com/6172/6172518.gif" width="100%" alt="Detail Button" /></i></a>
                            </div>
                        </div>

                        {/* Service Block 3 */}
                        <div className="col-lg-4 single-block aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                            <div className="service-block">
                                <i className="flaticon-login icon-s"></i>
                                <h5 className="title"><a href="#">Quick Approval Process</a></h5>
                                <p>Our streamlined loan approval process ensures that farmers get access to funds quickly for their agricultural projects.</p>
                                <a className="detail-button" href="#"><i className="icon-img"><img src="https://cdn-icons-gif.flaticon.com/6172/6172512.gif" width="100%" alt="Detail Button" /></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
