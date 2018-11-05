import React, { Component } from 'react';
import Add from './Add'
import Update from './Update'

class ActionsLink extends Component {
    render() {
        return (
            <div className="actionslink">
                <Update />
                <hr />
                <Add />
            </div>)
    }
}

export default ActionsLink