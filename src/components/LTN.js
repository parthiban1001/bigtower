import React, { Component } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export class LTN extends React.Component {
    componentWillMount() {
        AOS.init({
            once: true,
            delay: 100
        });
    }
    render() {
        return (
            <div>
                {/* BUILDER WORKS, DEMOLITION SOLUTIONS SECTION */}
                <section className="ltn-section" style={{ background: 'linear-gradient(120deg, #eaf3fa 60%, #f7fafd 100%)', padding: '40px 0' }}>
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
                                <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 24, letterSpacing: 1 }}>BUILDER WORKS, DEMOLITION SOLUTIONS</h2>
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
                                }}>Le Tian</span></h3>
                                <p style={{ marginTop: 16, color: '#eaf6ff', lineHeight: 1.7 }}>
                                    Le Tian Pte Ltd is a leading provider of Additions & Alterations (A&A), builder works, and demolition solutions. Backed by years of experience and technical expertise, it delivers tailored, timely solutions that address the dynamic needs of Singapore’s construction industry.
                                </p>
                                <p style={{ marginTop: 16, color: '#eaf6ff', lineHeight: 1.7 }}>
                                    Le Tian is deeply committed to safety and efficiency, complying with the highest standards. Its bizSAFE Star certification, coupled with risk management assessments and Just-in-Time (JIT) processes, ensures enhanced productivity and consistently high-quality outcomes for every project it undertakes.
                                </p>
                                <p style={{ marginTop: 16, color: '#eaf6ff', lineHeight: 1.7 }}>
                                    Renowned for its professionalism and customer-centric approach, it has earned a reputation as a reliable Licensed Builder, A&A, and Demolition Contractor in the construction and process sectors, both locally and regionally.
                                </p>
                                <div style={{ margin: '32px 0 0 0', textAlign: 'center' }}>
                                    <img src={require('../images/BTR-Logo.png')} alt="LTN Logo" style={{ maxWidth: 120, width: '100%' }} />
                                </div>
                                <h3 style={{ color: '#ffd600', fontWeight: 700, marginTop: 32, fontSize: 18 }}>Mr. Periyasamy Jeevanandam</h3>
                                <div style={{ color: '#00e6ff', fontWeight: 500, marginBottom: 8 }}>Director, Le Tian Pte Ltd</div>
                                <h4 style={{ color: '#ffd600', fontWeight: 700, marginTop: 8 }}>About the Director</h4>
                                <p style={{ marginTop: 12, color: '#eaf6ff', lineHeight: 1.7 }}>
                                    Mr. Jeevanandam brings over a decade of experience in the realm of Residential, Industrial, Marine and Process plant project construction. His expertise in Structural Execution, Architectural & MEP co ordinations, coupled with dynamic leadership skills makes him a fine blend of technical and managerial acumen. His hands-on connect with the project team, consultants, clients, and sub-contractors ensures that projects are well-streamlined and delivered on time. Well-versed with the Building Control Act and Regulations & WSH regulations in Singapore, he makes sure that the laws of the land are judiciously met.
                                </p>
                                <h4 style={{ color: '#ffd600', fontWeight: 700, marginTop: 32 }}>Certifications</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginTop: 8 }}>
                                    {['certificate.webp', 'certificate.webp', 'certificate.webp', 'certificate.webp', 'certificate.webp'].map((img, idx) => (
                                        <img key={idx} src={require(`../images/${img}`)} alt="Certification" style={{ height: 32, background: '#fff', borderRadius: 6, padding: 4 }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Right: Services */}
                        <div style={{
                            flex: 1.5,
                            minWidth: 320,
                            padding: 32,
                            background: '#f7fafd',
                            borderRadius: '0 18px 18px 0'
                        }}>
                            <h3 style={{ color: '#0071bc', fontWeight: 700, marginBottom: 24, textAlign: 'center', fontSize: 24 }}>Services</h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: 24,
                                justifyItems: 'center',
                                marginBottom: 32
                            }}>
                                {[
                                    { img: 'project.png', label: 'Civil & Structural Project Works' },
                                    { img: 'project.png', label: 'Metal Roofing Works' },
                                    { img: 'project.png', label: 'Demolition' },
                                    { img: 'project1.png', label: 'All Type of Flooring' },
                                    { img: 'project.png', label: 'Ceiling & Wall Panel' },
                                    { img: 'project.png', label: 'Vinyl Flooring' },
                                    { img: 'project1.png', label: 'Epoxy Flooring' },
                                    { img: 'project1.png', label: 'MAT Foundation' },
                                    { img: 'project.png', label: 'Machine Foundation' },
                                    { img: 'project.png', label: 'Floor Marking & Road Marking' },
                                    { img: 'project.png', label: 'Structural Steel Works' },
                                    { img: 'project.png', label: 'HDB Renovation Works' },
                                    { img: 'project.png', label: 'HDB Carpark Reinstatement Works' },
                                    { img: 'project.png', label: 'Furniture Works' }
                                ].map((item, idx) => (
                                    <div key={idx} style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 120,
                                        background: '#fff',
                                        borderRadius: 12,
                                        boxShadow: '0 2px 8px #e0e7ef',
                                        padding: 12,
                                        transition: 'transform 0.2s',
                                        cursor: 'pointer'
                                    }}>
                                        <div style={{
                                            width: 80,
                                            height: 80,
                                            background: '#f7fafd',
                                            border: '3px solid #009fe3',
                                            clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: 8,
                                            boxShadow: '0 2px 8px #e0e7ef'
                                        }}>
                                            <img src={require(`../images/${item.img}`)} alt={item.label} style={{ width: 60, height: 60, objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ fontWeight: 600, color: '#0071bc', textAlign: 'center', fontSize: 14, lineHeight: 1.2 }}>
                                            {item.label.split(' ').map((word, i, arr) =>
                                                arr.length > 1 && i === arr.length - 1 ? <span key={i}><br />{word}</span> : <span key={i}> {word}</span>
                                            )}
                                        </div>
                                    </div>
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
                                <img src={require(`../images/${item.img}`)} alt={item.label} style={{
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
                        .ltn-section > div {
                            flex-direction: column !important;
                        }
                        .ltn-section > div > div {
                            border-radius: 18px !important;
                        }
                    }
                    @media (max-width: 900px) {
                        .ltn-section > div {
                            flex-direction: column !important;
                        }
                        .ltn-section > div > div {
                            max-width: 100% !important;
                            border-radius: 18px !important;
                        }
                    }
                    @media (max-width: 700px) {
                        .tesla-projects-section .tesla-projects-grid {
                            grid-template-columns: 1fr !important;
                        }
                        .ltn-section > div {
                            gap: 16px !important;
                        }
                        .ltn-section > div > div {
                            padding: 16px !important;
                        }
                        .ltn-section, .tesla-projects-section {
                            padding: 18px 2px 10px 2px !important;
                        }
                    }
                    `}
                </style>
            </div>
        );
    }
}