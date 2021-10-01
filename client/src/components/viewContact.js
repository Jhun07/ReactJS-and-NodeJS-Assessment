import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import image from './images/lock.jpg';



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
    const viewId = this.props.match.params.ViewId;
    axios
      .get(`http://localhost:3400/contact/view/${viewId}`)
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
      <div>
    <img id="lockIcon" src={image} height={342}  />
      <div className="viewContact">
        <div className="container">
          <div id ="viewContainer"cclassName="row">
            
            <div className="col-md-8 m-auto">
            </div>  <br /> <br />  <br /> <br />
            <div className="rounded col-md-5 m-auto border bg-white border-dark " id="format" >
              <br />
              <p id="titleView"className="lead text-center">
                View contact
              </p>

              <form noValidate onSubmit={this.onSubmit}>
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
                <Link exact to='/'> <button className="btn btn-outline-white btn-info btn-block mt-4">Back to the Table</button></Link>
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

export default viewContact;