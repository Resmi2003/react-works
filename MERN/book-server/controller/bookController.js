const books = require('../model/bookModel')


// addBookController
exports.addBookController=async(req,res)=>{
    console.log("inside add book controller");
    // console.log(req.body);
    // console.log(req.files);
    const{ title,author,pages,imageUrl,price,discountPrice,abstract,publisher,language,isbn,category}
    =req.body
    const uploadImg = req.files.map(item=>item.filename)
    const sellerMail = req.payload
    // console.log(title,author,pages,imageUrl,price,discountPrice,abstract,publisher,language,isbn,category,uploadImg,sellerMail);
    
    try{
        const existingBook = await books.findOne({title,sellerMail})
        if(existingBook){
            res.status(409).json("book already exist...add another one")
        }else{
            const newBook = await books.create({
                title,author,pages,imageUrl,price,discountPrice,abstract,publisher,language,isbn,category,uploadImg,sellerMail
            })
            res.status(200).json(newBook)
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
    
    res.status(200).json("add book request received")
    
}


// homeBookController
exports.getHomeBooksController = async(req,res)=>{
    console.log("inside home book controller");
    try{
        const homeBooks = await books.find().sort({_id:-1}).limit(4)
        res.status(200).json(homeBooks)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
    
}


// getAllUserBookController
exports.getAllUserBookController = async(req,res)=>{
    console.log("inside get All UserBookController");

    const searchKey = req.query.search
    console.log(searchKey);
    

    const loginUserMail = req.payload
    try{
        const allBooks = await books.find({sellerMail:{$ne:loginUserMail},title:{$regex:searchKey,$options:'i'}})
        res.status(200).json(allBooks)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
    
}


// getUserProfileBookController
exports.getUserProfileBookController = async(req,res)=>{
   console.log("inside get All UserBookController");

   const loginUserMail = req.payload
    try{
        const userBooks = await books.find({sellerMail:loginUserMail})
        res.status(200).json(userBooks)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
    
}


// getPurchaseBookController
exports.getPurchaseBookController = async(req,res)=>{
   console.log("inside get All UserBookController");

   const loginUserMail = req.payload
    try{
        const purchaseBooks = await books.find({buyerMail:loginUserMail})
        res.status(200).json(purchaseBooks)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
    
}


// viewBookController
exports.viewBookController = async(req,res)=>{
   console.log("inside get All viewBookController");

   const {id} = req.params
    try{
        const viewBooks = await books.findById({_id:id})
        res.status(200).json(viewBooks)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
    
}


// getAllBooksController
exports.getAllBooksController = async(req,res)=>{
   console.log("inside get AllBooks Controller");
    try{
        const allBooks = await books.find()
        res.status(200).json(allBooks)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
    
}






