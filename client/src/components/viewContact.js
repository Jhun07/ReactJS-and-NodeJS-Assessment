import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import showContact from './showContact';


class viewContact extends Component {
  
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

  componentDidMount() {
    
    
    const cons_id = this.props.match.params.id;
    
    axios
      .get(`http://localhost:3400/contact/view/${cons_id}`)
      .then((res) => {
        console.log(res.data);

        this.setState({
          fullname: res.data.fullname,
          emailAddress: res.data.emailAddress,
          contactNumber: res.data.contactNumber,
          location: res.data.location,
          registeredDate: res.data.registeredDate

        })

      })

  }

  render() {
    return (

      <div className="addContact">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/" className="btn  btn-outline-primary float-left" id="showContactList">
                Show Contact List
              </Link>
            </div>  <br /> <br />  <br /> <br />
            <div className="rounded col-md-8 m-auto border bg-info border-dark " id="format">
              <br />
              <p className="lead text-center">
                View contact
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div class="form-group row">
                  <label for="fullnameLabel" class="col-sm-2 col-form-label">Fullname :</label>
                  <div class="col-sm-10">
                    <input required disabled class="form-control" id="fullnameLabel"
                    type='text'
                    name='fullname'
                    className='form-control'
                    value={this.state.fullname}
                    onChange={this.onChange}
                  />
                  </div>
                </div>
               
                <div className='form-group row'>
                <label for="emailLabel" class="col-sm-2 col-form-label">Email Add :</label>
                <div class="col-sm-10">
                  <input required disabled  class="form-control" id="emailLabel"
                    type='text'
                    name='emailAddress'
                    className='form-control'
                    value={this.state.emailAddress}
                    onChange={this.onChange}
                  />
                </div></div>
               
                <div className='form-group row'>
                <label for="contactLabel" class="col-sm-2 col-form-label">Contact # :</label>
                <div class="col-sm-10">
                  <input required disabled class="form-control" id="contactLabel"
                    type='number'
                    name='contactNumber'
                    className='form-control'
                    value={this.state.contactNumber}
                    onChange={this.onChange}
                  />
                </div></div>

                <div className='form-group row'>
                 <label for="locationLabel" class="col-sm-2 col-form-label">Location :</label>
                 <div class="col-sm-10">
                  <select class="form-select"  disabled  class="form-control" id="locationLabel" name='location' className='form-control' aria-label="Default select example" value={this.state.location}
                    onChange={this.onChange}>
                    <option selected>Choose location</option>
                    <option value="Manila">Manila</option>
                    <option value="Cebu">Cebu</option>
                  </select>



                </div> </div>

                <div className='form-group row'>
                  <label for="registeredLabel" class="col-xs-3 col-form-label">Registered Date : </label>
                  <div class="col-sm-10">
                  <input
                    type='date' disabled class="form-control" id="registeredLabel"
                    name='registeredDate'
                    className='form-control'
                    value={this.state.registeredDate}
                    onChange={this.onChange}
                  />
                </div></div>
                <Link exact to='/'> <button className="btn btn-outline-white btn-block mt-4">Back to the Table</button></Link>
                <br />
              </form>
            </div>
          </div>
        </div >



      </div >
    );
  }
}

export default viewContact;