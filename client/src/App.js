import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import editContact from './components/editContact';
import addContact from './components/addContact';
import showContact from './components/showContact';
import about from './components/about';
import info from './components/info';
import viewContact from './components/viewContact';
class App extends Component {
  render() {
    return (
      <Router>
        <div>

        
          <Route exact path='/' component={showContact} />
          <Route path='/contact/add' component={addContact} />
          <Route path='/contact/update/:id' component={editContact} />
          <Route path='/contact/view/:id' component={viewContact} />
          <Route path='/about' component={about} />
          <Route path='/info' component={info} />
        </div>
      </Router>
    );
  }
}



export default App;