import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



class showContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }


  componentDidMount() {
    axios
      .get('http://localhost:5000/contact')
      .then(res => {
        this.setState({
          contacts: res.data
        })
      })
      .catch(err => {
        console.log('Error from Contact List');
      })
  }

  onDelete = (id, index) => {
    console.log(id);

    //   // const data1 ={
    //   //   fullname: this.state.fullname == document.getElementById(this.fullname),
    //   //   emailAddress: this.state.emailAddress,
    //   //   contactNumber: this.state.contactNumber,
    //   //   location: this.state.location,
    axios
      .delete('http://localhost:5000/contact/' + id)
      .then(res => {

        alert("successfully deleted");
        //this.contact.splice(index,1);
        window.location.reload();

        // window.location.reload();
      })
      .catch(err => {
        //console.log(err);
        console.log("Error in deleting contact!");
      })
  };
  //   //   registeredDate: this.state.registeredDate

  //   // console.log(data1);

  //   // const data = {
  //   //   fullname: this.state.fullname,
  //   //   emailAddress: this.state.emailAddress,
  //   //   contactNumber: this.state.contactNumber,
  //   //   location: this.state.location,
  //   //   registeredDate: this.state.registeredDate,
  // console.log(data);



  onEdit = (id, index) => {
    console.log(id);

    axios
      .get('http://localhost:5000/contact/' + id)
      .then(res => {

        alert("successfully updated");
        window.location.reload();
      })
      .catch(err => {
        
        console.log("Error in updating contact!");
      })
  };




  // const contacts = this.state.contacts;
  // console.log(contacts);

  // console.log("Contact Record: " + contacts.fullname);

  // var contactList;

  // if(!contacts) {
  //     contactList = "there is no contact record!";
  // } else {
  //     contactList = contacts.map((contacts) =>
  //     // <Card contacts = {contacts} key={k} />
  //   );
  // }
  render() {
    return (
        <div className="container" >
            <h2 className="display-8 text-center">Contact List</h2>
          <div className="row float-left">
  
            <Link className="nav-link" exact to="/">
              Home
            </Link>

            <Link className="nav-link" exact to="/this/about">
              About
            </Link>
            <Link className="nav-link" exact to="/contact">
              Contact
            </Link>
            
          </div>
            <div className="btn float-right"><Link to="/contact/add" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add New Contact
            </Link></div>
            


          <div className="container">

            <div className="py-4">
              <br /> <br />
              <table class="table table-success table-striped border shadow "  >
                <thead class="thead-white">
                  <tr>
                    <th scope="col">Contact ID</th>
                    <th scope="col">Fullname</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Location</th>
                    <th scope="col">Registered Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                  {


                    this.state.contacts.map((data, index) =>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{data.fullname}</td>
                        <td>{data.emailAddress}</td>
                        <td>{data.contactNumber}</td>
                        <td>{data.location}</td>
                        <td>{data.registeredDate}</td>
                        <td>
                          <a href="#" class="btn" ><i class="fas fa-eye"></i> </a>
                          <a href="#" class="btn" onClick={() => this.onEdit(data)}><i class="fa fa-edit" data-target="#exampleModalCenter"></i></a>

                          <a href="#" onClick={() => this.onDelete(data._id)} ><i class="fa fa-trash "></i></a>
                        </td>
                      </tr>
                    )}

                </tbody>
              </table>
              
            </div></div>
            
        </div>
        
   
    );
  }
}



export default showContact;