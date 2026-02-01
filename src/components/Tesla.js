import React, { Component } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export class Tesla extends React.Component {
    componentWillMount() {
        AOS.init({
            once: true,
            delay: 100
        });
    }
    render() {
        return (
            <div>
                {/* MAIN SECTION */}
                <section className="scaffold-section" style={{ background: 'linear-gradient(120deg, #eaf3fa 60%, #f7fafd 100%)', padding: '40px 0' }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        maxWidth: 1200,
                        margin: '0 auto',
                        borderRadius: 18,
                        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                        background: '#fff'
                    }}>
                        {/* LEFT PANEL */}
                        <div style={{
                            flex: '1 1 340px',
                            background: 'linear-gradient(120deg, #0071bc 80%, #009fe3 100%)',
                            color: '#fff',
                            padding: '48px 32px 32px 32px',
                            minWidth: 320,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            borderRadius: '24px 0 0 24px'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 30,
                                    fontWeight: 800,
                                    letterSpacing: 1,
                                    marginBottom: 32,
                                    lineHeight: 1.2
                                }}>
                                    FIRE, ACMV<br />& ELV SYSTEMS
                                </div>
                                <div style={{ marginBottom: 32 }}>
                                    <h3 style={{
                                        color: '#ffd600',
                                        fontWeight: 700,
                                        fontSize: 22,
                                        margin: 0,
                                        marginBottom: 18
                                    }}>About Tesla</h3>
                                    <p style={{
                                        fontSize: 15,
                                        lineHeight: 1.7,
                                        color: '#eaf6ff'
                                    }}>
                                        Tesla Engineering & Constructions Pte Ltd brings over a decade’s experience and extensive expertise of engineering services to its clients. It provides an array of offerings that include design, construction, facility management and maintenance. Under design, it specialises in Fire, ACMV & ELV System Design, Authority Submissions, Archi/M&E RI, IFT Drawings, and Project Feasibility Studies. As part of its Construction services, it offers Project Management, Procurement, Shop/IFC Drawings, Procurement & Logistics, T&C and Handing over. As a registered in-house contractor, it provides adhoc services under Facility Management. To completely hand-hold its clients through the entire journey, it also extends maintenance services like AMC Contracts, Preventive Maintenance and Repair & Servicing. From the Oil & Gas industry to Pharmaceutical industry, from Residential Buildings to Industrial & Commercial Buildings, clients are diverse and spread across different sectors. The company is BCA registered and ISO-certified.
                                    </p>
                                </div>
                                <div style={{ marginTop: 32 }}>
                                    <div style={{
                                        fontWeight: 700,
                                        color: '#00e6ff',
                                        fontSize: 18,
                                        marginBottom: 8
                                    }}>
                                        Mr. Arunachalam Saravanakumar
                                    </div>
                                    <div style={{
                                        fontSize: 15,
                                        color: '#fff',
                                        marginBottom: 12
                                    }}>
                                        Director, Tesla Engineering & Constructions Pte Ltd
                                    </div>
                                    <div style={{
                                        fontWeight: 700,
                                        fontSize: 16,
                                        marginBottom: 8,
                                        color: '#ffd600'
                                    }}>
                                        About the Director
                                    </div>
                                    <div style={{
                                        fontSize: 15,
                                        color: '#eaf6ff',
                                        lineHeight: 1.7
                                    }}>
                                        Mr. Saravanakumar is a highly skilled Project Director with extensive experience and a proven ability to deliver complex projects with excellence and precision. His expertise lies in managing substantial budgets, coordinating cross-functional teams, and driving high-profile projects to completion under demanding timelines. Known for his collaborative and innovative leadership, he seamlessly navigates large-scale initiatives across diverse industries. By consistently achieving outstanding outcomes, he enhances the company’s reputation for quality. Dedicated to advancing project management standards, Mr. Saravanakumar sets new milestones through his commitment to progress and success in every endeavor.
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: 40, textAlign: 'center' }}>
                                {/* <img src={require('../images/CompanyLogo.png')} alt="Tesla Logo" style={{ maxWidth: 160, width: '100%', borderRadius: 12, background: '#fff', padding: 8 }} /> */}
                            </div>
                        </div>
                        {/* RIGHT PANEL */}
                        <div style={{
                            flex: '2 1 500px',
                            padding: '48px 16px 32px 16px',
                            background: 'rgba(255,255,255,0.97)',
                            minWidth: 320,
                            borderRadius: '0 24px 24px 0'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 24,
                                    fontWeight: 800,
                                    color: '#0071bc',
                                    marginBottom: 32,
                                    textAlign: 'center',
                                    letterSpacing: 1
                                }}>
                                    Services
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    gap: 32,
                                    marginBottom: 32
                                }}>
                                    {/* Fire System */}
                                    <div style={{
                                        flex: '1 1 260px',
                                        minWidth: 220,
                                        maxWidth: 320,
                                        background: '#fff',
                                        borderRadius: 18,
                                        boxShadow: '0 2px 12px #e0e7ef',
                                        padding: 28,
                                        marginBottom: 16,
                                        textAlign: 'center',
                                        transition: 'transform 0.2s',
                                        cursor: 'pointer'
                                    }}>
                                        <div style={{
                                            width: 90,
                                            height: 90,
                                            margin: '0 auto 12px',
                                            background: '#eaf6ff',
                                            borderRadius: '18px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 2px 8px #e0e7ef'
                                        }}>
                                            <img src={require('../images/project.png')} alt="Fire System" style={{ width: 60, height: 60, objectFit: 'contain' }} />
                                        </div>
                                        <div style={{ fontWeight: 700, color: '#0071bc', fontSize: 19, marginBottom: 12 }}>Fire System</div>
                                        <ul style={{ textAlign: 'left', color: '#222', fontSize: 15, lineHeight: 1.7, paddingLeft: 18 }}>
                                            <li>Sprinkler, Deluge, Pre-action System</li>
                                            <li>Wet Riser, Dry Riser, Hose Reel, Fire Hydrant System</li>
                                            <li>Gas Suppression System (CO2, FM200, Novec, Inert Gas, Etc)</li>
                                            <li>Kitchen Fire Suppression System</li>
                                            <li>Fire Extinguishers</li>
                                            <li>Fire Alarm System (Conventional, Addressable)</li>
                                            <li>Public Address System</li>
                                            <li>Firemen Intercom System, PWD System</li>
                                        </ul>
                                    </div>
                                    {/* ACMV System */}
                                    <div style={{
                                        flex: '1 1 260px',
                                        minWidth: 220,
                                        maxWidth: 320,
                                        background: '#fff',
                                        borderRadius: 18,
                                        boxShadow: '0 2px 12px #e0e7ef',
                                        padding: 28,
                                        marginBottom: 16,
                                        textAlign: 'center',
                                        transition: 'transform 0.2s',
                                        cursor: 'pointer'
                                    }}>
                                        <div style={{
                                            width: 90,
                                            height: 90,
                                            margin: '0 auto 12px',
                                            background: '#eaf6ff',
                                            borderRadius: '18px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 2px 8px #e0e7ef'
                                        }}>
                                            <img src={require('../images/project.png')} alt="ACMV System" style={{ width: 60, height: 60, objectFit: 'contain' }} />
                                        </div>
                                        <div style={{ fontWeight: 700, color: '#0071bc', fontSize: 19, marginBottom: 12 }}>ACMV System</div>
                                        <ul style={{ textAlign: 'left', color: '#222', fontSize: 15, lineHeight: 1.7, paddingLeft: 18 }}>
                                            <li>VRV / Split Unit Systems</li>
                                            <li>Dehumidifiers</li>
                                            <li>Mechanical Ventilation with Duct works</li>
                                            <li>Dust Collector</li>
                                            <li>Chilled Water System</li>
                                        </ul>
                                    </div>
                                    {/* ELV System */}
                                    <div style={{
                                        flex: '1 1 260px',
                                        minWidth: 220,
                                        maxWidth: 320,
                                        background: '#fff',
                                        borderRadius: 18,
                                        boxShadow: '0 2px 12px #e0e7ef',
                                        padding: 28,
                                        marginBottom: 16,
                                        textAlign: 'center',
                                        transition: 'transform 0.2s',
                                        cursor: 'pointer'
                                    }}>
                                        <div style={{
                                            width: 90,
                                            height: 90,
                                            margin: '0 auto 12px',
                                            background: '#eaf6ff',
                                            borderRadius: '18px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 2px 8px #e0e7ef'
                                        }}>
                                            <img src={require('../images/project.png')} alt="ELV System" style={{ width: 60, height: 60, objectFit: 'contain' }} />
                                        </div>
                                        <div style={{ fontWeight: 700, color: '#0071bc', fontSize: 19, marginBottom: 12 }}>ELV System</div>
                                        <ul style={{ textAlign: 'left', color: '#222', fontSize: 15, lineHeight: 1.7, paddingLeft: 18 }}>
                                            <li>Card Access</li>
                                            <li>CCTV System</li>
                                            <li>FIDS System</li>
                                            <li>SCADA & PLC</li>
                                            <li>E&amp;I</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* PROJECTS SECTION */}
                <section className="tesla-projects-section" style={{ background: '#f7fafd', padding: '40px 0' }}>
                    <h2 style={{ textAlign: 'center', color: '#0071bc', fontWeight: 800, fontSize: 26, marginBottom: 32, letterSpacing: 1 }}>Our Projects</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: 32,
                        maxWidth: 1200,
                        margin: '40px auto 0'
                    }}>
                        {/* Example projects, update images/labels as needed */}
                        {[
                            { img: 'project1.png', label: 'Cable Tunnel Fire Alarm – Maincon' },
                            { img: 'project2.png', label: 'Cable Tunnel Fire Alarm – Maincon' },
                            { img: 'project3.png', label: 'NS Cable Tunnel – Security Systems' },
                            { img: 'project4.png', label: 'NS Cable Tunnel – Security Systems' },
                            { img: 'project5.png', label: 'NS Cable Tunnel – ISOSS Integration' },
                            { img: 'project6.png', label: 'FA & Fire Detection System – Pfizer' },
                            { img: 'project7.png', label: 'Chemical Based Explosion Suppression' },
                            { img: 'project8.png', label: 'Chemical Based Explosion Suppression' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                background: '#fff',
                                borderRadius: 16,
                                boxShadow: '0 2px 12px #e0e7ef',
                                padding: 16,
                                textAlign: 'center',
                                transition: 'transform 0.2s',
                                cursor: 'pointer'
                            }}>
                                <img src={require(`../images/${item.img}`)} alt={item.label} style={{
                                    width: '100%',
                                    height: 140,
                                    objectFit: 'cover',
                                    borderRadius: 10,
                                    marginBottom: 12,
                                    transition: 'transform 0.2s'
                                }} />
                                <p style={{ marginTop: 0, fontWeight: 700, color: '#0071bc', fontSize: 15 }}>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* RESPONSIVE STYLES */}
                <style>
                    {`
                    @media (max-width: 1100px) {
                        .tesla-main-flex {
                            flex-direction: column !important;
                        }
                    }
                    @media (max-width: 900px) {
                        .tesla-services-section > div {
                            flex-direction: column !important;
                        }
                        .tesla-services-section > div > div {
                            max-width: 100% !important;
                        }
                    }
                    @media (max-width: 700px) {
                        .tesla-projects-section .tesla-projects-grid {
                            grid-template-columns: 1fr !important;
                        }
                        .tesla-services-section > div {
                            gap: 16px !important;
                        }
                        .tesla-services-section > div > div {
                            padding: 12px !important;
                        }
                        .tesla-about-section, .tesla-projects-section, .tesla-services-section {
                            padding: 18px 2px 10px 2px !important;
                        }
                        section > div, section > div > div {
                            border-radius: 0 !important;
                        }
                    }
                    `}
                </style>
            </div>
        );
    }
}