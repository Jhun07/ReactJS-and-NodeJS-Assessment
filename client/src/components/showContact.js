import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: '_id', headerName: 'ID', width: 150 },
  {
    field: 'fullname',
    headerName: 'Full Name',
    width: 150,

  },
  {
    field: 'emailAddress',
    headerName: 'Email Address',
    width: 200,

  },
  {
    field: 'contactNumber',
    headerName: 'Contact Number',
    width: 200,

  },
  {
    field: 'location',
    headerName: 'Location',
    width: 200,

  },
  {
    field: 'registeredDate',
    headerName: 'Registered Date',
    width: 200,
  },
  {
    field: '',
    headerName: 'Action',
    width: 200,
    
    renderCell: (params) => {

      const onDelete = async () => {
     
        axios
          .delete('http://localhost:3400/contact/' + params.row._id)
          .then(() => {
            console.log(params.row._id)

            window.location.reload();
            Swal.fire(
              'Successfully Deleted!',
            );
          })

          .catch(err => {
            console.log("Error in deleting contact!" + err);
          })

      };

      return (
        <>

          <a href={`contact/view/${params.row._id}`} class="btn" ><i class="fas fa-eye"></i> </a>
          <a href={`contact/update/${params.row._id}`} class="btn"><i class="fa fa-edit" ></i></a>
          <a href ={`delete/${params.row._id}`}><i class="fa fa-trash " onClick={onDelete} data-toggle="modal" data-target="#deletdeModal"></i></a>


        </>
      );
    }

  }
];


class showContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:3400/contact')
      .then(res => {
        this.setState({
          contacts: res.data
        })
      })
      .catch(err => {
        console.log('Error from Contact List');
      })
  }
  onGet = (id) => {
    axios
      .get('http://localhost:3400/contact/' + id)
      .then(() => {
        window.location.reload();
      })
      .catch(err => {
        console.log("Error in deleting contact!" + err);
      })

  };


  render() {
    return (

      
      <div className="container" >
        <div className="row float-left">
          <Link className="nav-link " exact to="/">
            Home
          </Link>
          <Link className="nav-link" exact to="/about">
            About
          </Link>
          <Link className="nav-link" exact to="/info">
            Info
          </Link>
          <form class="d-flex">
            <input class="form-control my-lg-0" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-primary btn-sm" type="submit">Search</button>
          </form>
        </div>
        <div className="btn float-right"><Link to="/contact/add" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add New Contact
        </Link></div>
        

        {/*----------Displaying the data after fetching them from MongoDB-------------- */}
        <div className="container">
          <div className="">
            <br /><br /><hr /><br />
            
            <h1>Contact List</h1><br />

            <div style={{ height: 400, width: '100%' }}>
              <DataGrid  style={{color: 'gray'}}
                rows={this.state.contacts}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowId={(row) => row._id}
                disableSelectionOnClick
              />
            </div>
            <br />
            <hr /><br />
          </div></div>
      </div>
    );
  }
}



export default showContact;