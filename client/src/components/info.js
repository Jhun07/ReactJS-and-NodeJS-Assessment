import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


class info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
    }

    render() {
        return (
            <div className="container" >

                <div className="row float-left">

                    <Link class="link" className="nav-link" exact to="/">
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

                <div className="container">
                    <div className="py-4">
                        <br />  <br /><hr /><br />
                        <div className="not-found">
                            <h1 className="display-1">Page Not Found</h1>
                        </div>
                    </div>
                </div> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /> <br /> <br /> <br />
                <br /> <br />
                <hr /><br />


            </div>



        );
    }
}



export default info;