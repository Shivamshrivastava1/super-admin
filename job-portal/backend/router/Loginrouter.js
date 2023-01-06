// make router with express.router
// file name of router and the router name keep it same
const express = require('express');
const Loginrouter = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const { connect } = require('../../../Candidate/Backend/Loginrouter');

// createpool is used for application grade in mysql server
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "superadmin_db"
})


// make routes of router;
// making a post to database while taking inputs

Loginrouter.post('/save', async (req, res) => {
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const encryptPassword = await bcrypt.hash(Password, 10);


    db.getConnection(async (err, connection) => {
        if (err) throw (err);

        // whenever this is called , we will search in database
        //  here ? = placeholder

        const sqlSearch = "SELECT * FROM superadmin_login WHERE Name =?"
        const search_query = mysql.format(sqlSearch, [Name, Email, Password]);
        // whenever this is called want to insert something to database;

        const sqlInsert = "INSERT INTO superadmin_login(Name,Email,Password) VALUES(?,?,?)";
        const insert_query = mysql.format(sqlSearch, [Name, Email, encryptPassword]);

        await connection.query(search_query, async (err, result) => {
            if (err) throw (err);
            console.log("---->searching for result");
            console.log(result.length);
            if (result.length != 0) {
                // releasing connection with database;
                connection.release();
                console.log("Email already Exists");
                res.json({
                    message: "Email already exists"
                })
            } else {
                await connection.query(insert_query, (err, result) => {
                    if (err) throw (err);
                    console.log("data inserted");
                    res.json({
                        message: "data inserted successfully",
                        result: result
                    })
                    connection.release();
                })
            }

        })

    })
})

// dcrypt ==> comparison
Loginrouter.post("/userAuth",(req,res)=>{
    let Name = req.body.Name;
    let Email=req.body.Email;
    let Password=req.body.Password;
    
    db.getConnection(async(err,connection)=>{
        if(err) throw(err);
        const sqlSearch  = "SELECT * FROM superadmin_login WHERE Name =?"
        const search_query = mysql.format(sqlSearch,[Name])
        await connection.query(search_query,async(err,result)=>{
            if(err) throw(err)
            if(result.length ==0){
                console.log("--->User does not exist");
                res.json({
                    message:"User does not exist"

                })
            } else {
                console.log("'this is result", result);
                const hasedPassword = result[0].Password;
                console.log(hasedPassword);
                if(await bcrypt.compare(Password,hasedPassword)){
                    console.log("signup successful");
                    res.json({
                        message:"incorrect password"
                    })
                }
            }
        })
    })
})


module.exports = Loginrouter;