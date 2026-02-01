import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            background: '#111',
            color: '#ccc',
            fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontFamily: '"Open Sans", sans-serif',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative top border */}
            <div style={{ height: '4px', background: 'linear-gradient(90deg, #0071bc, #009fe3, #ffc107)' }}></div>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '60px 20px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '40px'
            }}>
                {/* Company Info */}
                <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
                    <div style={{
                        fontSize: '24px', 
                        fontWeight: '800', 
                        color: '#fff', 
                        marginBottom: '16px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }}>
                        Big Tower <span style={{ color: '#009fe3' }}>Engineering</span>
                    </div>
                    <p style={{ 
                        fontSize: '15px', 
                        lineHeight: '1.6', 
                        color: '#a0a0a0',
                        marginBottom: '24px',
                        maxWidth: '400px'
                    }}>
                        Building a Greener Future with Sustainable Solutions. We are committed to delivering excellence in engineering solutions, ensuring safety, quality, and innovation.
                    </p>
                    {/* Social Icons Placeholder */}
                    <div style={{ display: 'flex', gap: '16px' }}>
                        {['facebook-f', 'linkedin-in', 'twitter'].map(icon => (
                            <div key={icon} style={{
                                width: '36px', height: '36px', borderRadius: '50%', background: '#222', 
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#fff', cursor: 'pointer', transition: '0.3s'
                            }}>
                                <i className={`fab fa-${icon}`}></i>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Contact Info */}
                <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
                    <h4 style={{ 
                        color: '#fff', 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        marginBottom: '24px', 
                        position: 'relative',
                        paddingBottom: '10px'
                    }}>
                        Contact Us
                        <span style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '3px', background: '#009fe3' }}></span>
                    </h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div style={{ minWidth: '30px', color: '#009fe3', marginTop: '2px' }}><i className="fas fa-map-marker-alt"></i></div>
                            <span style={{ fontSize: '15px', lineHeight: '1.5' }}>
                                9 Little Road #05-03<br />
                                Singapore 536985
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ minWidth: '30px', color: '#009fe3' }}><i className="fas fa-phone-alt"></i></div>
                            <span style={{ fontSize: '15px' }}>(+65) 6858 2318</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ minWidth: '30px', color: '#009fe3' }}><i className="fab fa-whatsapp"></i></div>
                            <span style={{ fontSize: '15px' }}>(+65) 9002 8483</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ minWidth: '30px', color: '#009fe3' }}><i className="fas fa-envelope"></i></div>
                            <span style={{ fontSize: '15px' }}>muthu@bigtowerreg.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                background: '#000',
                padding: '20px',
                textAlign: 'center',
                fontSize: '14px',
                color: '#666',
                borderTop: '1px solid #222'
            }}>
                &copy; {new Date().getFullYear()} Big Tower Engineering Pte. Ltd. All Rights Reserved.
            </div>
        </footer>
    );
}