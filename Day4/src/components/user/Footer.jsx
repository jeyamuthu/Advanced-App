import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Footer.css'
function Footer() {
   
  return (
    <div>
    <footer id="footer" class="footer-1">
    <div class="main-footer widgets-dark typo-light">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="widget subscribe no-box">
                        <h5 class="widget-title">AgriTech<span></span></h5>
                        <p>About the AgriTech, little description will go here.. </p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="widget no-box">
                        <h5 class="widget-title">Quick Links<span></span></h5>
                        <ul class="thumbnail-widget">
                            <li>
                                <div class="thumb-content"><Link to="/home" style={{textDecoration:'none'}}>Home</Link></div>
                            </li>
                            <li>
                            <div class="thumb-content"><Link to="/about" style={{textDecoration:'none'}}>About</Link></div>

                            </li>
                            <li>
                            <div class="thumb-content"><Link to="/faq" style={{textDecoration:'none'}}>Faq</Link></div>


                            </li>
                            <li>
                            <div class="thumb-content"><Link to="/privacypage" style={{textDecoration:'none'}}>Privacy Policy</Link></div>


                            </li>
                            <li>
                            <div class="thumb-content"><Link to="/termpage" style={{textDecoration:'none'}}>Term & Condition</Link></div>

                           </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="widget no-box">
                        <h5 class="widget-title">Get Started<span></span></h5>
                        <p>Get access to your Agriculture Loan.</p>
                        <a class="btn" href="https://bit.ly/3m9avif" target="_blank"><Link to="/loanpage" style={{textDecoration:'none'}}>Apply Now</Link></a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="widget no-box">
                        <h5 class="widget-title">Contact Us<span></span></h5>
                        <p><a href="mailto:info@domain.com" title="glorythemes">jeyam@gmail.com</a></p>
                        <ul class="social-footer2">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</footer>

    </div>
  )
}

export default Footer;
