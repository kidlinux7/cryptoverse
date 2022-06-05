import React from 'react'
import { Link } from 'react-router-dom';
// import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-custom fixed-top navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand gradientText"><Link to="/">Cryptoverse</Link></div>

                    <div className="d-sm-none d-none d-md-block d-lg-block d-xl-block d-xxl-block">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <div className="nav-link " aria-current="page"><Link to="/">Home</Link></div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link active" ><Link to="/cryptocurrencies">Cryptocurrencies</Link></div>
                                </li>

                                <li className="nav-item">
                                    <div className="nav-link" ><Link to="/news">News</Link></div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    
                </div>

            </nav>

        </div>

    )
}

export default Navbar