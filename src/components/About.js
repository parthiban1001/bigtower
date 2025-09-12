import { Devices, Edit, FormatQuote, Launch, Lock,Notifications,Mail } from '@material-ui/icons';
import React, { Component } from 'react'; 
import Button from '@material-ui/core/Button';
import 'aos/dist/aos.css';
import AOS from 'aos';
export class About extends Component {

    componentWillMount() {
        AOS.init({
            once: true,
            delay: 100
        });
    }

    render() {
        return (
            <div>
                <div className="Banner_Title About_banner">
                    <h1>About</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb_lists">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 About_page" style={{ 'padding': '30px 0' }}>

                    <div className="col-XS-24 col-SM-22 col-MD-42 LarScr-35 page_center">
                        <div id="SectionI" className="About_info">
                            <div className="col-XS-24 col-SM-12 col-MD-22 LarScr-24 companysInfo" data-aos="fade-right"></div>
                        <div className="col-XS-24 col-SM-12 col-MD-24 LarScr-21">
                            <div>
                                <h1 className="founder">Senthil Kumar Sithuraj</h1>
                                <p>CEO & Founder</p>
                             </div> 
                                <section>
                                    <p>
                                        Senthil Kumar Sithuraj, is C.E.O. and founder of AppSure Technologies. In 2011 he founded AppSure Technologies to apply cutting edge technological advances to facilitate data analysis and efficient management of medical treatment.
                                        AppSure Technologies hosts AppSure EMR. It provide the clinical needs of physicians and patients who need multi-modal treatment tracking, monitoring and interaction with caregivers.
                                   </p> 
                            </section>
                            <footer>
                                <a href="/ContactUs" target="_self">
                                    <Button variant="outlined" color="primary" startIcon={<Launch />}>Contact Us</Button>
                                </a> 
                            </footer>
                            </div>
                    </div>
                        <div className="Mi_Vi">
                            <section className="boxing" data-aos="fade-up-right" data-aos-delay="300">
                            <h3>Our Mission</h3>
                            <p>
                                <FormatQuote />
                                Together with our customers and partners, we are creating a sustainable future for health care. 
                                Together we are charting a course to better health
                                <FormatQuote />
                            </p>
                        </section>

                            <section className="boxing" data-aos="fade-up-left" data-aos-delay="300">
                            <h3>Our Vision</h3>
                            <p>
                                <FormatQuote />
                                Together with our customers and partners, we are creating a sustainable future for health care.
                                Together we are charting a course to better health
                                <FormatQuote />
                            </p>
                        </section>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }

}
