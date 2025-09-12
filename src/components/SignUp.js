import React, { useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import AuthService from '../services/auth.service';
import Button from '@material-ui/core/Button';
import { useForm, Form } from '../services/useForm';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Pause, Done, Edit, KeyboardArrowLeft, KeyboardArrowRight, Search, Close } from '@material-ui/icons';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import MaskedInput from 'react-text-mask';
import { OutlinedInput } from '@material-ui/core';
import signupimg from '../images/SVG/signup.svg';
import Facilityimg from '../images/blocks.png';
import Facilityinfoimg from '../images/SVG/companyinfo.svg';
import { red } from '@material-ui/core/colors';
import ReactDOM from 'react-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import $ from 'jquery';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputMask from "react-input-mask";
import Snackbar from '@material-ui/core/Snackbar';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital, faClinicMedical, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';

const initialFValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    OTP: "",
    isOTP: true,
    IsDisabled: false,
    name: false,
    signUpdiv: true,
    isSubscription: false,
    facility: true,
    statusCheck: true,
    SignupBtn: "Sign Up",
    CheckStatusBtn: "Check Status",
    Iscancel: true,
    IsSignUp: false,
    IscheckStatus: false,
    CompanyCode: "",
    CompanyName: "",
    Address1: "",
    Address2: "",
    Zip: "",
    City: "",
    State: "",
    Phone: "",
    Fax: "",
    Mobile: "",
    TaxId: "",
    NPI: "",
    EmailAddress: "",
    ContactFirstName: "",
    ContactLastName: "",
    NoOfProvider: "",
    NoOfNurse: "",
    Header: "Sign Up / Check Status",
    FacilityType: 0,
    Country: 0,
    errorEmail: false,
    errorOTP: false,
    errorEmailTxt: "",
    errorOTPTxt: "",
    clicked: false,
    IsRejectReason: true,
    IsHoldReason: true,
    reason: "",
    status: "",
    isRefesh: false,
    countrySelection: true,
    isFacility: false,
    isReCaptcha: false,
    isCaptchaHeader: false,
    ZipCodeData: [],
    SubScriptionTypeId: 0,
    IsToast: false,
    toastMessage: ""
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 18,
    },
    active: {
        '& $line': {
            backgroundColor: '#20a149',
        },
    },
    completed: {
        '& $line': {
            backgroundColor: '#20a149',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#dddbdc',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        fill: '#ffffff',
        color: '#ffffff',
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: '#20a149',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundColor: '#20a149',
    },
});

function ColorlibStepIcon(props) {
    const values = 0;
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
    const [activeStep, setActiveStep] = React.useState(0);

    const icons = values.length === 0 ? { 1: <Edit />, 2: <Pause /> } : { 1: <Edit />, 2: <Pause />, 3: <Done /> };


return (
    <div
        className={clsx(classes.root, {
            [classes.active]: active,
            [classes.completed]: completed,
        })}
    >
        {icons[String(props.icon)]}
    </div>
);
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps(dm) {
    if (dm != undefined) {
        if (dm.requestStatus == 5) {
            return ["Requested", "In-Progress", "Pending"]
        }
        else if (dm.requestStatus == 1 || dm.requestStatus == 0) {
            return ["Requested", "Pending"];

        } else {
            const status = dm.requestStatus == 3 ? "Rejected" : dm.requestStatus == 4 ? "Hold" : dm.requestStatus == 10 ? "Setup In-Progress" : "Live";;

            return ["Requested", "Processed", status]
        }
    }
    else {
        return [];
    }
}

function TextMaskCustom(props) {

    const { inputRef, ...other } = props;

    return (
        <InputMask
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask="999-999-9999"
            maskChar="" />
    );
}

function TextMaskCustomTaxId(props) {

    const { inputRef, ...other } = props;

    return (
        <InputMask
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask="99-99999999"
            maskChar=""

        />
    );
}
function TextMaskCustomNPI(props) {

    const { inputRef, ...other } = props;

    return (
        <InputMask
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask="9999999999"
        />
    );
}
 
 
function SubComponent({ row, tstate, GetSubscriptionStart }) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }; 
    const GetSubscriptionDetails = () => {
        setOpen(true);
    };
    return (
        <li>
            <div className="pricingcard">
                <div onClick={GetSubscriptionDetails}>
                    <div className="bg_section" style={{ 'backgroundColor': row.backColor, 'color': row.foreColor }}>
                        <h4 title={row.subscriptionName}>{row.subscriptionName}</h4>
                        <h1><span className="dollorsign">$</span>{row.baseAmount}</h1>
                        <div className="validity">per month</div>
                        <p title={row.promoText} className="promoText"><span className="caption">{row.promoText}</span></p>
                    </div>
                    <div>
                        <div className="subtitle" style={{ 'color': row.backColor }}>{row.subTitle}</div>
                        <p className="descrption" dangerouslySetInnerHTML={{ __html: row.subscriptionDetails }}></p>
                    </div>
                </div>
                <div className="footer">
                    <Button type="submit" variant="contained" className="action_button" onClick={() => { GetSubscriptionStart(row) }}>Get Started</Button>
                </div> 
            </div>

            <Dialog className="dlgexpand_subsDetails" 
                open={open} maxWidth={'md'} fullWidth="true"
                onClose={handleClose} disableBackdropClick="true"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" className="bg-white">
                    <div className="pull-left w-100"> Subscription Details </div>
                    <div className="pull-right"><Close onClick={handleClose} style={{ "cursor": "pointer" }} /></div> 
                    </DialogTitle>
                <DialogContent> 
                        <div className="bg_section" style={{ 'backgroundColor': row.backColor, 'color': row.foreColor }}>
                            <h4 title={row.subscriptionName}>{row.subscriptionName}</h4>
                            <h1><span className="dollorsign">$</span>{row.baseAmount}</h1>
                            <div className="validity">per month</div>
                        <p title={row.promoText} className="promoText"><span className="caption">{row.promoText}</span></p>
                        </div>
                        <div className="allPrice_details">
                            <ul className="list-unstyled d-flex">
                            <li hidden={row.isHospital == 1 ? false:true}>
                                    <div>
                                        <FontAwesomeIcon icon={faHospital} className="loc-hospital" />
                                              Hospital -
                                             <span> ${row.hospitalStartingAmount}</span>
                                    </div>
                                </li>
                            <li hidden={row.isClinic == 1 ? false : true}>
                                    <div><FontAwesomeIcon icon={faClinicMedical} className="loc-clinic" />
                                           Clinic -
                                            <span> ${row.clinicStartingAmount}</span>
                                    </div>
                                </li>
                            <li hidden={row.isRMS == 1 ? false : true}>
                                    <div><FontAwesomeIcon icon={faPlusSquare} className="loc-rms" />
                                            RMS -
                                            <span>${row.rmsStartingAmount}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="dlg_content"> 
                            <div className="subtitle">
                                <div className="caption_que">SubTitle</div>
                                <div className="caption_ans" style={{ 'color': row.backColor }}> {row.subTitle}</div> 
                            </div>
                            <div>
                                <div className="caption_que">Description</div>
                                <div className="caption_ans">
                                    <span className="descrption" dangerouslySetInnerHTML={{ __html: row.subscriptionDetails }}></span>
                                </div>
                            </div>  
                        </div>  
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" onClick={() => { GetSubscriptionStart(row, setOpen) }}>Get Started</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </li>
    );
}

function ClsSubscription(props) {
    const { GetSubscriptionStart } = props;

    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        const GetSubscriptions = () => {
            var url = "Home/GetSubscriptions";
            AuthService.getRecords(url).then(response => {
                if (response) {
                    setSubscriptions(response.data && response.data.length ? response.data : []);
                }
            }).catch(error => {
                setSubscriptions([]);
            });
        };
        GetSubscriptions();
    }, []);

    PriceNavbtnFunction();

    const ScrollPriceCardLeft = () => {
        $(".price_card_repeater").animate({
            scrollLeft: "-=360px"
        }, "slow");
    };

    const ScrollPriceCardRight = () => {
        $(".price_card_repeater").animate({
            scrollLeft: "+=360px"
        }, "slow");
    };

    function PriceNavbtnFunction() {
        $("#scroll-priceleft").addClass("invisible");
        $(".price_card_repeater").scroll(function () {
            if ($(this).scrollLeft() >= 25) {
                $("#scroll-priceleft").removeClass("invisible");
                $("#scroll-priceleft").addClass("visible");
                $("#scroll-priceright").removeClass("invisible");
                $("#scroll-priceright").addClass("visible");
            }

            if ($(this).scrollLeft() <= 25) {
                $("#scroll-priceleft").removeClass("invisible");
                $("#scroll-priceleft").addClass("visible");
                $("#scroll-priceright").removeClass("visible");
                $("#scroll-priceright").addClass("visible");
            }

            if ($(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth) {
                $("#scroll-priceright").addClass("invisible");
                $("#scroll-priceleft").removeClass("invisible");
                $("#scroll-priceleft").addClass("visible");
            }

            if ($(this).scrollLeft() == 0) {
                $("#scroll-priceleft").removeClass("visible");
                $("#scroll-priceleft").addClass("invisible");
            }
        });
    };

    return (
        <div className="pricing_page" id="divSubscription">
            <section className="banner">
                <h1>Welcome to our Digital HealthCare Solutions all in one Place</h1>
                <p className="mb-2">Your Choice, Your Package.</p>
                <nav aria-label="breadcrumb" className="breadcrumb_lists d-none">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Sign Up</li>
                    </ol>
                </nav>
            </section>
            <section className="price_card">
                <Tooltip title="Previous" arrow>
                    <div id="scroll-priceleft" title="" className="scroll_nav" onClick={ScrollPriceCardLeft}>
                        <KeyboardArrowLeft />
                    </div>
                </Tooltip> 
                <div className="overall_cards">
                    <div className="price_card_repeater">
                        <ul>
                            {subscriptions.map((choice, i) => (
                                <SubComponent
                                    GetSubscriptionStart={GetSubscriptionStart}
                                    key={i}
                                    row={choice}
                                    tstate={this}
                                />
                            ))}
                        </ul>
                    </div>
                </div> 
                <Tooltip title="Next" arrow>
                    <div id="scroll-priceright" className="scroll_nav" onClick={ScrollPriceCardRight}>
                        <KeyboardArrowRight />
                    </div>
                </Tooltip> 
            </section>
        </div>
    );

}

const steps = getSteps();

export default function SignUp(props) {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        temp.FirstName = values.name == true ? "" : temp.FirstName;
        temp.LastName = values.name == true ? "" : temp.LastName;
        if (values.name == false && 'FirstName' in fieldValues)
            temp.FirstName = fieldValues.FirstName ? "" : "This field is required."
        if (values.name == false && 'LastName' in fieldValues)
            temp.LastName = fieldValues.LastName ? "" : "This field is required."
        if ('Email' in fieldValues)
            temp.Email = fieldValues.Email ? "" : "This field is required."
        if (values.isOTP == false && 'OTP' in fieldValues)
            temp.OTP = fieldValues.OTP ? "" : "This field is required."
        if (values.facility == false && 'CompanyName' in fieldValues)
            temp.CompanyName = fieldValues.CompanyName ? "" : "This field is required."
        if (values.facility == false && 'FacilityType' in fieldValues)
            temp.FacilityType = fieldValues.FacilityType ? "" : "This field is required."
        if (values.facility == false && 'Address1' in fieldValues)
            temp.Address1 = fieldValues.Address1 ? "" : "This field is required."
        if (values.facility == false && 'Country' in fieldValues)
            temp.Country = fieldValues.Country ? "" : "This field is required."
        if (values.facility == false && 'Zip' in fieldValues)
            temp.Zip = fieldValues.Zip ? "" : "This field is required."
        if (values.facility == false && 'City' in fieldValues)
            temp.City = fieldValues.City ? "" : "This field is required."
        if (values.facility == false && 'State' in fieldValues)
            temp.State = fieldValues.State ? "" : "This field is required."
        if (values.facility == false && 'Phone' in fieldValues)
            temp.Phone = fieldValues.Phone ? "" : "This field is required."
        if (values.facility == false && 'Fax' in fieldValues)
            temp.Fax = fieldValues.Fax ? "" : "This field is required."
        if (values.facility == false && 'Mobile' in fieldValues)
            temp.Mobile = fieldValues.Mobile ? "" : "This field is required."
        if (values.facility == false && 'TaxId' in fieldValues)
            temp.TaxId = fieldValues.TaxId ? "" : "This field is required."
        if (values.facility == false && 'NPI' in fieldValues)
            temp.NPI = fieldValues.NPI ? "" : "This field is required."
        if (values.facility == false && 'EmailAddress' in fieldValues)
            temp.EmailAddress = fieldValues.EmailAddress ? "" : "This field is required."
        if (values.facility == false && 'ContactFirstName' in fieldValues)
            temp.ContactFirstName = fieldValues.ContactFirstName ? "" : "This field is required."
        if (values.facility == false && 'ContactLastName' in fieldValues)
            temp.ContactLastName = fieldValues.ContactLastName ? "" : "This field is required."
        if (values.facility == false && 'Salutation' in fieldValues)
            temp.Salutation = fieldValues.Salutation ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm({ ...initialFValues }, true, validate);


    useEffect(() => {
        const CheckStatus = () => {
            if (props.location.pathname === "/CheckStatus") {
                values.signUpdiv = false;
                values.isSubscription = true;
                values.name = true;
                values.errorEmail = false;
                values.errorOTP = false;
                values.errorEmailTxt = "";
                values.errorOTPTxt = "";
                values.clicked = true;
                values.Header = "Check Status";
                values.CheckStatusBtn = values.CheckStatusBtn == "Validate OTP" ? values.CheckStatusBtn : "Next";
                values.Iscancel = values.CheckStatusBtn == "Validate OTP" ? false : true;
                validate();
            }
        };
        CheckStatus();
    }, []);
     

    const GetSubscriptionStart = (item, state) => {
        values.signUpdiv = false;
        values.isSubscription = true;
        values.SubScriptionTypeId = item.subscriptionTypeId;
        if (state) {
            state(false);
        }
        setValues({ ...values });
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        values.Header = "Sign Up";
        values.errorEmail = false;
        values.errorOTP = false;
        values.errorEmailTxt = "";
        values.errorOTPTxt = "";
        values.clicked = false;
        if (values.IsSignUp == false && values.CheckStatusBtn == "Next") {
            values.name = false;
            values.CheckStatusBtn = "Check Status";
            validate();
        } else {
            if (validate()) {
                signUpClick(values)
            }
        }
    }

    //sign Up Click
    function signUpClick(values) {
        if (values.FirstName && values.LastName && values.Email) {
            values.CheckStatusBtn = values.CheckStatusBtn == "Validate OTP" ? values.CheckStatusBtn : "Check Status";
            values.Iscancel = values.CheckStatusBtn == "Validate OTP" ? false : true;
            var url = "Home/SignUp";
            const fetch = () => {
                AuthService.createRecord(url, values).then(response => {
                    if (response != null) {
                        if (response.data == "OTP Validation Success") {
                            values.isSubscription = true;
                            values.signUpdiv = true;
                            values.facility = false;
                            values.isFacility = true;
                            values.countrySelection = false;
                            values.errorEmail = false;
                            values.errorOTP = false;
                            values.ContactFirstName = values.FirstName;
                            values.ContactLastName = values.LastName;
                            values.EmailAddress = values.Email;
                            validate();
                        } else {
                            values.isOTP = false;
                            values.IsDisabled = true;
                            values.Iscancel = false;
                            values.SignupBtn = "Validate OTP";
                            values.IscheckStatus = true;
                            values.isCaptchaHeader = true;
                            validate();
                        }

                    }
                }).catch(error => {
                    if (error.response.status == 409) {
                        error.response.data == "Entered OTP Invalid" ? values.errorOTP = true : values.errorEmail = true;
                        values.errorEmailTxt = values.errorEmail == true ? error.response.data : "";
                        values.errorOTPTxt = values.errorOTP == true ? error.response.data : "";
                        values.Iscancel = values.SignupBtn == "Sign Up" ? true : false;
                        validate();
                    }
                });
            };
            fetch();
        }
    }

    //Facility Status
    function Progress(dm) {
        var count = 0;
        var val = [];
        if (dm.requestStatus == 1 || dm.requestStatus == 0) {
            count = 1;
            val = getSteps(dm);
        } else if (dm.requestStatus == 5) {
            count = 3;
            val = getSteps(dm);
        } else {
            count = 3;
            val = getSteps(dm);
        }
        steps.splice(0, steps.length);
        for (var i = 0; i < val.length; i++) {
            steps.push(val[i]);
        }
        setActiveStep(count);

    }

    //facility Save
    const facilitySave = e => {
        var facility = {
            'companyName': values.CompanyName,
            'facilityTypeId': Number(values.FacilityType == undefined ? 0 : values.FacilityType),
            'address1': values.Address1,
            'address2': values.Address2,
            'countryId': Number(values.Country == undefined ? 0 : values.Country),
            'zipCode': values.Zip,
            'city': values.City,
            'state': values.State,
            'phone': values.Phone,
            'faxNo': values.Fax,
            'mobileNo': values.Mobile,
            'taxId': values.TaxId,
            'email': values.EmailAddress,
            'npI': values.NPI,
            'salutation': Number(values.Salutation == undefined ? 0 : values.Salutation),
            'contactFirstName': values.ContactFirstName,
            'contactLastName': values.ContactLastName,
            'numberOfProvider': Number(values.NoOfProvider),
            'numberOfNurse': Number(values.NoOfNurse),
            'SubScriptionTypeId': values.SubScriptionTypeId
        }
        if (validate()) {
            var url = "Home/FacilitySave";
            const fetch = () => {
                AuthService.createRecord(url, facility).then(response => {
                    if (response != null) {
                        if (response.status == 200 && response.data.companyCode != "") {
                            values.facility = true;
                            values.signUpdiv = true;
                            values.statusCheck = false;
                            Progress(response.data);
                            FacilityStatus(response.data);
                            values.IsToast = true;
                            values.toastMessage = "Facility Saved Successfully";
                            validate();
                        } else {
                            values.facility = false;
                            values.signUpdiv = true;
                            values.statusCheck = true;
                            validate();
                        }
                    }
                }).catch(error => {
                    alert(error.response.data);
                });
            };
            fetch();
        }
        setTimeout(() => {
            values.IsToast = false;
            validate();
        }, 8000)

    }

    //facility refresh
    const refreshClick = () => {
        var Email = values.Email.replaceAll(" ", "");
        const fetch = () => {
            AuthService.getRecords('Home/CompanyStatusGet?email=' + Email).then(response => {
                if (response.status == 200 && response.data.CompanyCode != "") {
                    values.facility = true;
                    values.signUpdiv = true;
                    values.statusCheck = false;
                    FacilityStatus(response.data);
                    Progress(response.data);
                    validate();
                } else {
                    values.facility = false;
                    values.signUpdiv = true;
                    values.statusCheck = true;
                    values.ContactFirstName = response.data.contactFirstName;
                    values.ContactLastName = response.data.contactLastName;
                    values.EmailAddress = response.data.email;
                    validate();
                }
            }).catch(error => {

            });
        };
        fetch();
    }

    //facility Statusget
    const checkStatus = () => {
        values.name = true;
        values.errorEmail = false;
        values.errorOTP = false;
        values.errorEmailTxt = "";
        values.errorOTPTxt = "";
        values.clicked = true;
        values.Header = "Check Status";
        values.CheckStatusBtn = values.CheckStatusBtn == "Validate OTP" ? values.CheckStatusBtn : "Next";
        values.Iscancel = values.CheckStatusBtn == "Validate OTP" ? false : true;
        if (validate()) {
            if (values.Email) {
                var url = "Home/CheckStatus";
                const fetch = () => {
                    AuthService.createRecord(url, values).then(response => {
                        if (response != null) {
                            if (response.status == 200 && response.data == "OTP Sent Successfully") {
                                values.isOTP = false;
                                values.IsDisabled = true;
                                values.CheckStatusBtn = "Validate OTP";
                                values.Iscancel = false;
                                values.IsSignUp = true;
                                values.isCaptchaHeader = true;
                                validate();
                            } else if (response.status == 409 && response.data == "Entered OTP Invalid") {

                            } else if (response.status == 200 && response.data != null) {
                                if (response.data.companyCode != "" && response.data.companyCode != null) {
                                    values.facility = true;
                                    values.signUpdiv = true;
                                    values.statusCheck = false;
                                    FacilityStatus(response.data);
                                    Progress(response.data);
                                    validate();
                                } else {
                                    values.facility = false;
                                    values.signUpdiv = true;
                                    values.statusCheck = true;
                                    values.facility = false;
                                    values.isFacility = true;
                                    values.countrySelection = false;
                                    values.ContactFirstName = response.data.contactFirstName;
                                    values.ContactLastName = response.data.contactLastName;
                                    values.EmailAddress = response.data.email;
                                    validate();
                                }
                            } else {
                                alert(response.data);
                            }

                        }
                    }).catch(error => {
                        if (error.response.status == 409) {
                            error.response.data == "Entered OTP Invalid" ? values.errorOTP = true : values.errorEmail = true;
                            values.errorEmailTxt = values.errorEmail == true ? error.response.data : "";
                            values.errorOTPTxt = values.errorOTP == true ? error.response.data : "";
                            values.Iscancel = values.CheckStatusBtn == "Next" ? true : false;
                            validate();
                        }
                    });
                };
                fetch();
            }
        }

    }

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const [facility, setFacility] = React.useState('');

    const [Numval, formatSet] = React.useState({
        textmask: '--'
    });

    TextMaskCustom.propTypes = {
        inputRef: PropTypes.func.isRequired,
    };

    const recordForChange = (val) => {
        if (val.open === true) {
            values.facility = false;
            values.signUpdiv = true;
            values.statusCheck = true;
            values.Address1 = val.NPIValues.addresses[0].address_1 == null ? "" : val.NPIValues.addresses[0].address_1;
            values.Address2 = val.NPIValues.addresses[0].address_2 == null ? "" : val.NPIValues.addresses[0].address_2;
            values.Zip = val.NPIValues.addresses[0].postal_code == null ? "" : val.NPIValues.addresses[0].postal_code;
            values.State = val.NPIValues.addresses[0].state == null ? "" : val.NPIValues.addresses[0].state;
            values.City = val.NPIValues.addresses[0].city == null ? "" : val.NPIValues.addresses[0].city;
            values.Phone = val.NPIValues.addresses[0].telephone_number == null ? "" : val.NPIValues.addresses[0].telephone_number;
            values.Fax = val.NPIValues.addresses[0].fax_number == null ? "" : val.NPIValues.addresses[0].fax_number;
            values.Country = val.Country;
            values.NPI = val.npi;
            values.isFacility = false;
            values.Zip = values.Zip.slice(0, 5);
            values.ZipCodeData = [{
                "zipCode": values.Zip,
                "state": values.State,
                "city": values.City
            }]

        } else if (val.Country == 2) {
            values.Address1 = "";
            values.Address2 = "";
            values.Zip = "";
            values.State = "";
            values.City = "";
            values.Phone = "";
            values.Fax = "";
            values.Mobile = "";
            values.TaxId = "";
            values.Country = val.Country;
            values.NPI = "";
            values.isFacility = false;
        } else {
            values.Country = val.Country;
            values.isFacility = true;
        }
        validate();
    }
    const OnzipCodeCange = (val) => {
        if (val.ZipCodeData !== undefined && val.ZipCodeData.length > 0) {
            values.Zip = val.ZipCodeData[0].zipCode;
            values.State = val.ZipCodeData[0].state;
            values.City = val.ZipCodeData[0].city;
            validate();
        }
    }
    //status Reason
    function FacilityStatus(dm) {
        values.reason = dm.requestStatus == 3 ? dm.reasonForReject : dm.requestStatus == 4 ? dm.reasonForHold : "";
        values.status = dm.requestStatus == 0 ? "Pending" : dm.requestStatus == 5 ? "In-Progress" : dm.requestStatus == 2 ? "Live" : dm.requestStatus == 3 ? "Request Rejected" : dm.requestStatus == 4 ? "Hold" : dm.requestStatus == 10 ? "Setup In-Progress" : "Pending";
        dm.requestStatus == 3 ? values.IsRejectReason = false : values.IsRejectReason = true;
        dm.requestStatus == 4 ? values.IsHoldReason = false : values.IsHoldReason = true;
    }

    function setToken(token) {
        const fetch = () => {
            AuthService.getRecords('Home/IsReCaptchValid?token=' + token).then(response => {
                if (response.status == 200) {
                    values.isReCaptcha = response.data;
                    validate();
                }
            });
        };
        fetch();
    }


    function inputTextChange(event) {
        if (event.target.value.length > 3) {
            var facility = {
                zipCode: event.target.value.length > 5 ? event.target.value.slice(0, 5) : event.target.value,
                countryId: values.Country
            }
            const fetch = () => {
                var url = "Home/GetZipCode";
                AuthService.createRecord(url, facility).then(response => {
                    if (response.status == 200 && response.data.length > 0) {
                        values.ZipCodeData = response.data;
                        values.Zip = facility.zipCode;
                        validate();
                    }
                }).catch(error => {
                    alert('error');
                });
            };
            fetch();
        }
    }

    const SelectedValue = (zipCode, state, city) => {
        if (values.Zip != zipCode || values.State != state || values.City != city) {
            values.Zip = zipCode;
            values.State = state;
            values.City = city;
            validate();
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div hidden={values.isSubscription}>
                <ClsSubscription GetSubscriptionStart={GetSubscriptionStart}  />
            </div>
            <div hidden={values.signUpdiv}>
                <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 flex-center-xy flex-column-xs" style={{ 'margin': '100px 0' }}>
                    <div className="col-XS-24 col-SM-11 col-MD-20 LarScr-16">
                        <img src={signupimg} style={{ 'width': '100%' }} />
                    </div>
                    <div className="col-XS-24 col-SM-13 col-MD-20 LarScr-14 rhs_paddingleft">
                        <div className="page_title">
                            <h2> {values.Header} </h2>
                        </div>
                        <div className="col-XS-24 col-SM-20 col-SML-15 col-MD-36 LarScr-41">
                            <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 p-0">
                                <TextField
                                    id="textFirstName"
                                    label="First Name"
                                    variant="outlined"
                                    name="FirstName"
                                    type="text"
                                    value={values.FirstName}
                                    onChange={handleInputChange}
                                    error={errors.FirstName}
                                    disabled={values.IsDisabled}
                                    hidden={values.name}
                                    inputRef={input => values.name === false && values.FirstName === "" ? input && input.focus() : ""}
                                />
                            </div>
                            <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 p-0">
                                <TextField
                                    id="textLastName"
                                    label="Last Name"
                                    variant="outlined"
                                    name="LastName"
                                    value={values.LastName}
                                    onChange={handleInputChange}
                                    error={errors.LastName}
                                    disabled={values.IsDisabled}
                                    hidden={values.name} />
                            </div>
                            <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 p-0">
                                <TextField
                                    id="textEmail"
                                    label="Email"
                                    variant="outlined"
                                    name="Email"
                                    type="email"
                                    value={values.Email}
                                    onChange={handleInputChange}
                                    error={errors.Email}
                                    disabled={values.IsDisabled}
                                    inputRef={input => values.name == true && values.Email == "" ? input && input.focus() : ""}
                                />
                                <StepLabel className="pl-2" error={values.errorEmail}> {values.errorEmailTxt} </StepLabel>
                            </div>

                            <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 p-0">
                                <TextField
                                    id="txtOTP"
                                    label="OTP"
                                    variant="outlined"
                                    name="OTP"
                                    value={values.OTP}
                                    onChange={handleInputChange}
                                    error={errors.OTP}
                                    inputProps={{ maxLength: 6 }}
                                    hidden={values.isOTP}
                                    inputRef={input => values.isOTP === false && values.Email !== "" && values.OTP === "" ? input && input.focus() : ""}
                                />
                                <StepLabel className="pl-2" error={values.errorOTP}>{values.errorOTPTxt} </StepLabel>
                            </div>

                            <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 p-0 m-2">
                                <Button hidden={values.IsSignUp} type="submit" variant="contained" color={values.clicked ? "" : "primary"}>
                                    {values.SignupBtn}
                                </Button>

                                <Button hidden={values.IscheckStatus} variant="contained" color={values.clicked ? "primary" : ""} onClick={checkStatus}>
                                    {values.CheckStatusBtn}
                                </Button>

                                <Button hidden={values.Iscancel} variant="contained" onClick={event => window.location.href = '/signup'}>
                                    Cancel
                                  </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div hidden={values.statusCheck} className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 flex-center-x flex-column-xs" style={{ 'margin': '70px 0' }}>
                <div className="col-XS-24 col-SM-9 col-MD-20 LarScr-20">
                    <img src={Facilityinfoimg} style={{ 'width': '100%' }} />
                </div>
                <div className="col-XS-24 col-SM-15 col-MD-28 LarScr-20 rhs_paddingleft">
                    <h2 className="page_title">Facility Status</h2>
                    <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 Facility_stepper">
                        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                            {steps.map((label) => (<Step key={label}>
                                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                    </div>
                    <br />  <br />
                    <div className="comp_status_panel">
                        <ul>
                            <li id="Statusheader">
                                <div className="Que_label"><b>Request Status</b></div>
                                <div className="Ans_label" id="Status">{values.status}</div>
                            </li>
                            <li id="Reject" hidden={values.IsRejectReason}>
                                <div className="Que_label"><b>Reason for Reject</b></div>
                                <div className="Ans_label" id="RejectReason">{values.reason}</div>
                            </li>
                            <li id="hold" hidden={values.IsHoldReason}>
                                <div className="Que_label"><b>Reason for Hold</b></div>
                                <div className="Ans_label" id="HoldReason">{values.reason}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="compstatus_actions">
                        <Button hidden={values.isRefesh} variant="contained" onClick={refreshClick}>
                            Refresh
                         </Button>
                        <a id="LogOut" href="Signup">
                            <Button variant="contained" color="primary" onClick={refreshClick}>Back to Sign Up</Button>
                        </a>
                    </div>
                </div>
            </div>
            <div hidden={values.facility} id="facilitydetails">
                <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 flex-center-x flex-column-xs flex-column-sm" style={{ 'margin': '50px 0' }}>
                    <div className="col-XS-24 col-SM-24 col-MD-20 LarScr-20">
                        <img src={Facilityimg} style={{ 'width': '100%' }} />
                    </div>
                    <div className="col-XS-24 col-SM-24 col-MD-28 LarScr-24 rhs_paddingleft">
                        <div className="page_title">
                            <h2> Please Provide your Facility Details </h2>
                        </div>
                        <div className="col-XS-24 col-SM-24 col-SML-15 col-MD-48 LarScr-48 p-0 flex-wrap">
                            <div hidden={values.countrySelection} className="col-XS-24 col-SM-12 col-MD-48 LarScr-48 npi_section">
                                <NpiSearch recordForChange={recordForChange} />
                            </div>
                            <div hidden={values.isFacility} >
                                <div className="col-XS-24 col-SM-12 col-MD-24 LarScr-24">
                                    <TextField
                                        id="FacilityName"
                                        label="Facility Name"
                                        variant="outlined"
                                        name="CompanyName"
                                        type="text"
                                        value={values.CompanyName}
                                        onChange={handleInputChange}
                                        error={errors.CompanyName} />
                                </div>
                                <div className="col-XS-24 col-SM-12 col-MD-24 LarScr-24">
                                    <FormControl variant="outlined">
                                        <InputLabel id="demo-simple-select-outlined-label">Facility Type</InputLabel>
                                        <Select
                                            id="FacilityType"
                                            label="Facility Type"
                                            name="FacilityType"
                                            value={values.FacilityType}
                                            onChange={handleInputChange}
                                            error={errors.FacilityType}>
                                            <MenuItem value={2}>Hospital</MenuItem>
                                            <MenuItem value={3}>Clinic</MenuItem>
                                            <MenuItem value={4}>RMS</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48">
                                    <TextField id="Address1"
                                        label="Address1"
                                        variant="outlined"
                                        name="Address1"
                                        type="text"
                                        value={values.Address1}
                                        onChange={handleInputChange}
                                        error={errors.Address1} />
                                </div>
                                <div className="col-XS-24 col-SM-24 col-MD-48 LarScr-48">
                                    <TextField id="Address2"
                                        label="Address2"
                                        variant="outlined"
                                        name="Address2"
                                        type="text"
                                        value={values.Address2}
                                        onChange={handleInputChange}
                                        error={errors.Address2} />
                                </div>
                                <div className="col-XS-24 col-SM-24 col-MD-12 LarScr-12">
                                    <FormControl variant="outlined">
                                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                        <Select
                                            id="CountryId"
                                            label="Country"
                                            name="Country"
                                            value={values.Country}
                                            onChange={handleInputChange}
                                            error={errors.Country}
                                            disabled={true}
                                        >
                                            <MenuItem value={1}>USA</MenuItem>
                                            <MenuItem value={2}>Columbia</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-XS-24 col-SM-24 col-MD-36 LarScr-36 p-0">

                                    <Autocomplete className="col-XS-24 col-SM-12 col-SML-12 col-MD-16 LarScr-16"
                                        id="combo-box-demo"
                                        name="zipCode"
                                        options={values.ZipCodeData}
                                        getOptionLabel={(option) => option.zipCode || values.Zip}
                                        getOptionSelected={(option, value) => option.zipCode === value.zipCode ? SelectedValue(value.zipCode, value.state, value.city) : ""}
                                        renderOption={(option) => (
                                            <React.Fragment>
                                                <span>({option.zipCode}) - {option.state} - {option.city} </span>
                                            </React.Fragment>
                                        )}
                                        renderInput={(params) => <TextField {...params} onChange={inputTextChange} value={values.Zip} label="Zip Code" name="Zip Code" variant="outlined" error={errors.Zip} />} />

                                    <div className="col-XS-24 col-SM-7 col-SML-7 col-MD-16 LarScr-16">
                                        <TextField type="text" name="City" onChange={handleInputChange} label="City" value={values.City} variant="outlined" error={errors.City} />
                                    </div>

                                    <div className="col-XS-24 col-SM-5 col-SML-5 col-MD-16 LarScr-16">
                                        <TextField type="text" name="State" label="state" inputProps={{ maxLength: 2 }} onChange={handleInputChange} value={values.State} variant="outlined" error={errors.State} />
                                    </div>
                                </div>
                                <div className="col-XS-24 col-SM-12 col-MD-12 LarScr-12">
                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="outlined-text-mask-input" className="MuiFormLabel-setfocus">Phone</InputLabel>
                                        <OutlinedInput
                                            id="outlined-text-mask-input"
                                            value={values.Phone}
                                            error={errors.Phone}
                                            onChange={handleInputChange}
                                            name="Phone" placeholder="Maked Input"
                                            type="text"
                                            inputComponent={TextMaskCustom} />
                                    </FormControl>
                                </div>
                                <div className="col-XS-24 col-SM-12 col-MD-12 LarScr-12">
                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="formatted-text-mask-input" className="MuiFormLabel-setfocus">Fax </InputLabel>
                                        <OutlinedInput
                                            value={values.Fax}
                                            error={errors.Fax}
                                            onChange={handleInputChange}
                                            name="Fax" type="text"
                                            id="formatted-text-mask-input"
                                            inputComponent={TextMaskCustom} />
                                    </FormControl>
                                </div>
                                <div className="col-XS-24 col-SM-12 col-MD-24 LarScr-24">
                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="formatted-text-mask-input">Mobile </InputLabel>
                                        <OutlinedInput
                                            value={values.Mobile}
                                            error={errors.Mobile}
                                            onChange={handleInputChange}
                                            name="Mobile" type="text"
                                            id="formatted-text-mask-input"
                                            inputComponent={TextMaskCustom} />
                                    </FormControl>
                                </div>
                                <div className="col-XS-24 col-SM-12 col-MD-24 LarScr-24">
                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="formatted-text-mask-input">Tax ID</InputLabel>
                                        <OutlinedInput
                                            value={values.TaxId}
                                            error={errors.TaxId}
                                            onChange={handleInputChange}
                                            name="TaxId" type="text"
                                            id="formatted-text-mask-input"
                                            inputComponent={TextMaskCustomTaxId} />
                                    </FormControl>
                                </div>
                                <div className="col-XS-24 col-SM-24 col-MD-24 LarScr-24">
                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="formatted-text-mask-input" className="MuiFormLabel-setfocus">National Provider Identifier (NPI) </InputLabel>
                                        <OutlinedInput
                                            value={values.NPI}
                                            error={errors.NPI}
                                            onChange={handleInputChange}
                                            name="NPI" type="text"
                                            id="formatted-text-mask-input"
                                            inputComponent={TextMaskCustomNPI} />
                                    </FormControl>
                                </div>
                                <div className="col-XS-24 col-SM-24 col-MD-24 LarScr-24">
                                    <TextField
                                        id="Email"
                                        label="Email"
                                        variant="outlined"
                                        name="EmailAddress"
                                        type="Email"
                                        value={values.EmailAddress}
                                        onChange={handleInputChange}
                                        error={errors.EmailAddress}
                                        disabled={values.IsDisabled} />
                                </div>
                                <div className="col-XS-24 col-SM-12 col-MD-12 LarScr-12">
                                    <FormControl variant="outlined">
                                        <InputLabel id="demo-simple-select-Salutation">Salutation</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-Salutation"
                                            id="Salutation"
                                            label="Salutation"
                                            name="Salutation"
                                            value={values.Salutation}
                                            onChange={handleInputChange}
                                            error={errors.Salutation}>
                                            <MenuItem value={1}>Mr</MenuItem>
                                            <MenuItem value={2}>Mrs</MenuItem>
                                            <MenuItem value={3}>Miss</MenuItem>
                                            <MenuItem value={4}>Ms</MenuItem>
                                            <MenuItem value={5}>Dr</MenuItem>
                                            <MenuItem value={6}>Prof</MenuItem>
                                            <MenuItem value={7}>Rev</MenuItem>
                                            <MenuItem value={8}>Lady</MenuItem>
                                            <MenuItem value={9}>Sir</MenuItem>
                                            <MenuItem value={10}>Capt</MenuItem>
                                            <MenuItem value={11}>Major</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-XS-24 col-SM-12 col-MD-24 LarScr-24" style={{ 'clear': 'both' }}>
                                    <TextField id="ConatactFirstName"
                                        label="Contact Person First Name"
                                        variant="outlined"
                                        name="ContactFirstName"
                                        type="text"
                                        value={values.ContactFirstName}
                                        onChange={handleInputChange}
                                        error={errors.ContactFirstName}
                                        disabled={values.IsDisabled} />
                                </div>

                                <div className="col-XS-24 col-SM-12 col-MD-24 LarScr-24">
                                    <TextField id="ContactLastName"
                                        label="Contact Person Last Name"
                                        variant="outlined"
                                        name="ContactLastName"
                                        type="text"
                                        value={values.ContactLastName}
                                        onChange={handleInputChange}
                                        error={errors.ContactLastName}
                                        disabled={values.IsDisabled} /> </div>

                                <div className="col-XS-24 col-SM-12 col-MD-12 LarScr-12">
                                    <TextField id="NoOfProvider"
                                        label="No. of Provider"
                                        variant="outlined"
                                        name="NoOfProvider"
                                        type="text"
                                        value={values.NoOfProvider}
                                        onChange={handleInputChange}
                                        error={errors.NoOfProvider} />
                                </div>
                                <div className="col-XS-24 col-SM-12 col-MD-12 LarScr-12">
                                    <TextField id="NoOfNurse"
                                        label="No. of Nurse"
                                        variant="outlined"
                                        name="NoOfNurse"
                                        type="text"
                                        value={values.NoOfNurse}
                                        onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div hidden={values.isFacility} className="col-XS-24 col-SM-24 col-MD-48 LarScr-48 p-0 m-2">
                            <Button variant="contained" onClick={facilitySave} color="primary">
                                Submit
                              </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={values.IsToast}
                        autoHideDuration={1000}
                        message={values.toastMessage} />
                </div>

            </div>
        </Form>
    );
}

 
export class NpiSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            npi: "",
            open: false,
            NPIValues: [],
            enumeration_date: '',
            NPI_Type: 0,
            Status: '',
            MailingAdd: '',
            PrimaryAdd: '',
            Country: 0,
            npiRecords:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.textChange = this.textChange.bind(this);
        this.handleClose = this.handleClose;
        this.handleAgree = this.handleAgree;
        this.handleInputChange = this.handleInputChange;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.npi != "" && this.state.npi != undefined) {
            var url = "Home/ReferringPhysicianSearch?npi=" + this.state.npi;
            const fetch = () => {
                AuthService.getRecordById(url).then(response => {
                    if (response != null && response.status == 200 && response.data.length > 0) {
                        this.state.NPIValues = response.data[0];
                        this.setState({
                            open: true,
                            enumeration_date: '1',
                            NPI_Type: 1,
                            Status: 'A',
                            MailingAdd: 'test',
                            PrimaryAdd: 'test'
                        });
                    }
                    else if (response !== null && response.status === 200 && response.data.length === 0) {
                        this.setState({ npiRecords:'No Records Found'});
                    }
                }).catch(error => {

                });
            }; fetch();
        }

    }

    handleClose = (e) => {
        this.setState({ open: false })
    };

    handleAgree = (e) => {
        this.setState({ open: false });
        this.props.recordForChange(this.state);
    };
    textChange = (e) => {
        const { name, value } = e.target
        var text = null;
        if (value === '') {
            text = null;
        } else if (e.target.type === 'number') {
            text = parseInt(value);
        } else if (value === true || value === false) {
            text = Boolean(value);
        } else {
            text = value;
        }
        this.setState({
            ...this.state,
            [name]: text, npiRecords: ''
        })
    }
    handleInputChange = (e) => {
        this.setState({ Country: e.target.value, npiRecords:'' });
        this.state.Country = e.target.value;
        this.props.recordForChange(this.state);
    }
    render() {
        return (
            <Form> 
                <div className="col-XS-24 col-SM-12 col-MD-24 LarScr-24">
                    <FormControl variant="outlined">
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            id="CountryId"
                            label="Country"
                            name="Country"
                            value={this.state.Country}
                            onChange={this.handleInputChange}>
                            <MenuItem value={1}>USA</MenuItem>
                            <MenuItem value={2}>Columbia</MenuItem>
                        </Select>
                    </FormControl> 
                </div> 
                <div hidden={this.state.Country !== 1} className="col-XS-24 col-SM-12 col-MD-24 LarScr-24 flex-center-y">

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="formatted-text-mask-input" className="MuiFormLabel-setfocus">NPI</InputLabel>
                        <OutlinedInput
                            value={this.state.npi}
                            onChange={this.textChange}
                            name="npi"
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskCustomNPI}
                        />
                    </FormControl>
                    <div><Button onClick={this.handleSubmit} variant="outlined" color="primary"> Find NPI</Button></div>
                </div>
                <div >
                    <StepLabel className="pl-2" error={true} style={{'float':'right' ,'margin':'0px 226px'}}> {this.state.npiRecords} </StepLabel>
                 </div>
                <Dialog
                    open={this.state.open} maxWidth={'md'}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">National Provider Information (NPI) - {this.state.npi}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <table className="table table-bordered" style={{ 'fontSize': '0.9rem' }}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>NPI</td>
                                    <td>{this.state.npi}</td>
                                </tr>
                                <tr>
                                    <td>Enumeration Date</td>
                                    <td>{this.state.enumeration_date === '' ? '' : this.state.NPIValues.basic.enumeration_date}</td>
                                </tr>
                                <tr>
                                    <td>NPI Type</td>
                                    <td>{this.state.NPI_Type === 0 ? '' : this.state.NPIValues.basic.enumeration_type == 'NPI-2' ? '2-Organization' : this.state.NPIValues.enumeration_type == 'NPI-1' ? '1-Individual' : '0-Any'}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>
                                        <span> {this.state.Status == '' ? '' : this.state.NPIValues.basic.status == 'A' ? 'Active' : 'In-Active'}</span>
                                    </td>

                                </tr>
                                <tr>
                                    <td>Mailing Address	</td>
                                    <td>
                                        <div> {this.state.MailingAdd == '' ? '' : this.state.NPIValues.addresses[1].address_1},</div>
                                        <div> {this.state.MailingAdd == '' ? '' : this.state.NPIValues.addresses[1].address_2},</div>
                                        <div> {this.state.MailingAdd == '' ? '' : this.state.NPIValues.addresses[1].city + ' ,' + this.state.NPIValues.addresses[1].postal_code + '\n' + this.state.NPIValues.addresses[1].country_name + '\n' + ' Phone :' + this.state.NPIValues.addresses[1].telephone_number + '| Fax :' + this.state.NPIValues.addresses[1].fax_number}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Primary Practice Address</td>
                                    <td> <div> {this.state.PrimaryAdd == '' ? '' : this.state.NPIValues.addresses[0].address_1},</div>
                                        <div> {this.state.PrimaryAdd == '' ? '' : this.state.NPIValues.addresses[0].address_2},</div>
                                        <div> {this.state.PrimaryAdd == '' ? '' : this.state.NPIValues.addresses[0].city + ' ,' + this.state.NPIValues.addresses[0].state + ' ,' + this.state.NPIValues.addresses[0].postal_code + '\n' + this.state.NPIValues.addresses[0].country_name + '\n' + ' Phone :' + this.state.NPIValues.addresses[0].telephone_number + '| Fax :' + this.state.NPIValues.addresses[0].fax_number}</div>
                                    </td>
                                </tr>
                            </table>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary" className="font-weight-bold">Disagree</Button>
                        <Button onClick={this.handleAgree} color="primary" className="font-weight-bold" autoFocus>Agree</Button>
                    </DialogActions>
                </Dialog>
            </Form>
        )
    }
}
