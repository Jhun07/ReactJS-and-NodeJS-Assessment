// // show contacts
//  {/* <table class="table table-hover table-info table-striped border shadow "  >
//               <thead class="thead-white">
//                 <tr>
//                   <th scope="col">Contact ID</th>
//                   <th scope="col">Fullname</th>
//                   <th scope="col">Email Address</th>
//                   <th scope="col">Contact Number</th>
//                   <th scope="col">Location</th>
//                   <th scope="col">Registered Date</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>

//                 {
//                   this.state.contacts.map((data, index) =>
//                     <tr>
//                       <th scope="row">{index + 1}</th>
//                       <td>{data.fullname}</td>
//                       <td>{data.emailAddress}</td>
//                       <td>{data.contactNumber}</td>
//                       <td>{data.location}</td>
//                       <td>{data.registeredDate}</td>
//                       <td>
//                         <a href={`contact/view/${data._id}`} class="btn" ><i class="fas fa-eye"  data-toggle="modal" data-target="#viewModal"></i> </a>
//                         <a href={`contact/update/${data._id}`} class="btn"><i class="fa fa-edit" ></i></a>
//                         <a href="#"  ><i class="fa fa-trash " onClick={() => this.onDelete(data._id)}  data-toggle ="modal" data-target="#deletdeModal"></i></a>
//                         <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//                           <div class="modal-dialog modal-dialog-centered" role="document">
//                             <div class="modal-content">
//                               <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalCenterTitle">DELETE CONTACT</h5>
//                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                   <span aria-hidden="true">&times;</span>
//                                 </button>
//                               </div>
//                               <div class="modal-body scroll">
//                                 <p>Are you sure you want to delete this contact?</p><br/>
                                
//                               </div>
//                               <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
//                                 <button type="button" class="btn btn-primary" onClick={() => this.onDelete(data._id)} > Yes</button>
//                                 {alert(newData)}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                   )
//                 }
//               </tbody>
//             </table> */}


//             //errors.registeredDate2 = registeredDate == Date ? 'Registered date field accepts current date!' : '';


//             //ViewContact
            
//   // onChange = e => {
//   //   this.setState({ [e.target.name]: e.target.value });
//   // };

//   // onSubmit = e => {
//   //   e.preventDefault();

//   //   const cons_id = this.props.match.params.id;

//   //   const data = {
//   //     fullname: this.state.fullname,
//   //     emailAddress: this.state.emailAddress,
//   //     contactNumber: this.state.contactNumber,
//   //     location: this.state.location,
//   //     registeredDate: this.state.registeredDate,
//   //   };
//   //   alert(data.fullname);

//   //   axios
//   //     .put(`http://localhost:5000/contact/view/${cons_id}`, data)
//   //     .then(() => {
//   //       this.setState({
//   //         fullname: '',
//   //         emailAddress: '',
//   //         contactNumber: '',
//   //         location: '',
//   //         registeredDate: '',
//   //       })
//   //       this.props.history.push('/');
//   //     })
//   //     .catch(err => {
//   //       console.log("Error in adding contact!" + err);
//   //     })
//   // };


//    fix:
//           Swal.fire({
//             title: 'Do you want to save the changes?',
//             showDenyButton: true,
//             showCancelButton: true,
//             text: `${'Email Address: ' + emailAddress + 'Contact Number: ' + contactNumber + 'Location: ' + location}`  ,
//             confirmButtonText: 'Yes',
//             denyButtonText: 'No',
//             customClass: {
//               actions: 'my-actions',
//               cancelButton: 'order-1 right-gap',
//               confirmButton: 'order-2',
//               denyButton: 'order-3',
//             }
//           })
//           .then((result) => {
//             if (result.isConfirmed) {
//               Swal.fire('Saved!', '', 'success')
//               axios
//               .put(`http://localhost:3400/contact/update/${cons_id}`, data)
//               window.location.reload()
//             } else if (result.isDenied) {
//               Swal.fire('Changes are not saved', '', 'info')
//             }
//           })
//         }
//             this.setState({
//               fullname: '',
//               emailAddress: '',
//               contactNumber: '',
//               location: '',
//               registeredDate: '',
//             })
//             this.props.history.push('/');
//     }
//   };





//   onSubmit = e => {
//     e.preventDefault();

//     const cons_id = this.props.match.params.id;
//     const { fullname, emailAddress, contactNumber, location, registeredDate } = this.state;

//     if (this.validation(fullname, emailAddress, contactNumber, location, registeredDate)) {

//       const data = {
//         fullname: this.state.fullname,
//         emailAddress: this.state.emailAddress,
//         contactNumber: this.state.contactNumber,
//         location: this.state.location,
//         registeredDate: this.state.registeredDate,
//       };

//       console.log(data);

//       axios
//         .put(`http://localhost:3400/contact/update/${cons_id}`, data)
//         .then(() => {
//           this.setState({
//             fullname: '',
//             emailAddress: '',
//             contactNumber: '',
//             location: '',
//             registeredDate: '',
//           })
//           this.props.history.push('/');
//           Swal.fire(
//             'Successfully Updated!',

//           );
//         })
//         .catch(err => {
//           console.log("Error in updating contact!" + err);
//         })
//     }
//   };

//  __----
//  Swal.fire({
//   title: 'Do you want to save the changes?',
//   showDenyButton: true,
//   showCancelButton: true,
//   confirmButtonText: 'Save',
//   denyButtonText: `Don't save`,
// }).then((result) => {
//   /* Read more about isConfirmed, isDenied below */
//   if (result.isConfirmed) {
//     Swal.fire('Saved!', '', 'success')
//   } else if (result.isDenied) {
//     Swal.fire('Changes are not saved', '', 'info')
//   }
// })


