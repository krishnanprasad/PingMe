import React, { Component } from 'react';
import './MembershipCard.css';

class MembershipCard extends Component {
    constructor(props) {
        super(props);
        this.state = { isTabActive: 1, isShowDetail: 1 };
        console.log(this.props);

    }
    render() {
        return (
            <div>
                <div className="d-flex card ACard flex-column" style={{ backgroundColor: 'white', opacity: '0.94' }}>
                    <div className="d-flex ">
                        <div className="p-2 pl-20" style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                            <div>
                                <img src={require(`../../assets/Image/Business/${this.props.data.logo}`)} style={{ width: '72px', height: '72px', borderRadius: '50%' }} />

                            </div>
                        </div>

                        <div className="p-2 flex-grow-1 pl-20">
                            <div className="d-flex flex-column">
                                <div className="p-15 Varela FirstBlack" style={{ fontSize: '20px' }}>{this.props.data.servicename}</div>
                                <div className="p-15" >
                                    {this.props.data.daysleft < 15 ?
                                        <span className="Varela FirstWhite AlarmCard RedCard">{this.props.data.daysleft}</span>
                                        : this.props.data.daysleft > 15 && this.props.data.daysleft < 30
                                            ?
                                            <span className="Varela AlarmCard YellowCard">{this.props.data.daysleft}</span>
                                            : this.props.data.daysleft > 30
                                                ?
                                                <span className="Varela FirstWhite AlarmCard GreenCard">{this.props.data.daysleft}</span>
                                                : null
                                    }

                                    {/* <span className="Varela FirstWhite" style={{ fontSize: '12px', paddingLeft: '5px' }}>left</span> */}
                                </div>
                                <div className="p-15 Varela SecondBlack"><span>{this.props.data.enddate}</span></div>
                                <div className="p-15 Varela SecondBlack"><span>{this.props.data.cost}</span></div>

                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-end mb-2">
                       
                        <div className="p-2">
                            <span className='payspan' style={{ color: '#adadad',backgroundColor: 'white' }}>{this.props.data.offer}</span>
                        </div>



                        <div className="p-2">
                            <span className='payspanCircle SecondBlack'>Pay</span>

                        </div>
                    </div>

                </div>





            </div>
        );
    }
}

export default MembershipCard;