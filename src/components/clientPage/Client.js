import React, { Component } from 'react';

class Client extends Component {

    sold = () => {
        if (this.props.client.sold) {
            return '✔';
        }
        else { return 'X' }
    }

    onOpenModal = () => {
        let id = this.props.client._id
        let nameArr = this.props.client.name.split(" ")
        let firstName = nameArr[0]
        let surName = nameArr[1]
        let country = this.props.client.country
        this.props.setClientParams(id, firstName, surName, country)
        this.props.onOpenModal()
    }


    render = () => {
        let date = this.props.client.firstContact.substr(0, 10)
        let nameArr = this.props.client.name.split(" ")
        return (
            <div className="client navv" onClick={this.onOpenModal}>
                <span className="clientAttributes">{nameArr[0]}</span>
                <span className="clientAttributes">{nameArr[1]}</span>
                <span className="clientAttributes">{this.props.client.country}</span>
                <span className="clientAttributes">{date}</span>
                <span className="clientAttributes">{this.props.client.emailType}</span>
                <span className="clientAttributes">{this.sold()}</span>
                <span className="clientAttributes">{this.props.client.owner}</span>
            </div>
        )
    }
}

export default Client