import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import $ from 'jquery'
import { KeyboardArrowUp } from '@material-ui/icons'; 

export class Layout extends Component {

    static displayName = Layout.name;

    componentDidMount() { 
        $(window).scroll(function () {
            scrollFunction();
        });
    }

    render() {
        return (
            <div className="wrapper">
                <NavMenu />
                <div className="page_content_div">
                    {this.props.children}
                </div>
                <Footer />
                <button className="btn page_floatbtn" title="Go to Top" onClick={GoTop}>
                    <KeyboardArrowUp />
                </button>
            </div>
        );
    }
}

function GoTop() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

function scrollFunction() {
    if ($(window).scrollTop() > 10 || $(window).scrollTop() > 10) {
        $(".navbar").addClass("scroll_shadow_true");
        $(".page_floatbtn").fadeIn(500);
    }
    else {
        $(".navbar").removeClass("scroll_shadow_true");
        $(".page_floatbtn").fadeOut();
    };
};




