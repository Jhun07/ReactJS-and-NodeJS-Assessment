import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import editContact from './components/editContact';
import addContact from './components/addContact';
import showContact from './components/showContact';
import about from './components/about';
import info from './components/info';
import viewContact from './components/viewContact';
import deleteContact from './components/deleteContact'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={showContact} />
          <Route path='/contact/add' component={addContact} />
          <Route path='/contact/update/:EditId' component={editContact} />
          <Route path='/contact/delete/:DeleteId' component={deleteContact} />
          <Route path='/contact/view/:ViewId' component={viewContact} />
          <Route path='/about' component={about} />
          <Route path='/info' component={info} />
        </div>
      </Router>
    );
  }
}



export default App;