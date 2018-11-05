import React, { Component } from 'react';
import Modal from 'react-responsive-modal'
import axios from 'axios'

class ClientModal extends Component {

    onCloseModal = () => {
        this.props.onCloseModal()
    };

    updateFirstName=(e)=>{this.props.updateFirstName(e)}

    updateSurName=(e)=>{this.props.updateSurName(e)}

    updateCountry=(e)=>{this.props.updateCountry(e)}

    updateClientDetails=()=>{
        if (this.props.firstName !== "" && this.props.surName !== '' && this.props.country !== '' && this.props.id !=='') {
            
            axios.post('http://localhost:4000/clientData', {
                name: this.props.firstName + " " + this.props.surName,
                country: this.props.country,
                id: this.props.id
            }).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
            
            this.onCloseModal()
        }
        else {
            this.onCloseModal()
            alert("The inputs can't be blank.")
        }
    }

    render() {
        return (
            <div>
                <Modal open={this.props.open} onClose={this.onCloseModal} center>
                    <br />
                    <div className="modalItems">
                        <div className="modalText">First name:</div>
                        <input type="text" className="inputModal" value={this.props.firstName} onChange={this.updateFirstName}></input>
                    </div>
                    <br />
                    <div className="modalItems">
                        <div className="modalText">Surname:</div>
                        <input type="text" className="inputModal" value={this.props.surName} onChange={this.updateSurName}></input>
                    </div>
                    <br />
                    <div className="modalItems">
                        <div className="modalText">Country:</div>
                        <input type="text" className="inputModal" value={this.props.country} onChange={this.updateCountry}></input>
                    </div>
                    <button type="button" className="updateButton" onClick={this.updateClientDetails}>Update</button>
                </Modal>
            </div>
        );
    }
}


export default ClientModal