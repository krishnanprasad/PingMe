import React, { Component } from 'react';

class Invitation extends Component {

    shoppingCart = [
        { servicename: 'Netflix', type: "Utility", brandcolor: '#e52e2d', logo: 'netflix.jpg', method: 'Monthly', connected: '9790794621' },
        { servicename: 'Amazon Prime', type: "Utility", brandcolor: '#56ace9', logo: 'amazonprime.jpg', method: 'Monthly', connected: '9790794621' },
        { servicename: 'ICICI Insurance', type: "Self", brandcolor: '#972929', logo: 'iciciinsurance.jpg', method: 'Monthly', connected: '9790794621' },
        { servicename: 'Shopper Stop', type: "Gift", brandcolor: '#000000', logo: 'shoppersstop.jpg', method: 'Monthly', connected: 'krishnanprasadraghvendra.93@gmail.com' },
        { servicename: 'RMKV', type: "Gift", brandcolor: '#f2c20f', logo: 'rmkv.jpg', daysleft: '12', method: 'Monthly', connected: '9790794621' },
        { servicename: 'Bajaj', type: "Maintenance", brandcolor: '#1b3399', logo: 'bajaj.jpg', method: 'Monthly', connected: '9790794621' },
        { servicename: 'Croma', type: "Gift", brandcolor: '#00b9bf', logo: 'croma.png', method: 'Monthly', connected: 'krishnanra.92@gmail.com' },

    ]


    render() {
        return (
            <div className="row">
                {
                    this.shoppingCart.map((shoppingCarts => {
                        return (
                            <div class="col-md-4">
                                <div className="d-flex card ACard flex-column">
                                    <div class="d-flex ">
                                        <div class="p-2 pl-20" style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                                            <div>
                                                <img src={require(`../../assets/Image/Business/${shoppingCarts.logo}`)} style={{ width: '72px', height: '72px', borderRadius: '50%' }} />

                                            </div>
                                        </div>

                                        <div className="p-2 flex-grow-1 pl-20">
                                            <div className="d-flex flex-column">
                                                <div className="p-15 Varela" style={{ fontSize: '20px', color: '#404040' }}>{shoppingCarts.servicename}</div>
                                                {/* <div className="p-15" >
                                                    <span className="Varela FirstBlack" style={{ fontSize: '20px' }}>{shoppingCarts.daysleft} Days</span>
                                                    <span className="Varela SecondBlack" style={{ fontSize: '12px', paddingLeft: '5px' }}>left</span>
                                                </div>*/}
                                                <div className="p-15 Varela SecondBlack" style={{ wordBreak: 'break-all' }}><span>{shoppingCarts.connected}</span></div>
                                                <div className="p-15 Varela SecondBlack"><span>{shoppingCarts.method}</span></div>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end mb-2">
                                        <div class="p-2">
                                            <span className='payspan' style={{ color: '#acacac' }}>{shoppingCarts.type}</span>
                                        </div>
                                        <div class="p-2">
                                            <span className='payspan' style={{ color: '#acacac' }}>Decline</span>
                                        </div>



                                        <div class="p-2">
                                            <span className='payspanCircle' style={{ color: '#acacac' }}>Accept</span>

                                        </div>
                                    </div>

                                </div>



                            </div>
                        )
                    }))
                }
            </div>
        );
    }
}

export default Invitation;