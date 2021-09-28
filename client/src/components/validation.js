


export const FormError = (fullname, emailAddress, contactNumber, location, registeredDate ) => {

  const errors = {
  };
  const validEmailRegex =  RegExp( /^([A-Za-z\d.-]+)@([A-Za-z\d]+)\.([A-Za-z]{2,45})$/);
  const fullnameVal = RegExp(/^[aA-zZ\s]+$/);
  // const contactVal = RegExp(/(^(\+)(\d){12}$)|(^\d{11}$)/);
  const contactVal = RegExp(/^\d+$/);
  // const registeredDValue = RegExp(/[12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])/);
  // const today = new Date(),
  //   date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
   
  // const Date = () =>{
  //   const yesterday = moment().subtract(1, 'day');
  //   const disablePastDt = current => {
  //     return current.isAfter(yesterday);
  //   };

  //   return (
  //       isValidDate={disablePastDt}
  //   );
  // }

 //checking first the requirements before putting it to errors array
  errors.fullname = fullname ? "" : "Fullname field cannot be blank.";
  errors.fullname1 = fullname.length >= 31 ? 'Fullname field accepts up to 30 in size only!': '';
  errors.fullname2 = fullnameVal.test(fullname) ? "" : 'Fullname field accepts characters values only!';

  //email address validation
  errors.emailAddress = validEmailRegex.test(emailAddress) ? '': 'Email needs proper domain!';
  errors.emailAddress2 = emailAddress ? "" :  "Email Address field cannot be blank." ;
  errors.emailAddress3 = emailAddress.length >= 45 ? 'Email Address field accepts up to 45 in size only.': '' ;

  //contact number validation
  errors.contactNumber = contactNumber ? "" : "Contact Number field cannot be blank!";
  errors.contactNumber1 = contactNumber.length >= 12 ? 'Contact Number field accepts up to 11 in size only!': '';
  errors.contactNumber2 = contactVal.test(contactNumber) ? "" : 'Contact Number field accepts numeric values only!';

  //location validation
  errors.location = location ? "": "Location field cannot be blank.";

  //registered date validation
  errors.registeredDate = registeredDate ? "" : "Registered date cannot be blank.";
  
  
  
  return errors;
}

