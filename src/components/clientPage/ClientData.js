import React, { Component } from 'react';
import Client from './Client'
import ClientModal from './ClientModal'

class ClientData extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            id: '',
            firstName: '',
            surName: '',
            country: ''
        }
    }


    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    setClientParams = (id, firstName, surName, country) => {
        this.setState({ id: id, firstName: firstName, surName: surName, country: country })
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

    render = () => {
        if (this.props.clients !== "") {
            return (
                <div className="clients">
                    {this.props.clients.map(c => <Client
                        key={c._id}
                        client={c}
                        onOpenModal={this.onOpenModal}
                        setClientParams={this.setClientParams}
                    />)}
                    <ClientModal
                        open={this.state.open}
                        onCloseModal={this.onCloseModal}
                        id={this.state.id}
                        firstName={this.state.firstName}
                        surName={this.state.surName}
                        country={this.state.country}
                        updateFirstName={this.updateFirstName}
                        updateSurName={this.updateSurName}
                        updateCountry={this.updateCountry}
                    />
                </div>
            )

        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default ClientData