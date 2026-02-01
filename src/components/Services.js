import React, { Component } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Example images, replace with your actual images
import DesignBuildImg from '../images/FitnessTracker.jpg';
import FireProtectionImg from '../images/FitnessTracker.jpg';
import AirconImg from '../images/FitnessTracker.jpg';
import ElvImg from '../images/FitnessTracker.jpg';
import ScaffoldImg from '../images/FitnessTracker.jpg';

const servicesList = [
    {
        title: "Design & Build",
        img: DesignBuildImg,
        desc: "Comprehensive design and construction solutions tailored to your project needs."
    },
    {
        title: "Fire Protection Systems",
        img: FireProtectionImg,
        desc: "Advanced fire detection, suppression, and alarm systems for safety and compliance."
    },
    {
        title: "Air Conditioning, Refrigeration & Ventilation Systems",
        img: AirconImg,
        desc: "Efficient ACMV solutions for comfort, energy savings, and healthy environments."
    },
    {
        title: "Extra Low Voltage (ELV) System",
        img: ElvImg,
        desc: "Integrated ELV systems including security, communications, and automation."
    },
    {
        title: "Scaffold works",
        img: ScaffoldImg,
        desc: "Safe and reliable scaffolding solutions for all types of construction projects."
    }
];

export class Services extends React.Component {
    componentWillMount() {
        AOS.init({
            once: true,
            delay: 100
        });
    }
    render() {
        return (
            <div>
                {/* Services CardView Section */}
                <section style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 32,
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    margin: '40px auto 32px auto',
                    maxWidth: 1200
                }}>
                    {servicesList.map((service, idx) => (
                        <div key={idx} style={{
                            background: '#fff',
                            borderRadius: 16,
                            boxShadow: '0 2px 12px #e0e7ef',
                            padding: 24,
                            minWidth: 220,
                            maxWidth: 300,
                            flex: '1 1 220px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}>
                            <div style={{
                                width: 80,
                                height: 80,
                                marginBottom: 16,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#eaf6ff',
                                borderRadius: '50%',
                                boxShadow: '0 2px 8px #e0e7ef'
                            }}>
                                <img src={service.img} alt={service.title} style={{ width: 50, height: 50, objectFit: 'contain' }} />
                            </div>
                            <div style={{ fontWeight: 700, color: '#0071bc', fontSize: 17, marginBottom: 10, textAlign: 'center' }}>
                                {service.title}
                            </div>
                            <div style={{ fontSize: 14, color: '#444', textAlign: 'center' }}>
                                {service.desc}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        );
    }
}