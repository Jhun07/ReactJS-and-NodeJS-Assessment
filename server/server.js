const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const UserRouter = require('./routes/contact');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3400;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB Connection Established.');
    
})

app.use('/contact', UserRouter);

app.listen(port, ()=> {
    console.log(`Server is running at port ${port}`); 
});