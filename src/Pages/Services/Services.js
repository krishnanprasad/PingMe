import React, { Component } from 'react';
import Usage from './Usage';
import Invitation from './Invitation';
import './Services.css';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = { isTabActive: 1, isShowDetail:1 };

    }
    ChangeTab = (tabval) => {
        this.setState({ isTabActive: tabval });
        this.setState({ isShowDetail: tabval });
    }
    render() {
        return (
            <div className="row justify-content-center" style={{ marginTop: '20px' }}>
                <div className="col-lg-10">
                    <div className="d-flex " style={{ backgroundColor: 'white', marginTop: '20px', fontSize: '18px', borderTop: '3px solid #de5555' }}>
                        <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 1 ? 'tabactive' : 'tabnotactive'}`}>
                            <span onClick={() => this.ChangeTab(1)} style={{ cursor: 'pointer' }}>Usage</span>
                        </div>
                        <div style={{ marginRight: '20px' }} className={`p-2 ${this.state.isTabActive == 2 ? 'tabactive' : 'tabnotactive'}`}>
                            <span onClick={() => this.ChangeTab(2)} style={{ cursor: 'pointer' }}>Invitation</span>
                        </div>

                    </div>
                    <div style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>
                        {
                            this.state.isTabActive === 1 ? <Usage /> : null
                        }

                    </div>

                    <div style={{ textAlign: 'left', marginTop: '50px', marginBottom: '30px' }}>
                        {
                            this.state.isTabActive === 2 ? <Invitation /> : null
                        }

                    </div>



                </div>

               
            </div>
        );
    }
}

export default Services;