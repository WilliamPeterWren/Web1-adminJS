import React from 'react'
import "../frontend/assets/sass/app.scss";
import '../frontend/assets/css/style.css';

import Header from './partial/Header';
import Footer from './partial/Footer';

import { Outlet } from 'react-router-dom';

function Index() {
  
    return (
        <div >
        <Header />   
        <Outlet />
        <Footer />
        </div>
    )
}

export default Index
