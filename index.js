const connection = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/employees", (req,res) => {
    connection.query("SELECT * FROM employee", (err,results) => {
        if(err){
            console.log(err);
        }
        else{
            // console.log(results);
            res.send(results);
        }
    })
})

app.get("/employees/:id", (req,res) => {
    connection.query("SELECT * FROM employee WHERE id=?", [req.params.id], (err,results) => {
        if(err){
            console.log(err);
        }
        else{
            // console.log(results);
            res.send(results);
        }
    })
})

app.delete("/employees/:id", (req,res) => {
    connection.query("DELETE FROM employee WHERE id=?", [req.params.id], (err,results) => {
        if(err){
            console.log(err);
        }
        else{
            // console.log(results);
            res.send(results);
        }
    })
})

app.post("/employees", (req,res) => {
    const emp = req.body;
    const empdata = [emp.name, emp.salary];
    connection.query("INSERT INTO employee(name,salary) values(?)", [empdata], (err,results) => {
        if(err){
            console.log(err);
        }
        else{
            // console.log(results);
            res.send(results);
        }
    })
})

// for updating data we have patch and put
// patch is used to update the existing fields
// put is used to update if the data exits 
//                       if data not exists then insert that new data in databse
//! PATCH
app.patch("/employees", (req,res) => {
    const emp = req.body;
    connection.query("UPDATE employee SET ? WHERE id="+emp.id, [emp], (err,results) => {
        if(err){
            console.log(err);
        }
        else{
            // console.log(results);
            res.send(results);
        }
    })
})

//! PUT
app.put("/employees", (req,res) => {
    const emp = req.body;
    connection.query("UPDATE employee SET ? WHERE id="+emp.id, [emp], (err,results) => {
        if(err){
            console.log(err);
        }
        else{
            if(results.affectedRows == 0){
                const empdata = [emp.name, emp.salary];
                connection.query("INSERT INTO employee(name,salary) values(?)", [empdata], (err,results) => {
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(results);
                    }
                })
            }
            else{
                res.send(results);
            }
        }
    })
})

app.listen(3000, ()=>{
    console.log("Express server is running on port 3000")
});