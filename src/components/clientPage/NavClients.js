import React, { Component } from 'react';

class NavClients extends Component {
    render() {
        return (
            <div className="clientsNav client navv">
                <span className="clientAttributes">Name</span>
                <span className="clientAttributes">Surname</span>
                <span className="clientAttributes">Country</span>
                <span className="clientAttributes">First Contact</span>
                <span className="clientAttributes">E-mail</span>
                <span className="clientAttributes">Sold</span>
                <span className="clientAttributes">Handler</span>
            </div>)
    }
}

export default NavClients