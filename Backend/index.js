// importing
const express = require('express');
const libModel = require('./model/booksDb');
const cors = require('cors');



const app = new express();

// midleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// cors 
app.use(cors());
// api creation
// to post data
app.post('/addbooks',async(req,res)=>{
    console.log(req.body)
    var data = await libModel(req.body)
    data.save();
    res.send({status:"data saved"})
})
// get api
app.get('/viewbooks',async(req,res)=>{
    var data = await libModel.find();
    res.json(data)
    console.log(data)
})
// to delete
app.delete('/deletebooks/:id', async(req,res)=>{
    console.log(req.params)
    let id=req.params.id;
    await libModel.findByIdAndDelete(id);
    res.json({status:"deleted"})

})

// to Update
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id
    try{
        var data = await libModel.findByIdAndUpdate(id,req.body)
        res.json({status:"Updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})

// port
app.listen(3007,()=>{
    console.log("Port is running 3007")
})