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
                <div className='form-floating mb-3 '>
                  <input required id="floatingInput"
                    type='text'
                    placeholder='Contact full name '
                    name='fullname'
                    className='form-control'
                    value={this.state.fullname}
                    onChange={this.onChange}
                  />

                </div>
                <br />
                

                <div className='form-group'>
                  <input required
                    type='text'
                    placeholder='Enter email '
                    name='emailAddress'
                    className='form-control'
                    value={this.state.emailAddress}
                    onChange={this.onChange}
                  />
                </div><br />

                <div className='form-group'>
                  <input required
                    type='number'
                    placeholder='Enter number '
                    name='contactNumber'
                    className='form-control'
                    value={this.state.contactNumber}
                    onChange={this.onChange}
                  />
                </div><br />

                <div className='form-group'>
                  <select class="form-select"  name='location' className='form-control' aria-label="Default select example" value={this.state.location}
                    onChange={this.onChange}>
                    <option selected>Choose location</option>
                    <option value="1">Manila</option>
                    <option value="2">Cebu</option>
                  </select>
                </div>
             

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='Enter registeredDate '
                    name='registeredDate'
                    className='form-control'
                    value={this.state.registeredDate}
                    onChange={this.onChange}
                  />
                </div>

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