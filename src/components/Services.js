import React, { Component } from 'react';
import { DesktopWindows, Edit, Android, Public } from '@material-ui/icons'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows, faApple } from '@fortawesome/free-brands-svg-icons'; 
import { faGlobeAmericas, faGlobe } from '@fortawesome/free-solid-svg-icons';
import WindowsSlide1 from '../images/External/WindowsApp.png';
import WebSlide1 from '../images/External/EMR2.png';
import WebServices1 from '../images/External/pebannerfeatb.png';
import IOSAPP1 from '../images/External/iosApp.png'; 
import Android1 from '../images/External/androApp.png'; 
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import Button from '@material-ui/core/Button';

export class Services extends React.Component { 
    componentWillMount() {
        AOS.init({
            once: true,
            deladelay: 100
        });
    }
    render() { 
        function WindApps() {
            var elmnt = document.getElementById("WindApplication");
            elmnt.scrollIntoView({ behavior: 'smooth' });
        }
        function WebApps() {
            var elmnt = document.getElementById("WebSer");
            elmnt.scrollIntoView({ behavior: 'smooth' });
        }
        function WebServices() {
            var elmnt = document.getElementById("WebServices");
            elmnt.scrollIntoView({ behavior: 'smooth' });
        }
        function iOSApps() {
            var elmnt = document.getElementById("IOSServices");
            elmnt.scrollIntoView({ behavior: 'smooth' });
        }
        function AndroidApps() { 
            var elmnt = document.getElementById("AndroidServices");
            elmnt.scrollIntoView({ behavior: 'smooth' });
        }
        return (
            <div>
                <div className="Banner_Title Services_banner">
                    <h1>Services</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb_lists">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
                <div id="ServicePageContent" className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 Services_page" style={{ 'padding': '30px 0 0' }}>
                    <div className="col-XS-24 col-SM-24 col-SML-22 col-MD-44 LarScr-32 page_center">
                        <section className="service_section">
                            <ul>
                                <li>
                                    <div><FontAwesomeIcon icon={faWindows} /></div>
                                    <div>
                                        <h4>Windows Apps</h4>
                                        <p>A program that is written to run under the Microsoft Windows operating system, also called a Windows app.</p>
                                        <Button color="primary" onClick={WindApps}>Read More</Button> 
                                   </div>
                                </li>
                                <li>
                                    <div><FontAwesomeIcon icon={faGlobeAmericas} /></div>
                                    <div>
                                        <h4>Web Apps</h4>
                                        <p>
                                            An application in which all or some parts of the software are downloaded from the Web each time it is run.
                                        </p>
                                        <Button color="primary" onClick={WebApps}>Read More</Button>   
                                    </div>
                                </li>
                                <li>
                                    <div><FontAwesomeIcon icon={faGlobe} /></div>
                                    <div>
                                        <h4>Web Services</h4>
                                        <p>
                                            In general, any online service delivered from a Web site. there are countless applications and services.
                                           </p>
                                        <Button color="primary" onClick={WebServices}>Read More</Button>  
                                    </div>
                                </li>
                                <li>
                                    <div><FontAwesomeIcon icon={faApple} /></div>
                                    <div>
                                        <h4>iOS Apps</h4>
                                        <p>
                                            The Healthcare industry is quickly recognizing the benefits of mobility in healthcare.
                                        </p>
                                        <Button color="primary" onClick={iOSApps}>Read More</Button> 
                                    </div>
                                </li>
                                <li>
                                    <div><Android /></div>
                                    <div>
                                        <h4>Android Apps</h4>
                                        <p>
                                            Specialize in mobile healthcare apps that engages and delights users.
                                            We use lean innovation.
                                        </p>
                                        <Button color="primary" onClick={AndroidApps}>Read More</Button> 
                                    </div>
                                </li>
                                </ul>
                        </section> 
                    </div> 
                    <section className="winApp" id="WindApplication">
                        <div className="col-XS-24 col-SM-24 col-SML-22 col-MD-44 LarScr-32 page_center">
                            <div className="col-XS-24 col-SM-22 col-MD-24 LarScr-25">
                                <h2>Windows Applications</h2>
                                <p>
                                    A program that is written to run under the Microsoft Windows operating system, also called a "Windows app." All 32-bit Windows applications run in the 32-bit and 64-bit versions of Windows. Any 64-bit applications (there are few by comparison) require 64-bit Windows, which is the standard on most modern desktop and laptop PCs.
                            </p>
                                <p>
                                    Most applications that run in the 32-bit desktop versions of Windows will run in Windows 8 tablets, but not Windows RT tablets. See Windows 8 tablet.
                            </p>
                                <p>
                                    Our windows application has received the federal government’s “meaningful use 2015” stamp of approval earning Complete EHR Ambulatory Certification.
                            </p>
                            </div>
                            <div className="col-XS-24 col-SM-22 col-MD-24 LarScr-23" data-aos="fade-right" data-aos-delay="300">
                                <img src={WindowsSlide1} className="d-block w-100 pt-4" alt="Windows Slide1" />
                            </div>
                        </div>
                    </section> 
                    <section className="webApp" id="WebSer">
                        <div className="col-XS-24 col-SM-24 col-SML-22 col-MD-44 LarScr-32 page_center">
                            <div className="col-XS-24 col-SM-22 col-MD-24 LarScr-23" data-aos="fade-left" data-aos-delay="450">
                                <img src={WebSlide1} className="d-block w-100 pt-1" alt="Windows Slide1" />
                            </div>
                            <div className="col-XS-24 col-SM-22 col-MD-24 LarScr-25">
                                <h2>Web Applications</h2>
                                <p>
                                    An application in which all or some parts of the software are downloaded from the Web each time it is run. It may refer to browser-based apps that run within the user's Web browser, or to "rich client" desktop apps that do not use a browser or to mobile apps that access the Web for additional information.
                            </p>
                                <p>
                                    In a browser-based Web application, JavaScript instructions are contained within the Web page that is retrieved from a Web site. Combined with the HTML code that determines the visual layout and the CSS style sheet, the HTML, JavaScript and CSS are executed via the browser. In addition, processing at the server side is often widely performed to access databases and other networks. The data for a Web application may be stored locally or on the Web, or in both locations.
                            </p> 
                            </div> 
                        </div>
                    </section> 
                     
                    <section className="webSer" id="WebServices">
                        <div className="col-XS-24 col-SM-24 col-SML-22 col-MD-44 LarScr-32 page_center"> 
                            <div className="col-XS-24 col-SM-22 col-MD-24 LarScr-23">
                                <h2>Web Services</h2>
                                <p>
                                    In general, any online service delivered from a Web site. Since there are countless applications and services that emanate from the Web, such usage of the term is commonplace in articles from non-IT publications. Although the term may also appear in technical journals to refer to any offering on the Web, the astute journalist avoids such usage because "Web services" has a very specific definition.
                                    This is another example of generic names coined for specific technologies (see naming fiascos).
                            </p>
                                <p>
                                    We specialize in mobile healthcare apps that engages and delights users. We use lean innovation, user experience design, and agile software development to launch the right products quickly. Our experience with FDA and HIPAA regulations helps us keep your products compliant, safe and secure.
                            </p>
                            </div>
                            <div className="col-XS-24 col-SM-22 col-MD-24 LarScr-25" data-aos="zoom-in" data-aos-delay="600">
                                <img src={WebServices1} className="d-block w-100" alt="Windows Slide1" />
                            </div>
                        </div>
                    </section>
                    <section className="iosApp" id="IOSServices">
                        <div className="col-XS-24 col-SM-24 col-SML-22 col-MD-44 LarScr-32 page_center">
                            <div className="col-XS-24 col-SM-22 col-MD-24 LarScr-20 ios_imgdiv" data-aos="fade-right" data-aos-delay="750">
                                <img src={IOSAPP1} className="w-50" alt="Windows Slide1" />
                            </div>
                            <div className="col-XS-24 col-SM-22 col-MD-24 LarScr-28">
                                <h2>iOS Applications</h2>
                                <p>
                                    The Healthcare industry is quickly recognizing the benefits of mobility in healthcare i.e., mobile based applications and data. Healthcare mobility solutions make patients’ data available on the go,
                                    thus decreasing the medication errors by 75%.
                            </p>
                                <p>
                                    We specialize in mobile healthcare apps that engages and delights users. We use lean innovation, user experience design, and agile software development to launch the right products quickly. Our experience with FDA and HIPAA regulations helps us keep your products compliant, safe and secure.
                            </p>
                            </div> 
                        </div>
                    </section>
                    <section className="andApp" id="AndroidServices">
                        <div className="col-XS-24 col-SM-24 col-SML-22 col-MD-44 LarScr-32 page_center">
                            <div className="col-XS-24 col-SM-22 col-MD-24 LarScr-28">
                                <h2>Android Applications</h2>
                                <p>
                                    In general, any online service delivered from a Web site. Since there are countless applications and services that emanate from the Web, such usage of the term is commonplace in articles from non-IT publications. Although the term may also appear in technical journals to refer to any offering on the Web, the astute journalist avoids such usage because "Web services" has a very specific definition.
                                    This is another example of generic names coined for specific technologies (see naming fiascos).
                            </p>
                                <p>
                                    We specialize in mobile healthcare apps that engages and delights users. We use lean innovation, user experience design, and agile software development to launch the right products quickly. Our experience with FDA and HIPAA regulations helps us keep your products compliant, safe and secure.
                            </p>
                            </div>
                            <div className="col-XS-24 col-SM-22 col-MD-24 LarScr-20 and_imgdiv" data-aos="flip-left" data-aos-delay="850">
                                <img src={Android1} className="w-50" alt="Android Slide1" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            );
    }
}
