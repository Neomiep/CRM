import React, { Component } from 'react';
import axios from 'axios'

class Add extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            surName: "",
            country: "",
            handler: ""
        }
    }


    updateFirstName = (e) => {
        this.setState({ firstName: e.target.value })
    }

    updateSurName = (e) => {
        this.setState({ surName: e.target.value })
    }

    updateCountry = (e) => {
        this.setState({ country: e.target.value })
    }

    updateHandler = (e) => {
        this.setState({ handler: e.target.value })
    }

    addUser = () => {
        if(this.state.firstName !== "" && this.state.surName !=="" && this.state.country !== "" && this.state.handler !== ""){
            axios.post('http://localhost:4000/clientData', {
                name: this.state.firstName + " " + this.state.surName,
                country: this.state.country,
                handler: this.state.handler
            }).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
            this.setState({firstName:"", surName:'', country:'', handler:''})
        }
        else{
            alert("All inputs in the add form must be filled.")
        }
    }

    render() {
        return (
            <div>
                <h6>Add Client</h6>
                <div>
                    <div className="addSpan">Firstname:</div>
                    <input type='text' value={this.state.firstName} onChange={this.updateFirstName} />
                </div>
                <div>
                    <div className="addSpan">Surname:</div>
                    <input type='text' value={this.state.surName} onChange={this.updateSurName} />
                </div>
                <div>
                    <div className="addSpan">Country:</div>
                    <input type='text' value={this.state.country} onChange={this.updateCountry} />
                </div>
                <div>
                    <div className="addSpan">Handler:</div>
                    <select value={this.state.handler} onChange={this.updateHandler}>
                        <option value=""></option>
                        <option value="Barton Ramirez">Barton Ramirez</option>
                        <option value="Shepherd Stone">Shepherd Stone</option>
                        <option value="Martin Massey">Martin Massey</option>
                        <option value="Hull Conrad">Hull Conrad</option>
                        <option value="Leila Howe">Leila Howe</option>
                        <option value="Janice Alvarado">Janice Alvarado</option>
                        <option value="Emily Durham">Emily Durham</option>
                    </select>
                </div>
                <button className="addClientBtn" type="button" onClick={this.addUser}>Add New Client</button>
            </div>)
    }
}

export default Add