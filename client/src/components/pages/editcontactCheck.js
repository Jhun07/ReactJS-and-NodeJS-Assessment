import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class editContact extends Component {
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
      .get(`http://localhost:5000/contact/${cons_id}`)
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

    console.log(data);

    axios
      .put(`http://localhost:5000/contact/update/${cons_id}`, data)
      .then( () => {
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
        console.log("Error in adding contact!" + err );
      })
  };



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
            <div className="rounded col-md-8 m-auto border border-dark " id="format">
              <br />
              <p className="lead text-center">
                Edit contact
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input required
                    type='text'
                    placeholder='Edit full name '
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
                    placeholder='Edit email '
                    name='emailAddress'
                    className='form-control'
                    value={this.state.emailAddress}
                    onChange={this.onChange}
                  />
                </div><br />

                <div className='form-group'>
                  <input required
                    type='number'
                    placeholder='Edit number '
                    name='contactNumber'
                    className='form-control'
                    value={this.state.contactNumber}
                    onChange={this.onChange}
                  />
                </div><br />

                <div className='form-group'>
                  <select class="form-select" className='form-control' aria-label="Default select example">
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
                  className="btn btn-outline-primary btn-block mt-4"
                /> <br />
              </form>
            </div>
          </div>
        </div >



      </div >
    );
  }
}

export default editContact;