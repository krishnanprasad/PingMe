import React, { Component } from 'react';
import MembershipCard from '../Common/MembershipCard';
import './Dashboard.css'
class Dashboard extends Component {
    shoppingCart = [
        { servicename: 'Netflix', type: "Entertainment", brandcolor: '#e52e2d', logo: 'netflix.jpg', daysleft: 7, enddate: '14 - Jun - 19', cost: 1520, offer: '2% Cashback' },
        { servicename: 'Amazon Prime', type: "Entertainment", brandcolor: '#56ace9', logo: 'amazonprime.jpg', daysleft: 12, enddate: '20 - Jun - 19', cost: 1920, offer: '10% Cashback' },
        { servicename: 'ICICI Insurance', type: "Self", brandcolor: '#972929', logo: 'iciciinsurance.jpg', daysleft: 13, enddate: '21 - Jun - 19', cost: 2100, offer: '10% Cashback' },
        { servicename: 'Shopper Stop', type: "Gift", brandcolor: '#000000', logo: 'shoppersstop.jpg', daysleft: 7, enddate: '14 - Jun - 19', cost: 1520, offer: '10% Cashback' },
        { servicename: 'RMKV', type: "Gift", brandcolor: '#d49a00', logo: 'rmkv.jpg', daysleft: 29, enddate: '20 - Jun - 19', cost: 1920, offer: '2% Cashback' },
        { servicename: 'Bajaj', type: "Maintenance", brandcolor: '#1b3399', logo: 'bajaj.jpg', daysleft: 45, enddate: '21 - Jun - 19', cost: 2100, offer: '1000Rs Cashback' },
        { servicename: 'Croma', type: "Gift", brandcolor: '#00b9bf', logo: 'croma.png', daysleft: 135, enddate: '21 - Jun - 19', cost: 5000, offer: '10% Cashback' },
        { servicename: 'Tata Sky DTH', type: "Entertainment", brandcolor: '#00b9bf', logo: 'tatasky.jpg', daysleft: 28, enddate: '21 - Jun - 19', cost: 1640, offer: '5% Cashback' },
        { servicename: 'Tata Sky Broadband', type: "Utility", brandcolor: '#00b9bf', logo: 'tataskybroadband.jpg', daysleft: 28, enddate: '21 - Jun - 19', cost: 1640, offer: '5% Cashback' },
        { servicename: '26/8 House Rent', type: "Utility", brandcolor: '#00b9bf', logo: 'houserent.png', daysleft: 19, enddate: '05 - Jul - 19', cost: 1640, offer: '5% Cashback' },
        { servicename: 'House Maintenance', type: "Maintenance", brandcolor: '#00b9bf', logo: 'girias.jpeg', daysleft: 19, enddate: '05 - Jul - 19', cost: 1640, offer: '5% Cashback' },

    ]

    headerSections = [
        { value: '16', type: "No. of Service", iconcolor: '#4384d9', logo: 'services.png', daysleft: '13', enddate: '21 - Jun - 19', cost: 2100 },
        { value: '16,500', type: "Wallet", iconcolor: '#67be55', logo: 'wallet.png', daysleft: '7', enddate: '14 - Jun - 19', cost: 1520 },
        { value: '4,240', type: "Due Amount", iconcolor: '#e52f2d', logo: 'discount.png', daysleft: '12', enddate: '20 - Jun - 19', cost: 1920 },
        { value: '2', type: "Ends in 30 Days", iconcolor: '#e9aa17', logo: 'clock.png', daysleft: '7', enddate: '14 - Jun - 19', cost: 1520 },



    ]
    SearchCard = () => {
        return (
            <div className="row" style={{ marginBottom: '20px' }}>
                <div className="col-md-9">
                    <input type="text" class="form-control" placeholder="Search..." />
                </div>
                <div className="col-md-3" style={{ textAlign: 'center' }}>
                    <select className="form-control">
                        <option value="volvo">All</option>
                        <option value="saab">Less than 15 Days</option>
                        <option value="mercedes">Less than 30 Days</option>
                        <option value="audi"> 30 Days and more</option>
                    </select>
                </div>
            </div>
        )
    }
    cardrender = () => {
        return this.headerSections.map((headerSection => {
            return (

                <div className="col-md-3 InfoCard">
                    <div class="ACard d-flex mb-3">
                        <div class="p-2 flex-grow-1 ">
                            <div class="d-flex flex-column">
                                <div class="p-2" style={{ color: `${headerSection.iconcolor}`, fontSize: '30px' }}>{headerSection.value}</div>
                                <div class="p-2 SecondBlack">{headerSection.type}</div>
                            </div>
                        </div>

                        <div class="p-2" style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                            <img src={require(`../../assets/Image/Icons/${headerSection.logo}`)} style={{ width: '44px', height: '44px' }} />
                        </div>
                    </div>
                </div>
            )
        }))
    }
    render() {
        return (
            <div>
                <div className="row justify-content-center" style={{ marginTop: '20px' }}>

                    <div class="col-lg-10">
                        {/* <div className="InfoCardRow">
                            {this.cardrender()}
                        </div> */}
                        <div className="col-lg-10">
                            {this.SearchCard()}
                        </div>

                        <div className="col-md-12">
                            <h6>Utility</h6>
                            <hr></hr>
                        </div>
                        <div className="row">
                            {
                                this.shoppingCart.map((shoppingCarts => {
                                    if (shoppingCarts.type === 'Utility') {
                                        return (
                                            <div className="col-md-4">
                                                <MembershipCard data={shoppingCarts} />
                                            </div>
                                        );
                                    }
                                }))
                            }
                        </div>


                        <div className="col-md-12">
                            <h6>Entertainment</h6>
                            <hr></hr>
                        </div>
                        <div className="row">
                            {
                                this.shoppingCart.map((shoppingCarts => {
                                    if (shoppingCarts.type === 'Entertainment') {
                                        return (
                                            <div className="col-md-4">
                                                <MembershipCard data={shoppingCarts} />
                                            </div>
                                        );
                                    }
                                }))
                            }
                        </div>
                        <div className="col-md-12">
                            <h6>Gift</h6>
                            <hr></hr>
                        </div>
                        <div className="row">
                            {
                                this.shoppingCart.map((shoppingCarts => {
                                    if (shoppingCarts.type === 'Gift') {
                                        return (
                                            <div className="col-md-4">
                                                <MembershipCard data={shoppingCarts} />
                                            </div>
                                        );
                                    }
                                }))
                            }
                        </div>


                        <div className="col-md-12">
                            <h6>Self</h6>
                            <hr></hr>
                        </div>
                        <div className="row">
                            {
                                this.shoppingCart.map((shoppingCarts => {
                                    if (shoppingCarts.type === 'Self') {
                                        return (
                                            <div className="col-md-4">
                                                <MembershipCard data={shoppingCarts} />
                                            </div>
                                        );
                                    }
                                }))
                            }
                        </div>


                        <div className="col-md-12">
                            <h6>Maintenance</h6>
                            <hr></hr>
                        </div>
                        <div className="row">
                            {
                                this.shoppingCart.map((shoppingCarts => {
                                    if (shoppingCarts.type === 'Maintenance') {
                                        return (
                                            <div className="col-md-4">
                                                <MembershipCard data={shoppingCarts} />
                                            </div>
                                        );
                                    }
                                }))
                            }
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;