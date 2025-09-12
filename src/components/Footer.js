import React from 'react';
import footlogo from '../images/footlogo.png';
import {
    faHome, faCog, faSignInAlt, faInfoCircle, faPhoneSquare, faMapMarker,
    faPhone, faPrint, faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebookF, faXing } from "@fortawesome/free-brands-svg-icons";
import { Home, Settings, Phone, LocationOn, Print, MailOutline, PhoneIphone, ArrowForward, InfoOutlined } from '@material-ui/icons';
export default function Footer() {

      
    return (
        <div className="footer-div-des-2">
            <div className="blurred-background"></div>
            <div className="footercontent-div">
                <div className="footer-list section1 col-XS-24 col-SM-8 col-MD-13 LarScr-12">
                    <img src={footlogo} alt="Company Logo in footer" />
                    <ul className="list-unstyled">
                        <li>
                            <span>A global leader in next-generation digital
                            services and consulting. we bring you powerful
                            advantages to navigate your digital transformation
                             </span>
                        </li>
                    </ul>
                </div>
                <div className="footer-list section2 col-XS-24 col-SM-6 col-MD-8 LarScr-6">
                    <div className="headline"><span>Links</span></div>
                    <div>
                        <ul className="list-unstyled">
                            <li><Home /><a href="/">Home</a></li>
                            <li><Settings /><a href="/Products">Products</a></li>
                            <li><ArrowForward /><a href="/SignUp">SignUp</a></li>
                            <li><InfoOutlined /><a href="/About">About</a></li>
                            <li><PhoneIphone /><a href="/ContactUs">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-list section3 col-XS-24 col-SM-10 col-MD-8 LarScr-6 d-none">
                    <div className="headline"><span>Products</span></div> 
                    <div>
                        <ul className="list-unstyled">
                            <li>New Company Alerts</li>
                            <li>Lead list</li>
                            <li>Research Reports</li>
                            <li>Charges Search</li>
                            <li>Import/Export</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-list section3 col-XS-24 col-SM-10 col-MD-13 LarScr-12">
                    <div className="headline"><span>Contact</span></div>  
                    <div>
                        <ul className="list-unstyled">
                            <li className="d-flex">
                                <span><LocationOn/></span>
                                <span style={{ 'width': '227px' }}>
                                    Appsure Technologies Private Limited AN Tower | Royal Nagar | Dharmapuri Tamilnadu | India - 636705
                                </span>
                            </li>
                            <li>
                                <span><Phone/></span>
                                <span>+91 4342 231199</span>
                            </li> 
                            <li>
                                <span><MailOutline/></span>
                                <span>info@appsuretechnologies.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-list Subscribe_section col-XS-24 col-SM-24 col-MD-14 LarScr-12"> 
                    <div className="col-XS-15 col-SM-9 col-MD-33 LarScr-30 p-0">
                        <input id="txtsubsemail" placeholder="Email" className="input-style" />
                        <label for="txtsubsemail" className="d-none">Subscribe</label>
                    </div>
                    <div className="col-XS-9 col-SM-9 col-MD-15 LarScr-18 p-0"> 
                        <button type="button" className="btn subsribe-btn">Subscribe</button>
                    </div>
                    <div className="social-buttons clear">
                        <FontAwesomeIcon icon={faFacebookF} className="social-btn facebook" title="facebook" />
                        <FontAwesomeIcon icon={faInstagram} className="social-btn instagram" title="Instagram" />
                        <FontAwesomeIcon icon={faTwitter} className="social-btn twitter" title="Twitter" />
                    </div>
                </div>
            </div>
        </div>
    );

}
