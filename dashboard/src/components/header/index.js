import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './style.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">GoldNaari</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/plans">Plans</NavLink>
                            <NavLink to="/collections">Collections</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;