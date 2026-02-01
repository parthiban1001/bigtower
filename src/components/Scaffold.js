import React, { Component } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export class Scaffold extends React.Component {
    componentWillMount() {
        AOS.init({
            once: true,
            delay: 100
        });
    }
    render() {
        return (
            <div>
                {/* SCAFFOLDING SOLUTIONS SECTION */}
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
                        {/* Left: About & Director */}
                        <div style={{
                            flex: 1,
                            minWidth: 320,
                            padding: 32,
                            background: 'linear-gradient(120deg, #0071bc 80%, #009fe3 100%)',
                            color: '#fff',
                            borderRadius: '18px 0 0 18px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 24, letterSpacing: 1 }}>SCAFFOLDING SOLUTIONS</h2>
                                <h3 style={{
                                    color: '#ffd600',
                                    fontWeight: 700,
                                    marginTop: 24,
                                    fontSize: 20
                                }}>About <span style={{
                                    color: '#fff',
                                    background: '#0071bc',
                                    borderRadius: 4,
                                    padding: '0 6px'
                                }}>SR Scaffold Engineering</span></h3>
                                <p style={{ marginTop: 16, color: '#eaf6ff', lineHeight: 1.7 }}>
                                    SR Scaffold Engineering Pte Ltd is a leader in innovation and reliability, transforming the scaffolding industry with solutions that set new standards of excellence. From its humble beginnings to becoming an industry pioneer, the company’s journey reflects resilience, growth, and an unwavering commitment to delivering value. Specializing in a variety of customized scaffolding solutions, the company combines precision and creativity to address unique project requirements. Safety remains a top priority, with SR Scaffold Engineering adhering to rigorous standards to safeguard clients and teams alike.
                                </p>
                                <p style={{ marginTop: 16, color: '#eaf6ff', lineHeight: 1.7 }}>
                                    With customer-centricity at its core, the company consistently exceeds client expectations, building lasting relationships and a reputation for excellence. Going forward, it is dedicated to consistently pushing boundaries, advancing safety, quality, and innovation, and contributing to the success of its clients’ projects.
                                </p>
                                <div style={{ margin: '32px 0 0 0', textAlign: 'center' }}>
                                    {/* <img src={require('../images/CompanyLogo.png')} alt="SR Scaffold Logo" style={{ maxWidth: 140, width: '100%' }} /> */}
                                </div>
                                <h3 style={{ color: '#ffd600', fontWeight: 700, marginTop: 32, fontSize: 18 }}>Mr. Narayanan Sundarrajan</h3>
                                <div style={{ color: '#00e6ff', fontWeight: 500, marginBottom: 8 }}>Director, SR Scaffold Engineering Pte Ltd</div>
                                <h4 style={{ color: '#ffd600', fontWeight: 700, marginTop: 8 }}>About the Director</h4>
                                <p style={{ marginTop: 12, color: '#eaf6ff', lineHeight: 1.7 }}>
                                    Mr. Sundar is a seasoned Project Director with extensive experience and proven track record of delivering complex projects with precision and excellence. Known for navigating large-scale projects across diverse industries with ease, his leadership style is focused on collaboration, innovation, and goal-oriented execution. His expertise spans managing multi-disciplinary teams, substantial budgets, and delivering high-profile projects under challenging timelines, enhancing the company’s reputation for excellence. Dedicated to pushing boundaries, Mr. Sundar continues to set benchmarks in project management, driving innovation and success across all endeavours.
                                </p>
                            </div>
                        </div>
                        {/* Right: Services & Certifications */}
                        <div style={{
                            flex: 1.2,
                            minWidth: 320,
                            padding: 32,
                            background: '#f7fafd',
                            borderRadius: '0 18px 18px 0'
                        }}>
                            <h3 style={{ color: '#0071bc', fontWeight: 700, marginBottom: 24, textAlign: 'center', fontSize: 24 }}>Services</h3>
                            {/* Services Hex Grid */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: 24,
                                marginBottom: 32
                            }}>
                                {[
                                    { img: 'project1.png', label: 'Cantilever Scaffold' },
                                    { img: 'project1.png', label: 'Independent Scaffold' },
                                    { img: 'project1.png', label: 'Mobile Scaffold' },
                                    { img: 'project1.png', label: 'Access Tower' },
                                    { img: 'project1.png', label: 'Perimeter Scaffold' },
                                    { img: 'project1.png', label: 'Hanging Scaffold' }
                                ].map((item, idx) => (
                                    <div key={idx} style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 110
                                    }}>
                                        <div style={{
                                            width: 90,
                                            height: 90,
                                            background: '#fff',
                                            border: '3px solid #009fe3',
                                            clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: 8,
                                            boxShadow: '0 2px 8px #e0e7ef'
                                        }}>
                                            <img src={require(`../images/project1.png`)} alt={item.label} style={{ width: 70, height: 70, objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ fontWeight: 600, color: '#0071bc', textAlign: 'center', fontSize: 15, lineHeight: 1.2 }}>
                                            {item.label.split(' ').map((word, i, arr) =>
                                                arr.length > 1 && i === arr.length - 1 ? <span key={i}><br />{word}</span> : <span key={i}> {word}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <h3 style={{ color: '#0071bc', fontWeight: 700, margin: '32px 0 16px', textAlign: 'center', fontSize: 20 }}>Certifications</h3>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 16,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {['cert1.png', 'cert2.png', 'cert3.png', 'cert4.png', 'cert5.png', 'cert6.png'].map((img, idx) => (
                                    <img key={idx} src={require(`../images/project1.png`)} alt="Certification" style={{ height: 40, background: '#fff', borderRadius: 6, padding: 4 }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* PROJECTS SECTION */}
                <section className="tesla-projects-section" style={{ background: '#f7fafd', padding: '40px 0' }}>
                    <h2 style={{ textAlign: 'center', color: '#0071bc', fontWeight: 700, fontSize: 26, marginBottom: 32 }}>Our Projects</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: 32,
                        maxWidth: 1200,
                        margin: '0 auto'
                    }}>
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
                                borderRadius: 14,
                                boxShadow: '0 2px 8px #e0e7ef',
                                padding: 16,
                                textAlign: 'center',
                                transition: 'transform 0.2s',
                                cursor: 'pointer'
                            }}>
                                <img src={require(`../images/project1.png`)} alt={item.label} style={{
                                    width: '100%',
                                    height: 140,
                                    objectFit: 'cover',
                                    borderRadius: 8,
                                    marginBottom: 12,
                                    transition: 'transform 0.2s'
                                }} />
                                <p style={{ marginTop: 0, fontWeight: 600, color: '#0071bc', fontSize: 15 }}>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Responsive styles */}
                <style>
                    {`
                    @media (max-width: 1100px) {
                        .scaffold-section > div {
                            flex-direction: column !important;
                        }
                        .scaffold-section > div > div {
                            border-radius: 18px !important;
                        }
                    }
                    @media (max-width: 900px) {
                        .scaffold-section > div {
                            flex-direction: column !important;
                        }
                        .scaffold-section > div > div {
                            max-width: 100% !important;
                            border-radius: 18px !important;
                        }
                    }
                    @media (max-width: 700px) {
                        .tesla-projects-section .tesla-projects-grid {
                            grid-template-columns: 1fr !important;
                        }
                        .scaffold-section > div {
                            gap: 16px !important;
                        }
                        .scaffold-section > div > div {
                            padding: 16px !important;
                        }
                        .scaffold-section, .tesla-projects-section {
                            padding: 18px 2px 10px 2px !important;
                        }
                    }
                    `}
                </style>
            </div>
        );
    }
}