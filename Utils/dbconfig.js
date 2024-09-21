const mongoose = require("mongoose");

require('dotenv').config({ path: '../.env' });

const db_connect=()=>{
    return mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Connected! to db'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));
}

module.exports= db_connect