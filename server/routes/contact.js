const router = require('express').Router();

let Contact = require('../models/contact.model');

//home
router.route('/').get((req, res) =>{

    Contact.find()
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error : ' + err));
     
});

//add 
router.route('/add').post((req,res) => {

    const fullname = req.body.fullname;
    const emailAddress = req.body.emailAddress;
    const contactNumber = req.body.contactNumber;
    const location= req.body.location;
    const registeredDate = req.body.registeredDate;
    

    const newContact = new Contact({fullname,emailAddress,contactNumber,location, registeredDate});

    newContact.save()
           .then( () => res.json('New Record Added.'))
           .catch(err => res.status(400).json('Error: '+ err));

})

//details
router.route('/view/:id').get((req,res)=> {
    Contact.findById(req.params.id)
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error: '+ err));
})

//delete
router.route('/delete/:id').delete((req,res)=> {
    Contact.findByIdAndDelete(req.params.id)
        .then(contact => res.json('Record was deleted.'))
        .catch(err => res.status(400).json('Error: '+ err));
})

//UPDATE
router.route("/update/:id").put((req, res) => {
    Contact.findById(req.params.id)
      .then((contact) => {
        contact.fullname= req.body.fullname,
        contact.emailAddress=req.body.emailAddress,
        contact.contactNumber= req.body.contactNumber,
        contact.location= req.body.location,
        contact.registeredDate= req.body.registeredDate,
        
        contact.save()
          
          .then((user) => res.json("Record was updated."))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;