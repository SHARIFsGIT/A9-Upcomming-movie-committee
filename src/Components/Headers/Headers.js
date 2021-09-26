import React from 'react';
import './headers.css'
import logo from './logo.png'

const Headers = () => {
    return (
        <div className="header">
            <div className="heading">
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <h1>Upcoming Movie Committee</h1>
                    <h3>Select your actors/actress & predict approximate budget</h3>
                    <h2>Total budget: 50,00,000 BDT</h2>
                </div>
            </div>
            <nav>
                <div>
                <a href="/home">Home</a>
                <a href="/management">Management Board</a>
                <a href="/members">Committee Members</a>
                <a href="/contact">Contact Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Headers;