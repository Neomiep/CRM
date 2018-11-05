import React, { Component } from 'react';
import axios from 'axios'

class Update extends Component {

    constructor() {
        super()
        this.state = {
            clientName: '',
            handler: '',
            emailType: ''
        }
    }

    updateHandler = (e) => {
        this.setState({ handler: e.target.value })
    }

    updateEmailType = (e) => {
        this.setState({ emailType: e.target.value })
    }

    updateClientName = (e) => {
        this.setState({ clientName: e.target.value })
    }

    changeHandler = () => {
        if (this.state.clientName !== "" && this.state.handler !== "") {
            axios.post('http://localhost:4000/clientData', {
                clientName: this.state.clientName,
                handler: this.state.handler
            }).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
            this.setState({clientName:'', handler:''})
        }
        else if (this.state.clientName === "") {
            alert("You must fill in the client's name.")
        }
        else {
            alert("You must choose a handler for the client.")
        }
    }

    changeEmail = () => {
        if (this.state.clientName !== "" && this.state.emailType !== "") {
            axios.post('http://localhost:4000/clientData', {
                clientName: this.state.clientName,
                emailType: this.state.emailType
            }).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
            this.setState({clientName:'', emailType:''})
        }
        else if (this.state.clientName === "") {
            alert("You must fill in the client's name.")
        }
        else {
            alert("You must choose the type of email you wish to send to the client.")
        }
    }

    declareSold = () => {
        if (this.state.clientName !== "") {
            axios.post('http://localhost:4000/clientData', {
                clientName: this.state.clientName,
                sold: true
            }).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
        }
        else {
            alert("You must choose a client.")
        }
    }


    render() {
        return (
            <div>
                <h6 >Update</h6>
                <div>
                    <span>Client:</span>
                    <input className="actionInput" type="text" placeholder="Client Name" value={this.state.clientName} onChange={this.updateClientName} />
                </div>
                <div>
                    <div className="actionSpan">Transfer to handler:</div>
                    <select className="actionInput" onChange={this.updateHandler} value={this.state.handler}>
                        <option value=""></option>
                        <option value="Barton Ramirez">Barton Ramirez</option>
                        <option value="Shepherd Stone">Shepherd Stone</option>
                        <option value="Martin Massey">Martin Massey</option>
                        <option value="Hull Conrad">Hull Conrad</option>
                        <option value="Leila Howe">Leila Howe</option>
                        <option value="Janice Alvarado">Janice Alvarado</option>
                        <option value="Emily Durham">Emily Durham</option>
                    </select>
                    <button className="actionbutton" type='button' onClick={this.changeHandler}>Transfer</button>
                </div>
                <div>
                    <div className="actionSpan">Send Email:</div>
                    <select className="actionInput" value={this.state.emailType} onChange={this.updateEmailType}>
                        <option value=""></option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                    <button className="actionbutton" type='button' onClick={this.changeEmail}>Send</button>
                </div>
                <div>
                    <div className="actionSpan">Declare Sale!</div>
                    <div className="actionInput"></div>
                    <button className="actionbutton" type='button' onClick={this.declareSold}>Declare</button>
                </div>
            </div>)
    }
}

export default Update