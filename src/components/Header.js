import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <Link to="/" className="left brand-logo">
                        CryptoBase
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li key="1"><a href="/">Home</a></li>
                        <li key="2"><a href="/about">About</a></li>
                    </ul>
                </div>       
            </nav>
        );
    }
}

export default Header;