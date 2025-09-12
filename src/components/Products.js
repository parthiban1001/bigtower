import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Check, Edit, Add, Receipt, ImportantDevices, EventAvailable, Mail, People, Notifications, AttachMoney, LocalDrink, Public, AccountCircle, Lock, Devices } from '@material-ui/icons';
import Androidappimg from '../images/downloadAndroid.png';
import '../css/animations.css';   
import 'aos/dist/aos.css';
import AOS from 'aos';

export class Products extends Component {
    componentWillMount() { 
        AOS.init({
            once: true,
            delay: 100
        });
    }
     render() {
        return (
            <div>
                <div className="Banner_Title">
                        <h1>Products</h1> 
                        <nav aria-label="breadcrumb" className="breadcrumb_lists">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Products</li>
                            </ol>
                        </nav>  
                 </div>
                <div className="Products_page" style={{ 'padding': '70px 0' }}>
                    <div id="sectionI">
                        <div className="col-XS-24 col-SM-24 col-MD-38 LarScr-32 page_center">
                        <div className="col-XS-24 col-SM-12 col-MD-22 LarScr-20 productcycle"></div>
                        <div className="col-XS-24 col-SM-12 col-MD-26 LarScr-28">
                            <h1>Revenue Cycle Services for Hospitals and Healthcare Systems</h1>
                            <section>
                                <p>
                                    The complexity in generating and collecting revenue is ever-increasing as the market transforms from
                                    volume to value. From coding to proving quality outcomes, getting paid is more difficult than ever for
                                    Healthcare Providers. Hospitals and Health Systems are facing unprecedented pressure brought on by increased
                                    regulation, clinical documentation requirements, rising patient payment responsibility, and the ability to understand which metrics matter in these changing paradigms.
                                    At the same time, the rising consumerism means that patients are demanding more transparency in terms of the type of
                                    care provided and their payment responsibility.
                             </p>
                                <p>
                                    Healthcare equips health systems and hospitals with the expertise they
                                    need to successfully transition to value-based care despite these industry challenges.
                           </p>
                            </section>
                            </div>
                          </div>
                    </div> 
                    <div id="sectionII" className="boxsectiontwo">
                        <div className="col-XS-24 col-SM-24 col-MD-44 LarScr-32 page_center">
                            <h1>Product Features</h1>
                            <div className="special_box_section">
                                <div className="special_box" data-aos="fade-left" data-aos-delay="300">
                                    <EventAvailable className="App" />
                                    <h3> Appointment Scheduler</h3>
                                    <p>
                                        Schedule appointments, reschedule, send patients reminders, 
                                        track missed appointments and much more in one interface.
                                   </p>
                                </div>
                                <div className="special_box" data-aos="fade-left" data-aos-delay="400">
                                    <ImportantDevices className="Ele" />
                                    <h3>Electronic Medical Records</h3>
                                    <p>
                                        A fast, simple and versatile EMR module that is quicker
                                        than writing & adapted by over 40 specialities world wide.
                                   </p>
                                </div>
                                <div className="special_box" data-aos="fade-left" data-aos-delay="500">
                                    <Receipt className="Med" />
                                    <h3>Medical Billing</h3>
                                    <p>
                                        Add/View bills & receipts from central billing module.Tightly integrated
                                        with treatments & appointments for seamless experience.
                                        </p>
                                </div>
                                <div className="special_box" data-aos="fade-left" data-aos-delay="600">
                                    <LocalDrink className="Lab" />
                                    <h3>Lab & Radiology</h3>
                                    <p>
                                        Record results, store files and compare with past data. 
                                        Integrated with in-house or 3rd party lab.
                                        </p>
                                </div>
                                <div className="special_box" data-aos="fade-left" data-aos-delay="1000">
                                    <Mail className="SMS" />
                                    <h3>SMS, Email & Chat</h3>
                                    <p>
                                        Automate SMS & email reminders for appointments, medications, 
                                        drug protocols, lab results, follow up's and more.
                                        </p>
                                </div>
                                <div className="special_box" data-aos="fade-left" data-aos-delay="900">
                                    <People className="Cli" />
                                    <h3>Clinic Staff Management</h3>
                                    <p>
                                        You can add/invite doctors, clinic admins, visiting doctors, receptionist, front desk etc centrally from this
                                        module and also control access level of all staff members centrally .
                                        </p>
                                </div>
                                <div className="special_box" data-aos="fade-left" data-aos-delay="800">
                                    <Notifications className="Aut" />
                                    <h3>Automated Patient Reminder</h3>
                                    <p>
                                        Appointment reminders ensures that your patients never miss scheduled appointments.
                                        </p>
                                </div>
                                <div className="special_box" data-aos="fade-left" data-aos-delay="700">
                                    <AttachMoney className="Bil" />
                                    <h3>Billing & Payments</h3>
                                    <p>
                                        Billing & payments with support for packages, ledgers, corporate accounts, 
                                        insurance claims, refunds and reversals.
                                     </p>
                                </div> 
                        </div>
                        </div>
                    </div>
                    <div className="col-XS-24 col-SM-24 col-MD-42 LarScr-38 page_center">
                        <div id="sectionIII" className="boxsectionthree">
                            <AccountCircle style={{ fontSize: 60 }}/>
                            <h1>Patient Portal</h1>
                            <div className="PatPortal_section"> 
                                <p className="mb-1">
                                    Patient portal allows you to view your medical records such as lab results, x-ray reports, and a summary of your care.
                                </p>
                                <p className="mb-1">
                                    You may also pay your hospital bill through the portal.  
                                </p>
                                <p>
                                    Please do not use the portal for emergency communications with your healthcare provider.
                                </p>
                                <center className="action_section" data-aos="zoom-in">
                                    <a href="http://emrapp.appsuretechnologies.com:6338/EMRPatientPortal/index.html" target="_blank">
                                        <img src={Androidappimg} className="getimage" />
                                    </a>
                                    <a href="https://portal.appsuretechnologies.com" target="_blank">
                                        <Button variant="contained" startIcon={<Public />}>Visit Our Website</Button>
                                    </a> 
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="choose_functions">
                        <div className="col-XS-24 col-SM-22 col-MD-42 LarScr-35 page_center">
                            <div className="col-XS-24 col-SM-12 col-MD-24 LarScr-20">
                                <h1>Why Appsure?</h1>
                                <p>
                                    Hospital Information system is a hospital software designed for small and mid-size hospitals and clinics.
                                   </p>
                                <section>
                                    <ul>
                                        <li data-aos="fade-right" data-aos-delay="500">
                                            <div className="Icon"><Notifications /></div>
                                            <div>
                                                <h3>Patient Reminder</h3>
                                                <p>Appointment reminders ensures that your patients never miss scheduled appointments.</p>
                                            </div>
                                        </li>
                                        <li data-aos="fade-right" data-aos-delay="700">
                                            <div className="Icon"><Lock /></div>
                                            <div>
                                                <h3>Data Security</h3>
                                                <p>256-bit encrypted data transmission ensures high level of data security. Data is encrypted at rest.</p>
                                            </div>
                                        </li>
                                        <li data-aos="fade-right" data-aos-delay="900">
                                            <div className="Icon"><Devices /></div>
                                            <div>
                                                <h3>Mobility</h3>
                                                <p>Access to data on the go, anytime and anywhere from your mobile devices such as iPads and Android.</p>
                                            </div>
                                        </li>
                                        <li data-aos="fade-right" data-aos-delay="1100">
                                            <div className="Icon"><Mail /></div>
                                            <div>
                                                <h3>SMS & Email</h3>
                                                <p>Automate SMS & email reminders for appointments, medications, drug protocols, lab results, follow up's and more.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-XS-24 col-SM-12 col-MD-22 LarScr-24 background"></div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}
