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
            <Navbar className="navbar navbar-fixed-top topbar" onClick={preventDefault}>
                <Container className="col">
                    <div id="logo">
                        <button type="button" className="toggle_bar" onClick={togglenavbar}>
                            <span className="toggleBarIcon"></span>
                        </button>
                        <img src={mainLogo} tag={Link} alt="Company Logo Left Side" style={{'width':'100px','height':'40px'}} to="/"></img>
                    </div>
                    <div id="Menunav" className="rhs_side">
                        <ul className="navbar-nav">
                            <li onClick={() => { onSelect('/'); }}>
                                <NavbarBrand tag={Link} to="/" className={openMenu == '/' ? 'navitem-active' : ''}>Home</NavbarBrand>
                            </li>
                            <li onClick={() => { onSelect('/Products'); }} >
                                <NavbarBrand tag={Link} to="/Products" className={openMenu == '/Products' ? 'navitem-active' : ''}>Products</NavbarBrand>
                            </li>
                            <li onClick={() => { onSelect('/About'); }}>
                                <NavbarBrand tag={Link} to="/About" className={openMenu == '/About' ? 'navitem-active' : ''}>About</NavbarBrand>
                            </li>
                            <li onClick={() => { onSelect('/Services'); }}>
                                <NavbarBrand tag={Link} to="/Services" className={openMenu == '/Services' ? 'navitem-active' : ''}>Services</NavbarBrand>
                            </li>
                            <li onClick={() => { onSelect('/ContactUs'); }}>
                                <NavbarBrand tag={Link} to="/ContactUs" className={openMenu == '/ContactUs' ? 'navitem-active' : ''}>Contact Us</NavbarBrand>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Navbar>
        </header>
    );

}
