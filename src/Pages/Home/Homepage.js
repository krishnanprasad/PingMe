import React, { Component } from 'react';
import './HomePage.css';
import Navbardiv from '../../Shared/Navbardiv';
class Homepage extends Component {




    render() {
        return (

            <div>
                <Navbardiv />
                <div className="row justify-content-center" style={{ marginTop: '90px' }}>
                    <div className="col-lg-10 ACard" style={{ backgroundColor: 'white' }}>


                        <div className="row">
                            <div className="p-2 col-md-2 col-sm-12 ImageDiv">
                                <img className="UserImage" src={require('../../assets/Image/Common/user1.jpg')} style={{ width: '130px', height: '130px', borderRadius: '50%' }} />
                            </div>
                            <div className="p-2 col-md-10 col-sm-12 UserInfoDiv">
                                <div className="d-flex flex-column">
                                    <div className="p-2 Varela" style={{ marginTop: '5px', fontSize: '20px' }}>UserName</div>

                                    <div className="p-2 Varela SecondBlack">+91-9790794621</div>
                                    <div className="p-2 Varela SecondBlack" style={{wordBreak:'break-all'}}>Krishnanprasad.93@gmail.com,krishnanra.92@gmail.com</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                
            </div>
        );
    }
}

export default Homepage;