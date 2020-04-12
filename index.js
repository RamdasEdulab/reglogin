const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

var {mongoose}=require('./db.js');

app.use(express.json());
const authRoute = require('./routes/auth');
app.use('/api/user', authRoute);
app.listen(3000,() => console.log('server started at port 3000'));