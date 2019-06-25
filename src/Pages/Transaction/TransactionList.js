import React, { Component } from 'react';

class TransactionList extends Component {
    usages = [
        { servicename: 'Netflix', amount: "1340", logo: 'netflix.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
        { servicename: 'Amazon Prime', amount: "1342", logo: 'amazonprime.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
        { servicename: 'ICICI Insurance', amount: "950", method: 'Monthly', logo: 'iciciinsurance.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
        { servicename: 'Shopper Stop', amount: "280", method: 'Monthly', logo: 'shoppersstop.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
        { servicename: 'RMKV', amount: "310", method: 'Monthly', logo: 'rmkv.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
        { servicename: 'Bajaj', amount: "100", method: 'Monthly', logo: 'bajaj.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
        { servicename: 'Croma', amount: "92", method: 'Monthly', logo: 'croma.png', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
    ]


    render() {
        return (
            <div className="row justify-content-center" style={{ marginTop: '40px' }}>
                <div className="col-lg-10" style={{ backgroundColor: 'white' }}>
                  
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Service Provider</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Through</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.usages.map((usage, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img src={require(`../../assets/Image/Business/${usage.logo}`)} style={{ width: '32px', height: '32px', borderRadius: '50%' }} /><span style={{ paddingLeft: '10px' }}>{usage.servicename}</span></td>
                                        <td>{usage.amount}</td>
                                        <td>{usage.paiddate}</td>
                                        <td>{usage.paidtype}</td>
                                        <td>{usage.paidstatus}</td>
                                        <td>
                                            <button type="button" className="btn">View</button>
                                        </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TransactionList;