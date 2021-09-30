import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const contactCard = (props) => {
    var  contact = props.contacts;
 
    return(    
        <div className="container">
        <div className="py-4">
         <br/> <br/>
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
                <tr>
                <td>{contact.fullname}</td>
                <td>{contact.emailAddress}</td>
                <td>{contact.location}</td>
                <td>{contact.registeredDate}</td>
                </tr>
                 </tbody>
        </table>
        </div></div>
    )
  
};

export default contactCard;