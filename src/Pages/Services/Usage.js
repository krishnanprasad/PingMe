import React, { Component } from 'react';

class Usage extends Component {

    usages = [
        { servicename: 'Netflix', lastdate: "11-Jun-19", amount: '1320', logo: 'netflix.jpg' },
        { servicename: 'Amazon Prime', lastdate: "10-Jun-19", amount: '770', logo: 'amazonprime.jpg' },
        { servicename: 'ICICI Insurance', lastdate: "10-Jun-19", amount: '910', logo: 'iciciinsurance.jpg' },
        { servicename: 'Shopper Stop', lastdate: "10-Jun-19", amount: '165', logo: 'shoppersstop.jpg' },
        { servicename: 'RMKV', lastdate: "10-Jun-19", amount: '332', logo: 'rmkv.jpg' },
        { servicename: 'Bajaj', lastdate: "10-Jun-19", amount: '223', logo: 'bajaj.jpg' },
        { servicename: 'Croma', lastdate: "10-Jun-19", amount: '123', logo: 'croma.png' },
    ]


    render() {
        return (
            <div>
                <h6>Usage</h6>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Amount</th>
                            <th>Last Date</th>
                           
                        </tr>
                    </thead>
                    <tbody>
              
                        {this.usages.map((usage, index) => {
                            return (
                                <tr key={index}>
                                    <td><img src={require(`../../assets/Image/Business/${usage.logo}`)} style={{ width: '32px', height: '32px', borderRadius: '50%',marginRight:'10px' }} />{usage.servicename}</td>
                                    <td>{usage.amount}</td>
                                    <td>{usage.lastdate}</td>
                                   
                                    <td>
                                        <button type="button" className="btn">Pay</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn">Remove</button>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Usage;