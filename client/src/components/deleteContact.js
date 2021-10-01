import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import image from './images/delete.jpg';

class deleteContact extends Component {

  constructor(props) {

    super(props);
    console.log(props);

    this.state = {
      fullname: '',
      emailAddress: '',
      contactNumber: '',
      location: '',
      registeredDate: '',
    };

  }

  //Fetchiong the data
  componentDidMount() {
    const deleteId = this.props.match.params.DeleteId;
    axios
      .get(`http://localhost:3400/contact/view/${deleteId}`)
      .then((res) => {

        this.setState({
          fullname: res.data.fullname,
          emailAddress: res.data.emailAddress,
          contactNumber: res.data.contactNumber,
          location: res.data.location,
          registeredDate: res.data.registeredDate

        })

      })
  }
  //Deleting Contact Function
  handleDeleteContact = () => {

    const id = this.props.match.params.DeleteId;
    axios
      .delete(`http://localhost:3400/contact/delete/${id}`)

      .then((res) => {
        console.log(res);
      })
      .catch(err => {
        console.log("Error in deleting contact!" + err);
      })
    
    this.props.history.push('/');
    window.location.reload();
  }

  render() {
    return (

      <div>
         <img id="deleteIcon" src={image} height={402}  />
      <div  className="viewContact">
        <div id="deleteContainer" className="container" >
          <div className="row">
            <div className="col-md-8 m-auto">
            </div>  <br /> <br />  <br /> <br />
            <div  className="rounded col-md-5 m-auto border bg-white border-dark " id="format" >
              <br />
              <p id="titleDelete" className="lead text-center">
                Delete contact
              </p>

              <form noValidate  >
                <div class="form-group" >
                  <b for="fullnameLabel" >Fullname : &nbsp;</b>

                  {this.state.fullname}

                </div>

                <div className='form-group'>
                  <b for="emailLabel" >Email Address : &nbsp;</b>

                  {this.state.emailAddress}
                </div>

                <div className='form-group'>
                  <b for="contactLabel" >Contact Number: &nbsp;</b>
                  {this.state.contactNumber}
                </div>

                <div className='form-group'>
                  <b for="locationLabel">Location : &nbsp;</b>

                  {this.state.location}
                </div>

                <div className='form-group'>
                  <b for="registeredLabel">Registered Date : &nbsp;</b>
                  {this.state.registeredDate}
                </div>
                <button type="submit" onClick={() => this.handleDeleteContact()} className="btn btn-outline-white btn-danger btn-block mt-4">Delete</button>
                <Link exact to='/'> <button className="btn btn-outline-white btn-info btn-block mt-4">Cancel</button></Link>
                <br />

              </form>
            </div>
          </div>
        </div >
      </div >
      </div>
    );
  }
}

export default deleteContact;