import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class addContact extends Component {
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        }
      }

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     const data = {
//       fullname: this.state.fullname,
//       emailAddress: this.state.emailAddress,
//       contactNumber: this.state.contactNumber,
//       location: this.state.location,
//       registeredDate: this.state.registeredDate,
//     };
//     console.log(data);
//     axios
//       .post('http://localhost:5000/contact/add', data)
//       .then(res => {
//         this.setState({
//           fullname: '',
//           emailAddress: '',
//           contactNumber: '',
//           location: '',
//           registeredDate: '',
//         })
//         this.props.history.push('/');
//       })
//       .catch(err => {
//         //console.log(err);
//         console.log("Error in adding contact!");
//       })
//   };

// onChange={(event) => this.handleUserInput(event)}

  render() {
    return (
        <div>
                




            
        </div>
    )}
}

export default addContact;