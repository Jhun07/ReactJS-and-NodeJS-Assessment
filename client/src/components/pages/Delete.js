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
    // console.log("this",id);
    axios
      .delete('http://localhost:5000/contact/' + id)
      .then(res => {
        window.location.reload();
      })
      .catch(err => {
        console.log("Error in deleting contact!");
      })
      
  };

  onEdit = (id, index) => {
    // console.log(id);

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
                        
                        <a href="#" class="btn" onClick={() => this.onEdit(data)}><i class="fa fa-edit" data-toggle="modal" data-target="#viewModal" ></i></a>
                        <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                Editing Contact?
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" onClick={() => this.onEdit(data._id)} class="btn btn-primary">Yes</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <a href="#" ><i class="fa fa-trash " data-toggle="modal" data-target="#deleteModal"></i></a>
                        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">DELETE CONTACT</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body scroll">
                                <p>Are you sure you want to delete this contact?</p><br/>
                                
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" onClick={() => this.onDelete(data._id)} class="btn btn-primary">Yes</button>
                                {console.log(data._id)}
                              </div>
                            </div>
                          </div>
                        </div>
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