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
      .get('http://localhost:5000/contact/')
      .then(res => {
        this.setState({
          contacts: res.data
        })
      })
      .catch(err => {
        console.log('Error from Contact List');
      })
  }

  onDelete = (id) => {
    // console.log("this",id);
    axios
      .delete('http://localhost:5000/contact/' + id)
      .then( () => {
        window.location.reload();
      })
      .catch(err => {
        console.log("Error in deleting contact!" + err);
      })

  };

  onEdit = (editId) => {
    // console.log(id);

    axios
      .get('http://localhost:5000/contact/' + editId)
      .then(res => {
        // console.log(id)
        // // alert("successfully updated");
        // window.location.reload();
      })
      .catch(err => {

        console.log("Error in updating contact!");
      })
  };



  onView = (Viewid, index) => {
    // console.log(id);

    axios
      .post('http://localhost:5000/contact/' + Viewid)
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
        <div className="row float-left">
          <Link className="nav-link" exact to="/">
            Home
          </Link>
          <Link className="nav-link" exact to="/about">
            About
          </Link>
          <Link className="nav-link" exact to="/info">
            Info
          </Link>
        </div>
        <div className="btn float-right"><Link to="/contact/add" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add New Contact
        </Link></div>

        {/*----------Displaying the data after fetching them from MongoDB-------------- */}
        <div className="container">
          <div className="py-4">
            <br /><br /><hr /><br />
            <table class="table table-hover table-info table-striped border shadow "  >
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
                        <a href={`contact/view/${data._id}`} class="btn" ><i class="fas fa-eye" onClick={() => this.onView(data._id)} data-toggle="modal" data-target="#viewModal"></i> </a>
                        <a href={`contact/update/${data._id}`} class="btn"><i class="fa fa-edit" ></i></a>
                        <a href="#"  ><i class="fa fa-trash " onClick={() => this.onDelete(data._id)} data-toggle="modal" data-target="#deleteModal" ></i></a>
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
                                
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                    <button type="button" class="btn btn-primary"  onClick={() => this.onDelete(data._id)}>Yes</button>    
                                  </div>
                                </div>
                                </div>
                              </div>
                            </div> 
                      
                    
                      </td>
                        
              
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div></div>
      </div>
    );
  }
}



export default showContact;