const mongoose = require('mongoose')

const connectionString = process.env.connectionString

mongoose.connect(connectionString).then(res=>{
    console.log("bookStore-server successfully connected to MongoDb");
}).catch((error)=>{
    console.log("connection failed...");
    console.log(error);
    
    
})