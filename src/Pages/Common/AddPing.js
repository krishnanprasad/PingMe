import React, { Component } from 'react';

class AddPing extends Component {
    constructor() {
        super();
        this.state = {
            pingname: '',
            password: '',
            pingdescription: '',
            pingtype: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    SubmitForm = () => {
        console.log(this.state);
    }
    handleChange(evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });
    }
    render() {
        return (
            <div>


                <label>Ping Name</label>
                <input type="text" className="form-control" name="pingname" onChange={this.handleChange} />


                <label>Ping Description</label>
                <input type="text" className="form-control" name="pingdescription" onChange={this.handleChange} />


                <label>
                    Pick your favorite flavor:
                     <select name="pingtype" className="form-control" value={this.state.pingtype} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>


                <button className="btn btn-success"  onClick={this.SubmitForm}>Click Me</button>


            </div>
        );
    }
}

export default AddPing;