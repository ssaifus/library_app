const mongoose=require('mongoose');
const {Schema}=mongoose;
const book=new Schema(
    {
        Book_name: String,
        Issuer_name: String,
        Due_date: String
    });
module.exports=mongoose.model("Books",book,"LIBRARY_APP");