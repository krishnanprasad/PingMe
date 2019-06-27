import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbardiv.css'
class Navbardiv extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-md custom-navbar" style={{ backgroundColor: 'white' }}>
                    <img className="navbar-brand" src="http://acmsocc.github.io/2016/assets/img/googlelogo_color_324x112dp.png" id="logo_custom" width="10%" alt="logo" />
                    <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse " id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item">
                                <Link to="/Home/Dashboard" className="nav-link">
                                    <input type="button" className="btn btn-success btn-block" value="Add Ping" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/Dashboard" className="nav-link"><b>Home</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/Service" className="nav-link"><b>Services</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/Transaction" className="nav-link"><b>Transaction</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/Profile" className="nav-link"><b>Profile</b></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Navbardiv;