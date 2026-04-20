// import dotenv express cors
// Loads .env file contents into process.env
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./Connection/db')


// create a server using express
const bookStoreServer = express()

// enable cors in server
bookStoreServer.use(cors())    // cors is used for communication between ports.

// parse json on server
bookStoreServer.use(express.json())    // express.json() is used as middleware instead of defaults

// user router in server app
bookStoreServer.use(router)

// handle image from server
bookStoreServer.use('/uploads',express.static('./uploads'))


// create port for server to available on web

const PORT = 3000    // 3000 is default node port

bookStoreServer.listen(PORT,()=>{
    console.log(`Bookstore-Server started running at PORT:${PORT}...and waiting for client request`);
    
})


bookStoreServer.get('/',(req,res)=>{
    res.status(200).send('<h1 style=color:blue>Bookstore-Server started running successfully....</h1>')   // node don't have capacity to re-render. so if we make any change then run again. so for that use nodemon.
})
