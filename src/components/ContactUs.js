import React, { Component } from 'react';
import desktop from '../images/desktop.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Call, Email, LocationOn } from '@material-ui/icons'
import { Form } from '../services/useForm';
import AuthService from '../services/auth.service';
import { ToastContainer, toast, useToast } from 'react-toastify'; 
import Snackbar from '@material-ui/core/Snackbar'; 

export class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: {},
            errors: {},
            toastMessage: '',
            IsToast:false
        };
        this.SendEmail = this.SendEmail;
        this.handleValidation = this.handleValidation;
        this.handleChange = this.handleChange;
        this.notify = this.notify.bind(this);
    }

    handleChange = (field, e) => {
        if (e !== undefined) {
            let fields = this.state.value;
            fields[field] = e.target.value;
            this.setState({ fields });
            this.handleValidation();
        }
    }
    SendEmail = (e) => {
        e.preventDefault();
        if (this.handleValidation()) {
            var url = "Home/SendEmailQuestions";
            const fetch = () => {
                AuthService.createRecord(url, this.state.value).then(response => {
                    if (response != null) { 
                        this.setState({toastMessage: "Thank you for filling in the form, we'll be in touch soon.", IsToast:true, value: { Name: "", Email: "", Message: "" }});                       
                    }
                });
            };
            fetch();

        } 
        setTimeout(() => {
            this.setState({ IsToast: false});
        }, 8000);
    }

    handleValidation = () => {
        let fields = this.state.value;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["Name"]) {
            formIsValid = false;
            errors["Name"] = "Cannot be empty";
        }

        //Email
        if (!fields["Email"]) {
            formIsValid = false;
            errors["Email"] = "Cannot be empty";
        }

        if (typeof fields["Email"] !== "undefined") {
            let lastAtPos = fields["Email"].lastIndexOf('@');
            let lastDotPos = fields["Email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["Email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["Email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["Email"] = "Email is not valid";
            }
        }

        //Message 
        if (!fields["Message"]) {
            formIsValid = false;
            errors["Message"] = "Cannot be empty";
        }
        this.setState({ errors: errors });
        return formIsValid;
    }
    notify = (text) => {
        toast.success(text, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(function () {
            this.setState({ IsToast: false });
        }, 1000);

    }

    render() {
        return (
            <Form onSubmit={this.SendEmail}>
                <div className="Banner_Title Contact_banner">
                    <h1>Contact US</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb_lists">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact US</li>
                        </ol>
                    </nav>
                </div>
                <div className="Contact_page">
                    <div className="col-XS-22 col-SM-20 col-SML-22 col-MD-36 LarScr-25 page_center">
                        <div className="card_section">
                            <div className="special_box">
                                <div>
                                    <h2 className="mb-1">Get In Touch</h2>
                                </div>
                                <ul>
                                    <li>
                                        <div> <LocationOn /></div>
                                        <div>
                                            <p>Bigtower Technologies Private Limited </p>
                                            <p>AN Tower | Royal Nagar | Dharmapuri</p>
                                            <p>Tamilnadu | India - 636705 </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div> <Call /></div>
                                        <div><p>+91 4342 231199 </p></div>
                                    </li>
                                    <li>
                                        <div> <Email /></div>
                                        <div><p>info@Bigtowertechnologies.com </p> </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="Contact_page_questions">

                                <div>
                                    <h2 className="mb-3">Do you have any Questions?</h2>
                                </div>
                                <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 p-0">
                                    <TextField
                                        id="textName"
                                        label="Name"
                                        variant="outlined"
                                        name=" Name"
                                        value={this.state.value["Name"]}
                                        inputRef={input => this.state.value["Name"] === undefined || this.state.value["Name"] === "" ? input && input.focus() : ""}
                                        error={this.state.errors["Name"]}
                                        onChange={this.handleChange.bind(this, "Name")}
                                        type="text" />
                                </div>
                                <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 p-0">
                                    <TextField
                                        id="textEmail"
                                        label="Email"
                                        variant="outlined"
                                        name="Email"
                                        value={this.state.value["Email"]}
                                        error={this.state.errors["Email"]}
                                        onChange={this.handleChange.bind(this, "Email")}
                                        type="email" />
                                </div>
                                <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 p-0">
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        value={this.state.value["Message"]}
                                        onChange={this.handleChange.bind(this, "Message")}
                                        error={this.state.errors["Message"]}
                                        variant="outlined"/>
                                </div>
                                <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 p-0 m-2">
                                    <Button type="submit" variant="contained" color="primary">Send</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div> 
                    <div> 
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',}}
                            open={this.state.IsToast}
                            autoHideDuration={1000}
                            message={this.state.toastMessage}/>
                    </div>

                </div>
            </Form>
        );
    }

}
