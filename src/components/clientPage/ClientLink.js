import React, { Component } from 'react';
import NavClients from './NavClients'
import ClientData from './ClientData'

class ClientLink extends Component {
    render=()=> {
        return (
            <div>
            <NavClients />
            <ClientData clients={this.props.clients} />
            </div>
            )
    }
}

export default ClientLink