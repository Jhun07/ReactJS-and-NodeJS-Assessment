import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class addContact extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      emailAddress: '',
      contactNumber: '',
      location: '',
      registeredDate: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      fullname: this.state.fullname,
      emailAddress: this.state.emailAddress,
      contactNumber: this.state.contactNumber,
      location: this.state.location,
      registeredDate: this.state.registeredDate,
    };
    console.log(data);
    axios
      .post('http://localhost:5000/contact/add', data)
      .then(res => {
        this.setState({
          fullname: '',
          emailAddress: '',
          contactNumber: '',
          location: '',
          registeredDate: '',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        //console.log(err);
        console.log("Error in adding contact!");
      })
  };



  render() {
    return (

      <div className="addContact">
        <div className="container">
          <div className="row">
            <br />   <br />  <br />   <br />
            <div className="col-md-8 m-auto " >
              <Link to="/" className="btn btn-outline-primary float-left" id="showContactList">
                Show Contact List
              </Link>
            </div>
            <br />
            <div className="rounded col-md-8 m-auto border border-dark " id="format">
              <br />
              <p className="lead text-center">
                Create new contact
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group row'>
                  <label for="fullnameLabel" class="col-sm-2 col-form-label">Fullname :</label>
                  <div class="col-sm-10">
                    <input required class="form-control" id="fullnameLabel"
                      type='text'
                      placeholder='Enter full name '
                      name='fullname'
                      className='form-control'
                      value={this.state.fullname}
                      onChange={this.onChange}
                    />

                  </div></div>
                <div className='form-group row'>
                  <label for="emailLabel" class="col-sm-2 col-form-label">Email Add :</label>
                  <div class="col-sm-10">
                    <input required class="form-control" id="emailLabel"
                      type='text'
                      placeholder='Enter email '
                      name='emailAddress'
                      className='form-control'
                      value={this.state.emailAddress}
                      onChange={this.onChange}
                    />
                  </div></div>

                <div className='form-group row'>
                  <label for="contactLabel" class="col-sm-2 col-form-label">Contact # :</label>
                  <div class="col-sm-10">
                    <input required class="form-control" id="contactLabel"
                      type='number'
                      placeholder='Enter number '
                      name='contactNumber'
                      className='form-control'
                      value={this.state.contactNumber}
                      onChange={this.onChange}
                    />
                  </div></div>
                <div className='form-group row'>
                  <label for="locationLabel" class="col-sm-2 col-form-label">Location :</label>
                  <div class="col-sm-10">
                    <select class="form-select" class="form-control" id="locationLabel" name='location' className='form-control' aria-label="Default select example" value={this.state.location}
                      onChange={this.onChange}>
                      <option selected>Choose location</option>
                      <option value="Manila">Manila</option>
                      <option value="Cebu">Cebu</option>
                    </select>
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
                    />
                  </div></div>
                <input
                  type="submit"
                  onClick={this.onSubmit}
                  className="btn btn-outline-primary btn-block mt-4 "
                />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addContact;