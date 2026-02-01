import React, { Component, useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import mainLogo from '../images/Logo.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import './NavMenu.css';
import '../css/utility.min.css';
import $ from 'jquery';
import { ArrowDropDown } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    list_Active: {
        'background-color': '#1e73e4 !important',
        'color': '#fff !important'
    },
    navbar: {
        padding: '0px 16px !important',
        backgroundColor: '#ffffff !important',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        height: '60px',
    },
    navItem: {
        fontSize: '13px !important',
        fontWeight: '600 !important',
        color: '#444 !important',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        padding: '8px 16px !important',
        borderRadius: '5px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
            color: '#0071bc !important',
            backgroundColor: 'rgba(0, 113, 188, 0.08)',
        }
    },
    activeItem: {
        color: '#0071bc !important',
    },
    logo: {
        height: '36px !important',
        width: 'auto !important',
        cursor: 'pointer',
    },
    dropdownList: {
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        borderRadius: '4px',
        padding: '8px 0',
        minWidth: '160px'
    },
    loginButton: {
        background: 'linear-gradient(45deg, #0071bc 30%, #009fe3 90%) !important',
        color: '#ffffff !important',
        borderRadius: '50px !important',
        marginLeft: '16px !important',
        padding: '8px 28px !important',
        boxShadow: '0 4px 14px rgba(0, 113, 188, 0.4)',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: 'linear-gradient(45deg, #005a9e 30%, #0071bc 90%) !important',
            color: '#ffffff !important',
            boxShadow: '0 6px 20px rgba(0, 113, 188, 0.6)',
            transform: 'translateY(-2px)'
        }
    }
}));
export default function NavMenu() {

    const displayName = NavMenu.name;

    const classes = useStyles();

    let history = useHistory();

    const [openMenu, setOpenMenu] = useState(history.location.pathname);
    const [isSignUp, setIsSignUp] = useState(true);
    const onSelect = (item) => {
        setOpenMenu(item);
        $("html, body").animate({ scrollTop: 0 }, 100);
        BackdropNav();
        setOpenMenu(item);
        if (item === "/tesla") {
            setIsSignUp(true);
        }
        if (item === "/scaffold") {
            setIsSignUp(true);
        }
        if (item === "/LTN") {
            setIsSignUp(true);
        }
    }

    const togglenavbar = () => {
        NavgationMenuToggle();

        if ($(".page_content_div").hasClass("nav_backdrop")) {
            $(".page_content_div").click(function () {
                BackdropNav();
            })
        }
    }

    const preventDefault = (event) => {
        event.stopPropagation();
    }

    function NavgationMenuToggle() {
        $(".toggleBarIcon").toggleClass("toggleCloseIcon");
        $(".rhs_side").slideToggle("500");
        $(".page_content_div").toggleClass("nav_backdrop");
    }

    function BackdropNav() {
        $(".rhs_side").slideUp("500");
        $(".toggleBarIcon").removeClass("toggleCloseIcon");
        $(".page_content_div").removeClass("nav_backdrop");
    }

    return (
        <header>
            <Navbar className={`navbar navbar-fixed-top topbar ${classes.navbar}`} onClick={preventDefault}>
                <Container className="col">
                    <div id="logo">
                        <button type="button" className="toggle_bar" onClick={togglenavbar}>
                            <span className="toggleBarIcon"></span>
                        </button>
                        <Link to="/"><img src={mainLogo} alt="Company Logo Left Side" className={classes.logo} /></Link>
                    </div>
                    <div id="Menunav" className="rhs_side">
                        <ul className="navbar-nav">
                            <li onClick={() => { onSelect('/'); }}>
                                <NavbarBrand tag={Link} to="/" className={`${classes.navItem} ${openMenu == '/' ? classes.activeItem : ''}`}>Home</NavbarBrand>
                            </li>
                            <li onClick={() => { onSelect('/About'); }}>
                                <NavbarBrand tag={Link} to="/About" className={`${classes.navItem} ${openMenu == '/About' ? classes.activeItem : ''}`}>About</NavbarBrand>
                            </li>
                            
                            <li onClick={() => { onSelect('/Projects'); }} >
                                <NavbarBrand tag={Link} to="/Projects" className={`${classes.navItem} ${openMenu == '/Projects' ? classes.activeItem : ''}`}>Projects</NavbarBrand>
                            </li>
                            <li className="nav_tree_menu" hidden={isSignUp === false ? true : false}>
                                <div className="tree_inside">
                                    <NavbarBrand onClick={() => { onSelect('/Services'); }} tag={Link} to="/Services" className={`${classes.navItem} ${openMenu == '/Services' ? classes.activeItem : ''}`}>Services</NavbarBrand>
                                                                       
                                </div>
                            </li>
                            <li className="nav_tree_menu" hidden={isSignUp === false ? true : false}>
                                <div className="tree_inside">
                                    <NavbarBrand onClick={() => { onSelect('/Services'); }} tag={Link} to="/Services" className={`${classes.navItem} ${openMenu == '/Services' ? classes.activeItem : ''}`}>Our Group</NavbarBrand>
                                    <div>
                                        <div className="sub_navlist">
                                            <ul className={classes.dropdownList} style={{'zIndex':'9999', 'position':'relative','textAlign':'left'}}>
                                               
                                                <li onClick={() => { onSelect('/scaffold'); }} >
                                                    <NavbarBrand tag={Link} to="/scaffold" className={`${classes.navItem} ${openMenu == '/scaffold' ? classes.activeItem : ''}`}>Scaffold</NavbarBrand>
                                                </li>
                                                <li onClick={() => { onSelect('/LTN'); }} >
                                                    <NavbarBrand tag={Link} to="/LTN" className={`${classes.navItem} ${openMenu == '/LTN' ? classes.activeItem : ''}`}>LTN</NavbarBrand>
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                </div>
                            </li>
                            <li className="nav_tree_menu" hidden={isSignUp === true ? true : false}>
                                <div className="tree_inside">
                                    <NavbarBrand tag={Link} to="/Services" className={`${classes.navItem} ${openMenu == '/Services' ? classes.activeItem : ''}`}>Services</NavbarBrand>
                                    <ArrowDropDown className="down_icon" />
                                    <div>
                                        <div className="sub_navlist">
                                            <ul className={classes.dropdownList} style={{'zIndex':'9999', 'position':'relative','textAlign':'left'}}>
                                                <li onClick={() => { onSelect('/tesla'); }} >
                                                    <NavbarBrand tag={Link} to="/tesla" className={`${classes.navItem} ${openMenu == '/tesla' ? classes.activeItem : ''}`}>Tesla</NavbarBrand>
                                                </li>
                                                <li onClick={() => { onSelect('/scaffold'); }} >
                                                    <NavbarBrand tag={Link} to="/scaffold" className={`${classes.navItem} ${openMenu == '/scaffold' ? classes.activeItem : ''}`}>Scaffold</NavbarBrand>
                                                </li>
                                            
                                                <li onClick={() => { onSelect('/LTN'); }} >
                                                    <NavbarBrand tag={Link} to="/LTN" className={`${classes.navItem} ${openMenu == '/LTN' ? classes.activeItem : ''}`}>LTN</NavbarBrand>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => { onSelect('/ContactUs'); }}>
                                <NavbarBrand tag={Link} to="/ContactUs" className={`${classes.navItem} ${openMenu == '/ContactUs' ? classes.activeItem : ''}`}>Connect</NavbarBrand>
                            </li>
                            <li onClick={() => { onSelect('/login'); }}>
                                <NavbarBrand tag={Link} to="" target="_blank" rel="noopener noreferrer" className={`${classes.navItem} ${classes.loginButton}`}>Login</NavbarBrand>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Navbar>
        </header>
    );

}
