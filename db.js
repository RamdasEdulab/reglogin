const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Userdb',(err,docs)=>{
  if(!err)
  console.log('mongo connection successfully');
  else
  console.log('mongodb not connected'); 

});

module.exports={mongoose};