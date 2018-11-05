import React, { Component } from 'react';
import {Link } from 'react-router-dom'

class BasicNav extends Component {
    render() {
        return (
            <div className="linksNav navv">
                <Link className="navLink" to="/clients">Clients</Link>
                <Link className="navLink" to="/actions">Actions</Link>
                <Link className="navLink" to="/analytics">Analytics</Link>
            </div>)
    }
}

export default BasicNav