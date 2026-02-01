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
                <section className="group-companies">
                     <div className="gc-left" style={{ 'textAlign': 'center' }}>
                            <h2>BIG TOWER GROUP OF COMPANIES</h2>
                            <div className="gc-quote">
                                <i>"Leading From The Front,leaving A Legacy Behind"</i>
                            </div>
                            <p>
                                The Big Tower Group comprises three companies within its fold, with the aim of catering to the construction industry under one roof.
                            </p>
                        </div>
                    <div className="gc-content">
                                            <div className="gc-right">
                            <div className="gc-card">
                                <img src={require('../images/companylogo.jpeg')} alt="Tesla Logo" className="gc-logo" />
                                <h4>Tesla Engineering & Constructions Pte Ltd</h4>
                                <h3>Fire, ACMV & ELV Systems</h3>
                                <p style={{ 'textAlign': 'justify' }}>
                                    Tesla brings a gamut of engineering services, right from design to maintenance, to be a one-stop-solutions provider for a diverse clientele.
                                </p>
                                 <Button color="primary" onClick={WebApps}>Read More</Button>   
                            </div>
                            <div className="gc-card">
                                <img src={require('../images/companylogo.jpeg')} alt="Scaffold Logo" className="gc-logo" />
                                <h4>SR Scaffold Engineering Pte Ltd</h4>
                                <h3>Scaffolding Solutions</h3>
                                <p style={{ 'textAlign': 'justify' }}>
                                    SR Scaffold Engineering is committed to empowering construction and maintenance projects worldwide by providing superior scaffold solutions.
                                </p>
                                 <Button color="primary" onClick={WebApps}>Read More</Button>   
                            </div>
                            <div className="gc-card">
                                <img src={require('../images/companylogo.jpeg')} alt="LTN Logo" className="gc-logo" />
                                <h4>Le Tian Pte Ltd</h4>
                                <h3>Builder Works, Demolition Solutions</h3>
                                <p style={{ 'textAlign': 'justify' }}>
                                    Le Tian Pte Ltd is a trusted provider of Additions & Alterations (A&A), builder works, and demolition solutions to deliver timely and effective solutions.
                                </p>
                                 <Button color="primary" onClick={WebApps}>Read More</Button>   
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            );
    }
}
