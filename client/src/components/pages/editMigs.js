import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { FormError} from './validation';

class editContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      emailAddress: '',
      contactNumber: '',
      location: '',
      registeredDate: '',
    };
  }
//invoked all the data inserted data in the tree
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

onChange = e => {
  this.setState({ [e.target.name]: e.target.value });

};

onSubmit = e => {
  e.preventDefault();

  const cons_id = this.props.match.params.id;

  const data = {
    fullname: this.state.fullname,
    emailAddress: this.state.emailAddress,
    contactNumber: this.state.contactNumber,
    location: this.state.location,
    registeredDate: this.state.registeredDate,
  };
  console.log(data)
  
  axios
        .put(`http://localhost:3400/contact/update/${cons_id}`, data)
        .then(res => {
          this.setState({
            fullname: this.state.fullname,
            emailAddress: this.state.emailAddress,
            contactNumber: this.state.contactNumber,
            location: this.state.location,
            registeredDate: this.state.registeredDate
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
                Edit contact
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group row'>
                <label for="fullnameLabel" class="col-sm-2 col-form-label">Fullname :</label>
                <div class="col-sm-10">
                  <input required class="form-control" id="fullnameLabel" disabled
                    type='text'
                    placeholder='Edit full name '
                    name='fullname'
                    className='form-control'
                    value={this.state.fullname}
                    onChange={this.onChange}
                  />
                </div></div>


                <div className='form-group row'>
                <label for="emailLabel" class="col-sm-2 col-form-label">Email Add :</label>
                <div class="col-sm-10">
                  <input required class="form-control" id="emailLabel" maxLength ="45"
                    type='text'
                    placeholder='Edit email '
                    name='emailAddress'
                    className='form-control'
                    value={this.state.emailAddress}
                    onChange={this.onChange}
                  />
                  {/* <em style={{color:"red"}}>{this.state.errors.emailAddress2 || this.state.errors.emailAddress }</em> <br/>
                  <em style={{color:"red"}}>{this.state.errors.emailAddress3}</em> */}
                </div></div>

                <div className='form-group row'>
                <label for="contactLabel" class="col-sm-2 col-form-label">Contact # :</label>
                <div class="col-sm-10">
                  <input required class="form-control" id="contactLabel" maxLength = "12" onInput={this.maxLengthCheck}
                    type='number'
                    placeholder='Edit number '
                    name='contactNumber'
                    className='form-control'
                    value={this.state.contactNumber}
                    onChange={this.onChange}
                  />
                  {/* <em style={{color:"red"}}>{this.state.errors.contactNumber || this.state.errors.contactNumber1 || this.state.errors.contactNumber2}</em> */}
                </div></div>

                <div className='form-group row'>
                <label for="locationLabel" class="col-sm-2 col-form-label">Location :</label>
                <div class="col-sm-10">
                <select class="form-select"   class="form-control" id="locationLabel" name='location' className='form-control' aria-label="Default select example" value={this.state.location}
                    onChange={this.onChange}>
                    <option selected>Choose location</option>
                    <option value="Manila">Manila</option>
                    <option value="Cebu">Cebu</option>
                  </select>
                  {/* <em style={{color:"red"}}>{this.state.errors.location}</em> */}
                  </div></div>

                <div className='form-group row'>
                <label for="registeredLabel" class="col-xs-3 col-form-label">Registered Date : </label>
                <div class="col-sm-10">
                  <input
                    type='date' class="form-control" id="registeredLabel" disabled
                    placeholder='Enter registeredDate '
                    name='registeredDate'
                    className='form-control'
                    value={this.state.registeredDate}
                    onChange={this.onChange}
                  />
                </div></div>

                <button
                  type="submit"
                  onClick={this.onSubmit}
                  className="btn btn-outline-white btn-block mt-4"
                > UPDATE  </button> <br />
              </form>
            </div>
          </div>
        </div >



      </div >
    );
  }
}

export default editContact;