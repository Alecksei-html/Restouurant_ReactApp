import React from 'react';
// import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from '../app-header/app-header';
import AppSlider from '../app-slider/app-slider';
import AppFooter from '../app-fotter/app-footer';
import AppDelivery from '../app-delivery/app-delivery-form';
import Menu from '../app-menu/app-menu';
import AppContacts from '../app-contacts/app-contacts-form';
import Reviews from '../app-reviews-form/app-reviews-form';
import Events from '../app-event/app-event';
// import AppMenu from '../app-menu/app-menu';
// import AppBanket from '../app-banket/app-banket-form';
// import AppForm from '../app-delivery/app-delivery-form';
// import {Component} from 'react';


import './app.css'



    const  App = () => {
        return (
            <Router>
            <div className="bg">
            <div className="app">
                <AppHeader/>
                <Routes>
                <Route path="*" element={<AppSlider/>}/>
                <Route path="/Ordine" element={<AppDelivery/>}/>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Contacts" element={<AppContacts/>}/>
                <Route path="/Recensioni" element={<Reviews/>}/>
                <Route path="/Eventi" element={<Events/>}/>
                </Routes>
                <AppFooter/>
              </div>
              </div>
            </Router>
         )
    }

export default App;