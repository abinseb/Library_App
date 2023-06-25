

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abinseb09:abinseb09@cluster0.2xp4bal.mongodb.net/libraryMSTdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("Database connected");
})
.catch(err=>console.log(err))

let Schema = mongoose.Schema;

const libSchema = new Schema({
    bookname:String,
    author:String,
    language:String,
    genre : String,
    booknumber : Number

});

var libModel = mongoose.model("book",libSchema);
module.exports = libModel;