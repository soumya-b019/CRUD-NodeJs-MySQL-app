const mysql = require("mysql2");
const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employeedb"
})

mysqlConnection.connect((err) => {
    if(err){
        console.log("Error in DB Connection: " + JSON.stringify(err, undefined,2));
    }
    else{
        console.log("DB Connected successfully");
    }
})

module.exports=mysqlConnection;