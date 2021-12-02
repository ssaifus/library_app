const express = require("express")
const app = express()
const mongoose = require("mongoose")
const stu = require("./schema")
//const url = "mongodb+srv://user1:0%^g381m%53ubuUcsBv0NsEACSkY#!@cluster007.tcspy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect("mongodb+srv://test1:test1@cluster007.tcspy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("Connected to DB"))
app.use(express.json())
app.post("/add-new-post", async(req,res)=>{
    const bookname = req.body.Book_name;
    const stuname = req.body.Issuer_name;
    const duedate = req.body.Due_date;

    try{
        const st = new stu(
            {
                Book_name:bookname,
                Issuer_name: stuname,
                Due_date: duedate
            }
        )
        const savedst = await st.save()
        res.json(
            {"message":"Data is saved","data":savedst}
        )
    }
    catch(err)
    {
        res.json(err);
    }
})
app.use("/",(req, res)=>{
    res.send("SAIFUS")
    res.json(
        
    )
})
app.listen(3000, ()=>console.log("Express Started"))