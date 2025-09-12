import React, { Component } from 'react';
import leftbottomcorner from '../images/leftbottomcorner.png';
import logo from '../images/BTR-Logo.png';
import cartton from '../images/image1.jpg';
import Lefttop_Corner from '../images/lefttopcorner.png';
import bottomrightcorner from '../images/bottomrightcorner.png';
import admission from '../images/SVG/admission.svg';
import emr from '../images/SVG/emr.svg';
import docs from '../images/SVG/docs.svg';
import ourmission from '../images/SVG/ourmission.svg';
import practice from '../images/SVG/practice.svg';
import overview from '../images/SVG/overview.svg';
import { FormatQuote } from '@material-ui/icons';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Home.css';


export class HomePage extends Component {
    componentWillMount() {
        AOS.init({
            once: true,
            delay: 100
        });
    }
    render() {
        return (
            <div id="Overall" className="overallimg-div Homepage">
                <section className="try_now">
                    <div >
                        <div id="logoContent" className="pull-left logo-content">
                            <img src={logo} className="compImg" alt="Company Logo" style={{ marginTop: '200px', width: '200px', height: '90px' }} // Set your desired width and height
                            />
                            <div >
                                <p style={{ 'margin': '0px', 'fontSize': '40px' }}>ENGINEERING EXCELLENCE</p>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="about_us">
                    <div className="about-us-content">
                        <img src={cartton} alt="About Us" className="about-us-img" />
                        <div className="about-us-text">
                            <h2>ABOUT US</h2>
                            <h3>
                                <span style={{ color: '#009fe3', fontWeight: 'bold' }}>STRONGER THE FOUNDATION,</span><br />
                                <span style={{ color: '#009fe3', fontWeight: 'bold' }}>GREATER THE HEIGHTS</span>
                            </h3>
                            <p>
                                Welcome to a Group that has dotted the skyline of Singapore (and major cities worldwide) for more than two decades. Over the years, we have built a legacy of trust, technological prowess and timely delivery. Today, we are a renowned name in the construction space, a niche that we have carved, driven by a vision and fuelled by passion. Our single-minded mission is to ensure that we deliver not just customer satisfaction, but customer delight. It is what inspires us to crack complex projects and execute them seamlessly, creating a loyal customer base that continues to come back to us, time and again. Join us as we take you through our services and establish why we are the one-stop-solution for all your construction needs.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="vision-mission-values">
                    <div className="vmv-bg"></div>
                    <div className="vmv-content">
                        <div className="vmv-item" style={{ 'height': '400px' }}>
                            <div className="vmv-icon">
                                <img src={require('../images/build.jpg')} alt="Vision" />
                            </div>
                            <h2>Vision</h2>
                            <div className="vmv-underline"></div>
                            <p>
                                To transform the construction industry globally by creating opportunities, driving growth, and delivering meaningful impact through passion, innovation, and commitment to excellence.
                            </p>
                        </div>
                        <div className="vmv-item" style={{ 'height': '400px' }}>
                            <div className="vmv-icon">
                                <img src={require('../images/build.jpg')} alt="Mission" />
                            </div>
                            <h2>Mission</h2>
                            <div className="vmv-underline"></div>
                            <p>
                                To deliver safe, high-quality, and reliable products for the construction and process industries while fostering trust and collaboration with our customers for mutual growth and enduring partnerships.
                            </p>
                        </div>
                        <div className="vmv-item" style={{ 'height': '400px' }}>
                            <div className="vmv-icon">
                                <img src={require('../images/build.jpg')} alt="Values" />
                            </div>
                            <h2>Our Values</h2>
                            <div className="vmv-underline"></div>
                            <p>
                                A strong work ethic, integrity and commitment to customer delight are values that are at the core of all that we do. For us, a project is more than just a deliverable; it is ensured to be a holistic and wholesome experience that clients will remember long after the project is over.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="our-strength">
                    <div className="strength-header">
                        <img src={require('../images/lefttopcorner.png')} alt="" className="strength-corner" />
                        <h2>OUR STRENGTH</h2>
                    </div>
                    <div className="strength-quote">
                        <span>MAKING MEASURABLE <span className="blue">MILESTONES</span>, WITH <span className="blue">PRICELESS PEOPLE</span></span>
                    </div>
                    <div className="strength-grid">
                        <div className="strength-card">
                            <img src={require('../images/workforce.jpg')} alt="Workforce" className="strength-icon" />
                            <div className="strength-value blue">2500+</div>
                            <div className="strength-label">Workforce</div>
                        </div>
                        <div className="strength-card">
                            <img src={require('../images/experince.jpeg')} alt="Experience" className="strength-icon" />
                            <div className="strength-value blue">15+</div>
                            <div className="strength-label">Years of Experience</div>
                        </div>
                        <div className="strength-card">
                            <img src={require('../images/project.png')} alt="Projects" className="strength-icon" />
                            <div className="strength-value blue">5000+</div>
                            <div className="strength-label">Completed Projects</div>
                        </div>
                        <div className="strength-card">
                            <img src={require('../images/client.jpeg')} alt="Clients" className="strength-icon" />
                            <div className="strength-value blue">300+</div>
                            <div className="strength-label">Clients</div>
                        </div>
                        <div className="strength-card">
                            <img src={require('../images/certificate.webp')} alt="Certifications" className="strength-icon" />
                            <div className="strength-value blue">30</div>
                            <div className="strength-label">Certifications</div>
                        </div>
                        <div className="strength-card">
                            <img src={require('../images/industries.png')} alt="Industries" className="strength-icon" />
                            <div className="strength-value blue">50+</div>
                            <div className="strength-label">Industries Served</div>
                        </div>
                    </div>
                </section>
                <section className="group-companies">
                    <div className="gc-content">
                        <div className="gc-left">
                            <h2>BIG TOWER GROUP OF COMPANIES</h2>
                            <div className="gc-quote">
                                <i>"LEADING FROM THE FRONT,LEAVING A LEGACY BEHIND"</i>
                            </div>
                            <p>
                                The Big Tower Group comprises three companies within its fold, with the aim of catering to the construction industry under one roof.
                            </p>
                        </div>
                        <div className="gc-right">
                            <div className="gc-card">
                                <img src={require('../images/companylogo.jpeg')} alt="Tesla Logo" className="gc-logo" />
                                <h4>Tesla Engineering & Constructions Pte Ltd</h4>
                                <h3>Fire, ACMV & ELV Systems</h3>
                                <p style={{ 'textAlign': 'justify' }}>
                                    Tesla brings a gamut of engineering services, right from design to maintenance, to be a one-stop-solutions provider for a diverse clientele.
                                </p>
                            </div>
                            <div className="gc-card">
                                <img src={require('../images/companylogo.jpeg')} alt="Scaffold Logo" className="gc-logo" />
                                <h4>SR Scaffold Engineering Pte Ltd</h4>
                                <h3>Scaffolding Solutions</h3>
                                <p style={{ 'textAlign': 'justify' }}>
                                    SR Scaffold Engineering is committed to empowering construction and maintenance projects worldwide by providing superior scaffold solutions.
                                </p>
                            </div>
                            <div className="gc-card">
                                <img src={require('../images/companylogo.jpeg')} alt="LTN Logo" className="gc-logo" />
                                <h4>Le Tian Pte Ltd</h4>
                                <h3>Builder Works, Demolition Solutions</h3>
                                <p style={{ 'textAlign': 'justify' }}>
                                    Le Tian Pte Ltd is a trusted provider of Additions & Alterations (A&A), builder works, and demolition solutions to deliver timely and effective solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="fcols">
                    <h1>Our Healthcare Services</h1>
                    <div className="flex-wrap flex-center-x">
                        <article>
                            <div>
                                <img src={admission} alt="Admission Image" alt="ADT Thumbnail" />
                                <header>ADT</header>
                                <p>
                                    Patients transition from one provider or healthcare setting to another as the
                                    patient's health care needs require. These transitions trigger Electronic Health Records to
                                    generate Admission Discharge Transfer (ADT) notifications that identify the patient along with
                                    important details that provide insight to an extremely complex set of care decisions being made by care
                                    teams, families and the patient.
                                </p>
                            </div>
                        </article>
                        <article>
                            <div>
                                <img src={practice} alt="Practice Image" alt="Practice Thumbnail" />
                                <header>PMS</header>
                                <p>
                                    Practice Management System (PMS) is a form of system found in medical offices that is designed to deal with day-to-day operations using desktop system ,
                                    client-server system and Internet-based system. Medical informatics such as this are often requested with little notice. While vendors for EMRs and PMS can be different, the IT world is seeing the two entities combine at an increasing rate.
                                </p>
                            </div>
                        </article>
                        <article>
                            <div>
                                <img src={emr} alt="EMR Image" alt="EMR Thumbnail" />
                                <header>EMR</header>
                                <p>
                                    EMR provide a ambulatory practices with recent technology and services on your
                                    finger tips with our user friendly mobile and tablet applications on Android and
                                    iOS platforms. Doctor can get better results for their clinical practices.
                                    We create an application that understands the flow of the ambulatory practices
                                    from appointments to SOAP notes generation.

                                </p>
                            </div>
                        </article>
                        <article>
                            <div>
                                <img src={docs} alt="Documents Image" alt="DMS Thumbnail" />
                                <header>DMS</header>
                                <p>
                                    The health care industry utilizes a lot of forms and paperwork. Patient forms, doctor
                                    notes, payment receipts, insurance cards, diagnosis codes, lab results all from just
                                    one patient! Well, you don't have to look any further when seeking a document
                                    management solution that will keep your organization's medical records safe, secure
                                    and organized.
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="omission">
                    <div className="lhs_mode">
                        <h1>OUR MISSION</h1>
                        <article data-aos="fade-right">
                            <p>
                                <FormatQuote style={{ 'transform': 'scaleX(-1)' }} />Together with our customers and partners, we are creating a sustainable future for health care. Together we are charting a course to better health <FormatQuote />
                            </p>
                        </article>
                    </div>
                    <div className="rhs_mode">
                        <img src={ourmission} alt="Mission Image" alt="Mission Thumbnail" />
                    </div>
                </section>
                <section className="omission overview">
                    <div className="lhs">
                        <img src={overview} alt="Overview Image" alt="Overview Thumbnail" />
                    </div>
                    <div className="rhs">
                        <h1>Overview</h1>
                        <article data-aos="zoom-in">
                            <p>
                                Hospital Information system is a hospital software designed for small and mid-size hospitals and clinics, individual doctors, physicians as well as Multi-Specialty Hospitals. The overriding objective of the Hospital Information system is to reduce the time of Doctors in Managing the Various patients such as In Patients / Outpatients and Emergency. This is to be achieved by leveraging technology to harmonize procedures across the departments of Hospital Information, and beyond to geographical level, and to allow providers to track and manage the patient electronically minimizing the need for visitingthe patient location.
                                All the services are electronically linked and managed remotely by designing a Web Interface.
                            </p>
                        </article>
                    </div>
                </section> */}
            </div>
        );
    }
}
