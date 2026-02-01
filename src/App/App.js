import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../components/Layout';
import { HomePage } from '../components/Home';
import { Products } from '../components/Products';
import { Projects } from '../components/Projects';
import { About } from '../components/About';
import { ContactUs } from '../components/ContactUs';
import SignUp from '../components/SignUp';
import { Services } from '../components/Services'
import { Tesla } from '../components/Tesla';
import { LTN } from '../components/LTN';
import { Scaffold } from '../components/Scaffold';


export default class App extends Component {

    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={HomePage} />
                <Route path='/Products' component={Products} />
                <Route path='/SignUp' component={SignUp} />
                <Route path='/CheckStatus' component={SignUp} />
                <Route path='/About' component={About} />
                <Route path='/ContactUs' component={ContactUs} />
                <Route path='/Services' component={Services} />
                <Route path='/Tesla' component={Tesla} />
                <Route path='/LTN' component={LTN} />
                <Route path='/Scaffold' component={Scaffold} />
                
                <Route path='/Projects' component={Projects} />
            </Layout>
        );
    }
}
