import React, { Component } from 'react';

class CardBrief extends Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center" style={{ marginTop: '20px' }}>

                    <div className="col-lg-10">
                        <div className="card ACard" style={{ marginTop: '10px', marginBottom: '20px' }}>
                            <div className="col-md-12">
                                <div className="p-2 pl-20" style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                                    <div>
                                        <img src={require('../../assets/Image/Business/netflix.jpg')} style={{ width: '42px', height: '42px', borderRadius: '50%' }} /><span style={{fontSize:'24px',marginLeft:'10px'}}>Netflix</span>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <p>Service Description</p>
                            </div>
                        </div>


                        <div className="card ACard" style={{backgroundColor:'#ffd996'}}>
                            <div className="row">

                                <div className="col-md-4">
                                    <div className="d-flex flex-column">
                                        <div className="p-2">Your Plan</div>
                                        <div className="p-2">Flex item 2</div>

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex flex-column">
                                        <div className="p-2">Amount</div>
                                        <div className="p-2">1650</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex flex-column">
                                        <div className="p-2">Next Bill Date</div>
                                        <div className="p-2">Flex item 2</div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="d-flex">
                            <div className="p-2 ml-auto">
                                <input type="button" className="btn btn-success btn-block" value="Pay" />
                            </div>
                        </div>
                        <div>
                            <h5>Offers</h5>
                            <div className="card ACard" style={{ marginTop: '10px', marginBottom: '20px' }}>
                                <div className="col-md-12">
                                    <p>25% off Pay for 3 Months at 10,999/-</p>
                                    <p>30% off Pay for 6 Months at 15,999/-</p>
                                    <p>35% off Pay for 12 Months at 20,999/-</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardBrief;