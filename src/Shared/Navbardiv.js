import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbardiv.css'
class Navbardiv extends Component {
    render() {
        return (
            <div>
                <nav class="navbar fixed-top navbar-expand-md custom-navbar" style={{ backgroundColor: 'white' }}>
                    <img class="navbar-brand" src="http://acmsocc.github.io/2016/assets/img/googlelogo_color_324x112dp.png" id="logo_custom" width="10%" alt="logo" />
                    <button class="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse " id="collapsibleNavbar">
                        <ul class="navbar-nav ml-auto ">
                            <li class="nav-item">
                                <Link to="/Home/Dashboard" className="nav-link">
                                    <input type="button" class="btn btn-success btn-block" value="Add Ping" />
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Home/Dashboard" className="nav-link"><b>Home</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Home/Service" className="nav-link"><b>Services</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Home/Transaction" className="nav-link"><b>Transaction</b></Link>
                            </li>
                            <li class="nav-item">
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