const http = require('http')


// steps for generating http request
http.createServer((req,res)=>{
    res.write("<h1>Request Resolved</h1>")
    res.end()   // if res.end() not put then the loading in browser will not stop in top.
}).listen(3000,()=>{
    console.log("server started running....");
    
})


// PS C:\Users\resmi\OneDrive\Desktop\development-journey\react-works\MERN\node> node http.js
// server started running....
