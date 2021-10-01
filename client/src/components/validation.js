export const FormError = (fullname, emailAddress, contactNumber, location, registeredDate) => {

  const errors = {
  };
  const validEmailRegex = RegExp(/^([A-Za-z\d.-]+)@([A-Za-z\d]+)\.([A-Za-z]{2,45})$/);
  const fullnameVal = RegExp(/^[aA-zZ\s]+\,[aA-zZ\s]+$/);
  const contactVal = RegExp(/^\d+$/);
  
  var todayDate = new Date().toISOString().slice(0, 10); // TO CONFIRM THE DATE INPUT FROM USER YYYY/MM/DD

  //checking first the requirements before putting it to errors array
  errors.fullname = fullname ? "" : "Fullname field cannot be blank.";
  errors.fullname1 = fullname.length >= 31 ? 'Fullname field accepts up to 30 in size only!' : '';
  errors.fullname2 = fullnameVal.test(fullname) ? "" : 'Fullname field accepts characters values only!';

  //email address validation
  errors.emailAddress = validEmailRegex.test(emailAddress) ? '' : 'Email needs proper domain!';
  errors.emailAddress2 = emailAddress ? "" : "Email Address field cannot be blank.";
  errors.emailAddress3 = emailAddress.length >= 45 ? 'Email Address field accepts up to 45 in size only.' : '';

  //contact number validation
  errors.contactNumber = contactNumber ? "" : "Contact Number field cannot be blank!";
  errors.contactNumber1 = contactNumber.length >= 12 ? 'Contact Number field accepts up to 11 in size only!' : '';
  errors.contactNumber2 = contactVal.test(contactNumber) ? "" : 'Contact Number field accepts numeric values only.';

  //location validation
  errors.location = location ? "" : "Location field cannot be blank.";

  //registered date validation
  errors.registeredDate = registeredDate ? "" : "Registered date cannot be blank.";
  errors.registeredDate2 = registeredDate === todayDate ? "" : "Registered date accepts current date only!"
  

  return errors;
}

