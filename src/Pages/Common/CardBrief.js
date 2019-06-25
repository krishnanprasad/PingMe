import React, { Component } from 'react';

class CardBrief extends Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center" style={{ marginTop: '20px' }}>

                    <div class="col-lg-10">
                        <div className="card ACard" style={{ marginTop: '10px', marginBottom: '20px' }}>
                            <div className="col-md-12">
                                <p>Service Name</p>
                            </div>
                            <div className="col-md-12">
                                <p>Service Description</p>
                            </div>
                        </div>


                        <div className="card ACard">
                            <div className="row">

                                <div className="col-md-4">
                                    <div class="d-flex flex-column">
                                        <div class="p-2">Your Plan</div>
                                        <div class="p-2">Flex item 2</div>

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="d-flex flex-column">
                                        <div class="p-2">Amount</div>
                                        <div class="p-2">1650</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="d-flex flex-column">
                                        <div class="p-2">Next Bill Date</div>
                                        <div class="p-2">Flex item 2</div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="d-flex">                          
                            <div class="p-2 ml-auto">
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