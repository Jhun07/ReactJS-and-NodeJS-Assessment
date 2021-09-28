import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { FormError } from './validation';
import Swal from 'sweetalert2';


const header = {
  
}

class addContact extends Component {
  constructor() {
    super();

    this.state = {
      fullname: '',
      emailAddress: '',
      contactNumber: '',
      location: '',
      registeredDate: '',
      errors: {} 
    };
  }
    
  //this is for CONTACT NUMBER LIMITS
  maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
      }
    }


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
   

  //Checking validation before submitting 
  validation = (fullname, fullname1, fullname2, emailAddress,emailAddress2, emailAddress3, contactNumber, location, registeredDate, registeredDate2) => {
      const setErrors = FormError(fullname, fullname1, fullname2, emailAddress,emailAddress2, emailAddress3,contactNumber, location, registeredDate, registeredDate2);
      this.setState({errors: setErrors});
      return Object.values(setErrors).every((err) => err === "");
  }

  onSubmit = e => {
    e.preventDefault();

    const { fullname,emailAddress, contactNumber, location, registeredDate } = this.state;

    if (this.validation(fullname,  emailAddress, contactNumber, location, registeredDate)) {


      const data = {
        fullname: this.state.fullname,
        emailAddress: this.state.emailAddress,
        contactNumber: this.state.contactNumber,
        location: this.state.location,
        registeredDate: this.state.registeredDate,
      };
      console.log(data);

      axios
        .post('http://localhost:3400/contact/add', data)
        .then(res => {
          this.setState({
            fullname: '',
            emailAddress: '',
            contactNumber: '',
            location: '',
            registeredDate: '',
          })
         console.log(this.props);
          this.props.history.push('/');

          Swal.fire(
            'Successfully Added!',
          
          );

        })
        .catch(err => {
          //console.log(err);
          console.log("Error in adding contact!");
        })

    }
  };



  render() {
    return (

      <div className="addContact">
        <div className="container ">
          <div className="row ">
            <br />   <br />  <br />   <br />
            <div className="col-md-8 m-auto " >
              <Link to="/" className="btn btn-outline-primary float-left" id="showContactList">
                Show Contact List
              </Link>
            </div>
            <br />
            <div className="rounded col-md-8 m-auto border bg-info border-dark " id="format">
              <br />
              <p className="lead text-center">
                Create new contact
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group  row'>
                  <label for="fullnameLabel" class="col-sm-2 col-form-label">Fullname :</label>
                  <div class="col-sm-10">
                    <input required class="form-control" id="fullnameLabel" 
                      type='text'
                      placeholder='Lastname, Firstname, Middle Innitial'
                      name='fullname'
                      className='form-control'
                      value={this.state.fullname}
                      onChange={this.onChange}
                    /> <i style={{fontFamily:"Serif"}}>{this.state.errors.fullname || this.state.errors.fullname1 || this.state.errors.fullname2}</i>
                  </div>
                </div>
                <div className='form-group row'>
                  <label for="emailLabel" class="col-sm-2 col-form-label">Email Add :</label>
                  <div class="col-sm-10">
                    <input required class="form-control" id="emailLabel" maxLength ="45"
                      type='text'
                      placeholder='example@gmail.com'
                      name='emailAddress'
                      className='form-control'
                      value={this.state.emailAddress}
                      onChange={this.onChange}
                    />
                    <i style={{fontFamily:"Serif"}}>{this.state.errors.emailAddress2 || this.state.errors.emailAddress }</i>
                    <i style={{fontFamily:"Times New Roman"}}>{this.state.errors.emailAddress3}</i>
                    
                  </div></div>

                <div className='form-group row'>
                  <label for="contactLabel" class="col-sm-2 col-form-label">Contact # :</label>
                  <div class="col-sm-10">
                    <input required class="form-control" id="contactLabel" 
                      type='number'
                      placeholder='99999999999'
                      name='contactNumber'
                      className='form-control' 
                      value={ this.state.contactNumber}
                      onChange={this.onChange}
                    /><i style={{fontFamily:"Serif"}}>{this.state.errors.contactNumber || this.state.errors.contactNumber1 || this.state.errors.contactNumber2}</i>
                  </div></div>
                <div className='form-group row'>
                  <label for="locationLabel" class="col-sm-2 col-form-label">Location :</label>
                  <div class="col-sm-10">
                    <select class="form-select" class="form-control" id="locationLabel" name='location' className='form-control' aria-label="Default select example" value={this.state.location}
                      onChange={this.onChange}>
                      <option selected>Select location</option>
                      <option value="Manila">Manila</option>
                      <option value="Cebu">Cebu</option>
                    </select><i style={{fontFamily:"Serif"}}>{this.state.errors.location}</i>
                  </div></div>

                <div className='form-group row'>
                  <label for="registeredLabel" class="col-xs-3 col-form-label">Registered Date : </label>
                  <div class="col-sm-10">
                    <input
                      type='date'
                      placeholder='Enter registeredDate '
                      name='registeredDate' class="form-control" id="registeredLabel"
                      className='form-control'
                   

                      value={this.state.registeredDate}
                      onChange={this.onChange}
                    /><i style={{fontFamily:"Serif"}}>{this.state.errors.registeredDate || this.state.errors.registeredDate2}</i>
                  </div></div>
                <input
                  type="submit"
                  onClick={this.onSubmit}
                  className="btn btn-outline-white btn-block mt-4 "
                />
                <br />
              </form>
            </div>
          </div>
        </div><br/>
      </div>
    );
  }
}

export default addContact;