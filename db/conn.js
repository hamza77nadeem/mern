const mongoose = require("mongoose");

const DB = process.env.DATABASE


mongoose.connect('mongodb://127.0.0.1:27017/harsh_real');
// mongoose.connect('mongodb+srv://pnypythonb10:12345@cluster0.fjcbvis.mongodb.net/?retryWrites=true&w=majority');

console.log("Connected....")    
mongoose.pluralize(null)