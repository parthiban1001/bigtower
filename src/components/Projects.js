// ...existing imports...
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Check, Edit, Add, Receipt, ImportantDevices, EventAvailable, Mail, People, Notifications, AttachMoney, LocalDrink, Public, AccountCircle, Lock, Devices } from '@material-ui/icons';
import Androidappimg from '../images/downloadAndroid.png';
import '../css/animations.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import ProjectTrackImg from '../images/Logo.jpeg'; // replace with your actual image filename
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { ArrowBackIos, ArrowForwardIos, Close } from '@material-ui/icons';

const defaultImages = [ProjectTrackImg, Androidappimg];

const projectList = [
    {
        client: "Omni-Crest Engineering & Construction Pte Ltd.",
        work: "Design & Build",
        desc: "Proposed Erection of a 3-Storey Single User Intermediate Terrace Factory with Mezzanine and Temporary Ancillary Workers Dormitory at 21 Kian Teck Avenue.",
        value: "$6,800,000.00",
        start: "1-Aug-25",
        end: "31-Oct-26",
        percent: "15%",
        status: "Ongoing",
        images: [
            require('../images/image1.jpeg'),
            require('../images/project2.png')
        ]
    },
    {
        client: "Little Farms Pte Ltd",
        work: "ACMV Works",
        desc: "Supply & Installation of Air-Conditioning & Mechanical Ventillation System at Little Farms",
        value: "$206,283.00",
        start: "1-Mar-25",
        end: "30-Apr-26",
        percent: "90%",
        status: "Ongoing", images: [
            require('../images/project3.png'),
            require('../images/image2.jpeg')
        ]
    },
    {
        client: "Starter Lab Pte Ltd",
        work: "ACMV Works",
        desc: "Supply & Installation of Air-Conditioning & Mechanical Ventillation System at Starter Lab",
        value: "$45,434.00",
        start: "1-Apr-25",
        end: "31-Mar-26",
        percent: "90%",
        status: "Ongoing", images: [
            require('../images/image3.jpeg'),
            require('../images/image4.jpeg')
        ]
    },
    {
        client: "PaxOcean Engineering Pte. Ltd",
        work: "Civil project",
        desc: "Electrical and ELV works, including bollard installation with SS 316L anchoring systems, supply of a 3200A busbar termination panel, CCTV and network troubleshooting, and decommissioning of live power systems with LEW services, ensuring safe and compliant execution at site.",
        value: "$1,800,000.00",
        start: "2-Jan-26",
        end: "",
        percent: "100%",
        status: "Completed", images: [
            require('../images/project7.png'),
            require('../images/project8.png')
        ]
    },
    {
        client: "Rejoice Container Services Pte Ltd",
        work: "ACMV Works",
        desc: "Supply & Installation of Air-Conditioning System at 21 Benoi Sector - Warehouse",
        value: "$220,000.00",
        start: "4-Apr-25",
        end: "20-May-25",
        percent: "100%",
        status: "Completed", images: [
            require('../images/project1.png'),
            require('../images/project2.png')
        ]
    }, {
        client: "Kandenko Co Ltd",
        work: "M&E Works (ELV, Piping & ACMV)",
        desc: "Proposed Erection of a Single User Industrial Development(Shipyard) with Workshop, Warehouse and Ancillary Office at 5 Jalan Samulun Singapore 629122 (Boon Lay Planning Area)",
        value: "$1,790,091.80",
        start: "15-Jan-25",
        end: "28-Sept-25",
        percent: "100%",
        status: "Completed", images: [
            require('../images/project1.png'),
            require('../images/project2.png')
        ]
    },
    {
        client: "Kandenko Co Ltd",
        work: "Water-Cooled Chiller Plant System",
        desc: "Design, Supply, Delivery, Installation, Testing and Commissioning of New Centralised Water-Cooled Chiller Plant System Serving Institute of Mental Health (IMH)",
        value: "$850,000.00",
        start: "13-Jan-25",
        end: "17-Jan-27",
        percent: "100%",
        status: "Completed", images: [
            require('../images/project1.png'),
            require('../images/project2.png')
        ]
    },
    {
        client: "Mitsubishi Electric Asia Pte Ltd",
        work: "Building Management System(BMS)",
        desc: "Supply & Installation of BMS Fiber Optic Network Cabling @ 5 Jalan Samulun",
        value: "$164,685.60",
        start: "13-May-25",
        end: "30-Sept-25",
        percent: "100%",
        status: "Completed", images: [
            require('../images/project1.png'),
            require('../images/project2.png')
        ]
    },
    {
        client: "Kandenko Co Ltd",
        work: "Electrical, Piping & ACMV Works",
        desc: "Proposed Addition & Alteration Works to Existing Data Centre with Ancillary Facilities and Telecommunication at Singtel Data Centre Tuas.",
        value: "$10,960,250.00",
        start: "2-Jan-26",
        end: "",
        percent: "",
        status: "UpComing", images: [
            require('../images/project1.png'),
            require('../images/project2.png')
        ]
    }
];

const statusColors = {
    "Ongoing": "#0071bc",
    "Awarded": "#ff9800",
    "Completed": "#00c853",
    "UpComing": "#e53935"
};

export class Projects extends Component {
    componentWillMount() {
        AOS.init({
            once: true,
            delay: 100
        });
    }

    state = {
        galleryOpen: false,
        galleryImages: [],
        galleryIndex: 0
    };

    openGallery = (images = defaultImages, startIndex = 0) => {
        this.setState({ galleryOpen: true, galleryImages: images, galleryIndex: startIndex });
    };

    closeGallery = () => {
        this.setState({ galleryOpen: false });
    };

    prevImage = () => {
        this.setState(({ galleryIndex, galleryImages }) => ({
            galleryIndex: (galleryIndex - 1 + (galleryImages.length || 1)) % (galleryImages.length || 1)
        }));
    };

    nextImage = () => {
        this.setState(({ galleryIndex, galleryImages }) => ({
            galleryIndex: (galleryIndex + 1) % (galleryImages.length || 1)
        }));
    };

    render() {
        return (
            <div>
                {/* CardView Section */}
                {/* Project List CardView */}
                <section style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 24,
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    margin: '0 auto 40px auto',
                    padding: '50px 0 0 0 ',
                    maxWidth: 1200
                }}>
                    {projectList.map((proj, idx) => (
                        <div key={idx} onClick={() => this.openGallery(proj.images || defaultImages, 0)} style={{
                            cursor: 'pointer',
                            background: '#fff',
                            borderRadius: 16,
                            boxShadow: '0 2px 12px #e0e7ef',
                            padding: 20,
                            minWidth: 260,
                            maxWidth: 350,
                            flex: '1 1 280px',
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 8,
                            borderLeft: `6px solid ${statusColors[proj.status] || '#0071bc'}`
                        }}>
                            <div style={{ fontWeight: 700, fontSize: 16, color: '#0071bc', marginBottom: 6 }}>{proj.client}</div>
                            <div style={{ fontWeight: 600, color: '#222', fontSize: 15, marginBottom: 4 }}>{proj.work}</div>
                            <div style={{ fontSize: 14, color: '#444', marginBottom: 8 }}>{proj.desc}</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 8 }}>

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                <span style={{ fontWeight: 600, color: '#0071bc' }}>{proj.percent && `Progress: ${proj.percent}`}</span>
                                <span style={{
                                    fontWeight: 700,
                                    color: statusColors[proj.status] || '#0071bc',
                                    fontSize: 15,
                                    borderRadius: 6,
                                    padding: '2px 10px',
                                    background: `${proj.status === 'Completed' ? '#e8f5e9' : proj.status === 'Ongoing' ? '#e3f2fd' : proj.status === 'Awarded' ? '#fffde7' : proj.status === 'UpComing' ? '#ffebee' : '#f5f5f5'}`
                                }}>
                                    {proj.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </section>
                <Dialog 
                    open={this.state.galleryOpen} 
                    onClose={this.closeGallery} 
                    maxWidth="lg" 
                    fullWidth
                    PaperProps={{
                        style: { borderRadius: 16, backgroundColor: '#111', overflow: 'hidden' }
                    }}
                >
                    <DialogContent style={{ position: 'relative', padding: 0, display: 'flex', flexDirection: 'column', height: '80vh', backgroundColor: '#000' }}>
                        <IconButton onClick={this.closeGallery} style={{ position: 'absolute', right: 16, top: 16, zIndex: 10, color: '#fff', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                            <Close />
                        </IconButton>
                        
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                            <IconButton onClick={this.prevImage} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', color: '#fff', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <ArrowBackIos style={{ paddingLeft: 4 }} />
                            </IconButton>
                            
                            <img src={(this.state.galleryImages || [])[this.state.galleryIndex]} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            
                            <IconButton onClick={this.nextImage} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', color: '#fff', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <ArrowForwardIos />
                            </IconButton>
                        </div>
                        
                        <div style={{ padding: '16px', backgroundColor: '#1a1a1a', overflowX: 'auto' }}>
                            <Grid container spacing={2} style={{ justifyContent: 'center', flexWrap: 'nowrap' }}>
                            {(this.state.galleryImages || []).map((src, i) => (
                                <Grid item key={i}>
                                    <div onClick={() => this.setState({ galleryIndex: i })} style={{ width: 80, height: 60, borderRadius: 8, overflow: 'hidden', cursor: 'pointer', border: i === this.state.galleryIndex ? '2px solid #009fe3' : '2px solid transparent', opacity: i === this.state.galleryIndex ? 1 : 0.5, transition: 'all 0.2s' }}>
                                        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </Grid>
                            ))}
                            </Grid>
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Project Track Records Image */}
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    {/* <img
                        src={ProjectTrackImg}
                        alt="Project Track Records"
                        style={{
                            width: '100%',
                            maxWidth: 1100,
                            borderRadius: 16,
                            boxShadow: '0 2px 16px #e0e7ef'
                        }}
                    /> */}
                </div>
                {/* ...existing code... */}
            </div>
        );
    }
}