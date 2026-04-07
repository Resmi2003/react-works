const fs = require('fs')

// to read a file
// utf-8 is encoding to understand buffer data
fs.readFile('./test.txt','utf-8',(err,data)=>{
    console.log(data);
    
})

// to write a file (adding)
// sample content changed to Luminar Technolab is string
fs.writeFile('./test.txt',"sample content changed to Luminar Technolab",(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("operation success");
        
    }
})     // so the content in test.txt changed to sample content changed to Luminar Technolab. and operation success comes in output.


/*

PS C:\Users\resmi\OneDrive\Desktop\development-journey\react-works\MERN\node> node sample1.js
inside test file
PS C:\Users\resmi\OneDrive\Desktop\development-journey\react-works\MERN\node> node sample1.js
inside test file
PS C:\Users\resmi\OneDrive\Desktop\development-journey\react-works\MERN\node> node sample1.js
PS C:\Users\resmi\OneDrive\Desktop\development-journey\react-works\MERN\node> node sample1.js
inside test file
inside print function
PS C:\Users\resmi\OneDrive\Desktop\development-journey\react-works\MERN\node> node fs.js
<Buffer 73 61 6d 70 6c 65 20 63 6f 6e 74 65 6e 74 20 74 6f 20 6c 6f 61 64 20 74 78 74 20 66 69 6c 65 0d 0a>
inside print function
PS C:\Users\resmi\OneDrive\Desktop\development-journey\react-works\MERN\node> node fs.js
inside print function
inside print function
inside print function
PS C:\Users\resmi\OneDrive\Desktop\development-journey\react-works\MERN\node> node fs.js
<Buffer 73 61 6d 70 6c 65 20 63 6f 6e 74 65 6e 74 20 74 6f 20 6c 6f 61 64 20 74 78 74 20 66 69 6c 65 0d 0a>
PS C:\Users\resmi\OneDrive\Desktop\development-journey\react-works\MERN\node> node fs.js
sample content to load txt file

PS C:\Users\resmi\OneDrive\Desktop\development-journey\react-works\MERN\node> node fs.js

operation success
PS C:\Users\resmi\OneDrive\Desktop\development-journey\react-works\MERN\node>

*/




