import { Devices, Edit, FormatQuote, Launch, Lock, Notifications, Mail } from '@material-ui/icons';
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
                <section
                    style={{
                        background: 'linear-gradient(120deg, #1a3761 60%, #2a5a8a 100%)',
                        color: '#fff',
                        borderRadius: 16,
                        padding: '40px 24px 32px 24px',
                        margin: '48px 0',
                        position: 'relative',
                        overflow: 'hidden',
                        minHeight: 520,
                        fontFamily: 'inherit'
                    }}
                >
                    {/* Background silhouette (replace with your image path if needed) */}
                    <div
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: '60%',
                            background: 'url("/images/leader-silhouette.png") no-repeat right bottom',
                            backgroundSize: 'contain',
                            opacity: 0.22,
                            zIndex: 0
                        }}
                    />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: 1, marginBottom: 16 }}>
                            MANAGEMENT
                        </div>
                        <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.1, marginBottom: 32 }}>
                            <span style={{ color: '#8fd6ff', fontWeight: 400, fontSize: 28 }}>A</span>{' '}
                            <span style={{ color: '#fff' }}>DYNAMIC LEADER,</span>
                            <br />
                            <span style={{ color: '#8fd6ff', fontWeight: 400, fontSize: 28 }}>ROOTED IN</span>{' '}
                            <span style={{ color: '#fff' }}>VALUES</span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
                            {/* Left: Image */}
                            <div style={{ flex: '0 0 180px', maxWidth: 180, marginRight: 24 }}>
                                <img
                                    src="/images/director-photo.jpg"
                                    alt="Director"
                                    style={{
                                        width: 180,
                                        height: 140,
                                        objectFit: 'cover',
                                        borderRadius: 4,
                                        border: '4px solid #fff',
                                        boxShadow: '0 2px 12px rgba(0,0,0,0.12)'
                                    }}
                                />
                            </div>
                            {/* Right: Name and About */}
                            <div style={{ flex: 1, minWidth: 220 }}>
                                <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: 0.5, marginTop: 8 }}>
                                    Mr. ADAIKKALAM MUTHU KARUPPAN
                                </div>
                                <div style={{
                                    fontSize: 15,
                                    color: '#b3e0ff',
                                    borderBottom: '2px solid #ffd600',
                                    display: 'inline-block',
                                    marginBottom: 18,
                                    marginTop: 2
                                }}>
                                    Director, Big Tower Engineering Pte. Ltd.
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                                    {/* About the Director - left column */}
                                    <div style={{ flex: 1, minWidth: 260, maxWidth: 340 }}>
                                        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8, marginTop: 8 }}>
                                            About the Director
                                        </div>
                                        <div style={{ fontSize: 15, color: '#e6f2ff', lineHeight: 1.7 }}>
                                            Mr. Muthu, our Managing Director, brings a wealth of experience and a steady vision to our organization. With a long-spanning career in the building and construction industry, he has consistently demonstrated strategic insight and operational expertise that have contributed significantly to our growth and success.
                                            <br /><br />
                                            Throughout his career, Mr. Muthu has been instrumental in shaping effective strategies and driving initiatives that have enhanced operational efficiency and expanded market reach. His focus on innovation and identifying opportunities has led to meaningful advancements for the group under his leadership. As a leader, Mr. Muthu is known for fostering collaboration and encouraging teams to work towards shared goals. His emphasis on empowering employees and promoting a culture of transparency and continuous learning has helped cultivate a motivated and capable workforce.
                                        </div>
                                    </div>
                                    {/* About the Director - right column */}
                                    <div style={{ flex: 1, minWidth: 220, maxWidth: 340 }}>
                                        <div style={{ fontSize: 15, color: '#e6f2ff', lineHeight: 1.7, marginTop: 32 }}>
                                            Mr.Muthu’s leadership ensures that we remain focused on sustainable growth and delivering value to all our stakeholders. Under his stewardship, the company has successfully navigated periods of change, adapting to challenges with resilience and a forward-looking approach. His dynamism is inspiring, and comes from being deeply rooted in a strong value system.
                                            <br /><br />
                                            <span style={{ color: '#00e6ff', fontWeight: 600 }}>
                                                With Mr. Muthu’s guidance, we continue to build on our successes, striving for steady progress and a commitment to excellence in all that we do.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    style={{
                        background: "#fff",
                        borderRadius: 16,
                        padding: "40px 16px 32px 16px",
                        margin: "48px 0",
                        position: "relative",
                        overflow: "hidden",
                        fontFamily: "inherit",
                        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                        maxWidth: 1200,
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <div style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#222",
                        marginBottom: 8,
                        textAlign: "center"
                    }}>
                        WHY CHOOSE US
                    </div>
                    <div style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#009fe3",
                        marginBottom: 32,
                        lineHeight: 1.1,
                        textAlign: "center"
                    }}>
                        <span style={{ color: "#009fe3" }}>
                            A <span style={{ color: "#009fe3" }}>ONE-STOP-SOLUTION</span>,<br />
                            A DIVERSE ARRAY OF <span style={{ color: "#009fe3" }}>SERVICES</span>
                        </span>
                    </div>
                    {/* CardView grid */}
                    <div className="about-cardview-grid" style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 24,
                        justifyContent: "center"
                    }}>
                        {/* Card 1 */}
                        <div className="about-cardview-card" style={{
                            background: "#f9f9f9",
                            borderRadius: 12,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                            padding: 24,
                            flex: "1 1 260px",
                            minWidth: 300,
                            maxWidth: 400,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }}>
                            <div style={{
                                background: "#ffc627",
                                borderRadius: "50%",
                                width: 56,
                                height: 56,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 28,
                                marginBottom: 16
                            }}>💡</div>
                            <div style={{ fontWeight: 700, fontSize: 18, color: "#444", marginBottom: 8 }}>
                                Bespoke <span style={{ borderBottom: "3px solid #009fe3" }}>Solutions</span>
                            </div>
                            <div style={{ fontSize: 15, color: "#222", lineHeight: 1.6 }}>
                                We work with a diverse and dynamic clientele wherein one size rarely fits all. Each project presents unique challenges, requiring solutions tailored to specific needs. Therefore, our customized solutions blend innovation, precision, and flexibility to address these challenges. From conceptualization to execution, our customer-centric approach ensures that every detail is meticulously planned and flawlessly executed, making us the trusted partner for transformative outcomes.
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="about-cardview-card" style={{
                            background: "#f9f9f9",
                            borderRadius: 12,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                            padding: 24,
                            flex: "1 1 260px",
                            minWidth: 300,
                            maxWidth: 400,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }}>
                            <div style={{
                                background: "#ffc627",
                                borderRadius: "50%",
                                width: 56,
                                height: 56,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 28,
                                marginBottom: 16
                            }}>🚀</div>
                            <div style={{ fontWeight: 700, fontSize: 18, color: "#444", marginBottom: 8 }}>
                                Technological <span style={{ borderBottom: "3px solid #009fe3" }}>Advancements</span>
                            </div>
                            <div style={{ fontSize: 15, color: "#222", lineHeight: 1.6 }}>
                                In a constantly evolving space, we recognise that innovation is key to adding value, Which is why we are consistently working towards bringing the most advanced technological innovations to the table, building projects that will stand the test of time. Whether it is small improvements in daily operations to streamlining processes or breakthrough innovations that will be game-changers for our clients, we are always looking at ways and means to be technologically innovative, everyday in every way.
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="about-cardview-card" style={{
                            background: "#f9f9f9",
                            borderRadius: 12,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                            padding: 24,
                            flex: "1 1 260px",
                            minWidth: 300,
                            maxWidth: 400,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }}>
                            <div style={{
                                background: "#ffc627",
                                borderRadius: "50%",
                                width: 56,
                                height: 56,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 28,
                                marginBottom: 16
                            }}>🛡️</div>
                            <div style={{ fontWeight: 700, fontSize: 18, color: "#444", marginBottom: 8 }}>
                                Stringent <span style={{ borderBottom: "3px solid #009fe3" }}>Safety</span>
                            </div>
                            <div style={{ fontSize: 15, color: "#222", lineHeight: 1.6 }}>
                                At the heart of our operations lies an unwavering commitment to safety and regulatory compliance. Acknowledging the challenges and risks of our industry, we prioritize the health and safety of all our stakeholders - clients, teams, and partners. By implementing robust safety protocols, conducting regular training, and adhering to stringent regulatory standards, we create a secure and reliable working environment. Our safety certifications and flawless track record speak volumes of our uncompromising commitment.
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="about-cardview-card" style={{
                            background: "#f9f9f9",
                            borderRadius: 12,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                            padding: 24,
                            flex: "1 1 260px",
                            minWidth: 300,
                            maxWidth: 400,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }}>
                            <div style={{
                                background: "#ffc627",
                                borderRadius: "50%",
                                width: 56,
                                height: 56,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 28,
                                marginBottom: 16
                            }}>👥</div>
                            <div style={{ fontWeight: 700, fontSize: 18, color: "#444", marginBottom: 8 }}>
                                Professional <span style={{ borderBottom: "3px solid #009fe3" }}>Teams</span>
                            </div>
                            <div style={{ fontSize: 15, color: "#222", lineHeight: 1.6 }}>
                                We take pride in a team of seasoned professionals, from engineers to on-site technicians, who bring a wealth of expertise and experience to every project. Dedicated to excellence, our team undergoes continuous training and certification to stay ahead in engineering practices, ensuring innovative solutions and flawless execution at every stage. With their meticulous attention to detail, and unwavering dedication, our team ensures the highest standards of quality and precision in every endeavour.
                            </div>
                        </div>
                        {/* Card 5 */}
                        <div className="about-cardview-card" style={{
                            background: "#f9f9f9",
                            borderRadius: 12,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                            padding: 24,
                            flex: "1 1 260px",
                            minWidth: 300,
                            maxWidth: 400,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }}>
                            <div style={{
                                background: "#ffc627",
                                borderRadius: "50%",
                                width: 56,
                                height: 56,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 28,
                                marginBottom: 16
                            }}>⚙️</div>
                            <div style={{ fontWeight: 700, fontSize: 18, color: "#444", marginBottom: 8 }}>
                                Extensive <span style={{ borderBottom: "3px solid #009fe3" }}>Services</span>
                            </div>
                            <div style={{ fontSize: 15, color: "#222", lineHeight: 1.6 }}>
                                We deliver a comprehensive range of services, from initial consultation and design to erection, modification, and dismantling. Our turnkey approach ensures a seamless and hassle-free experience, acting as the single point of contact for our clients so they do not have to seek different vendors. With streamlined processes and seamless execution, we guarantee efficiency, quality, and exceptional results at every stage of the project.
                            </div>
                        </div>
                        {/* Card 6 */}
                        <div className="about-cardview-card" style={{
                            background: "#f9f9f9",
                            borderRadius: 12,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                            padding: 24,
                            flex: "1 1 260px",
                            minWidth: 300,
                            maxWidth: 400,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }}>
                            <div style={{
                                background: "#ffc627",
                                borderRadius: "50%",
                                width: 56,
                                height: 56,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 28,
                                marginBottom: 16
                            }}>🤝</div>
                            <div style={{ fontWeight: 700, fontSize: 18, color: "#444", marginBottom: 8 }}>
                                Customer <span style={{ borderBottom: "3px solid #009fe3" }}>Partnerships</span>
                            </div>
                            <div style={{ fontSize: 15, color: "#222", lineHeight: 1.6 }}>
                                Trust and transparency are the cornerstones of our business. We believe that open communication and meaningful collaboration are essential to delivering value and building lasting relationships. By understanding our clients’ unique needs and consistently exceeding their expectations, we create solutions that inspire confidence and satisfaction. This unwavering commitment to a client-first approach has earned us long-term partnerships and established us as the preferred vendor in the industry.
                            </div>
                        </div>
                    </div>
                    {/* Responsive styles */}
                    <style>
                        {`
                        @media (max-width: 900px) {
                            .about-cardview-grid {
                                flex-direction: column !important;
                                align-items: stretch !important;
                            }
                            .about-cardview-card {
                                max-width: 100% !important;
                            }
                        }
                        @media (max-width: 600px) {
                            .about-cardview-grid {
                                gap: 12px !important;
                            }
                            .about-cardview-card {
                                padding: 16px !important;
                                min-width: 0 !important;
                            }
                            section[style*="background: #fff"] {
                                padding: 18px 2px 10px 2px !important;
                            }
                        }
                        `}
                    </style>
                </section>
                 <section
                    style={{
                        background: "#f7fafd",
                        borderRadius: 16,
                        padding: "40px 16px 32px 16px",
                        margin: "48px 0",
                        position: "relative",
                        overflow: "hidden",
                        fontFamily: "inherit",
                        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                        maxWidth: 1400,
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <div style={{
                        fontSize: 30,
                        fontWeight: 800,
                        color: "#193a6a",
                        marginBottom: 24,
                        textAlign: "center",
                        letterSpacing: 1,
                        textTransform: "uppercase"
                    }}>
                        <span style={{
                            borderBottom: "4px solid #e53935",
                            paddingBottom: 4
                        }}>Awards and Certificates</span>
                    </div>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 32,
                        justifyContent: "center",
                        alignItems: "flex-start"
                    }}>
                        {/* Replace src with your actual certificate image paths */}
                        <div style={{
                            background: "#fff",
                            borderRadius: 16,
                            boxShadow: "0 2px 12px #e0e7ef",
                            padding: 8,
                            maxWidth: 320,
                            minWidth: 220,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <img src={require('../images/certificates/certificate1.jpg')} alt="Certificate 1" style={{ width: "100%", borderRadius: 12, border: "6px solid #111" }} />
                        </div>
                        <div style={{
                            background: "#fff",
                            borderRadius: 16,
                            boxShadow: "0 2px 12px #e0e7ef",
                            padding: 8,
                            maxWidth: 320,
                            minWidth: 220,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <img src={require('../images/certificates/certificate2.jpg')} alt="Certificate 2" style={{ width: "100%", borderRadius: 12, border: "6px solid #111" }} />
                        </div>
                        <div style={{
                            background: "#fff",
                            borderRadius: 16,
                            boxShadow: "0 2px 12px #e0e7ef",
                            padding: 8,
                            maxWidth: 320,
                            minWidth: 220,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <img src={require('../images/certificates/certificate3.jpg')} alt="Certificate 3" style={{ width: "100%", borderRadius: 12, border: "6px solid #111" }} />
                        </div>
                        <div style={{
                            background: "#fff",
                            borderRadius: 16,
                            boxShadow: "0 2px 12px #e0e7ef",
                            padding: 8,
                            maxWidth: 320,
                            minWidth: 220,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <img src={require('../images/certificates/certificate4.jpg')} alt="Certificate 4" style={{ width: "100%", borderRadius: 12, border: "6px solid #111" }} />
                        </div>
                    </div>
                    {/* Responsive styles */}
                    <style>
                        {`
                        @media (max-width: 1100px) {
                            .certificates-section-flex {
                                flex-direction: column !important;
                                align-items: center !important;
                            }
                        }
                        @media (max-width: 700px) {
                            .certificates-section-flex {
                                gap: 16px !important;
                            }
                            .certificates-section-flex > div {
                                max-width: 98vw !important;
                                min-width: 0 !important;
                            }
                        }
                        `}
                    </style>
                </section>
            </div>
        );
    }

}