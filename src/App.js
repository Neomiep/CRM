import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BasicNav from "./components/BasicNav"
import ClientLink from './components/clientPage/ClientLink'
import ActionsLink from './components/actionsPage/ActionsLink';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      clients: ''
    }
  }

   componentDidMount=()=> {
      axios.get('http://localhost:4000/clientData')
        .then((res)=>{
          this.setState({ clients: res.data })
        })
        .catch(function (err) {
        });
  }

  updateClients1(id, name, country){
    let clients = [...this.state.clients]
    clients.find

  }


  render() {
    return (
      <Router>
        <div className="App">
          <BasicNav />
          <Route exact path="/clients" render={() => <ClientLink clients={this.state.clients} />} />
          <Route exact path="/actions" render={() => <ActionsLink clients={this.state.clients} />} />
        </div>
      </Router>
    );
  }
}

export default App;
