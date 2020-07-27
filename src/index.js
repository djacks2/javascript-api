const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Cherise1',
    database: 'todo'
});


try{
    connection.connect();
}catch(e){
    console.log('Connection failed');
    console.log(e);
}

const api = express();
api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

api.listen(3000,()=>{
    console.log("API up and running");
});

api.post('/add',(req,res)=>{
    console.log(req.body);
   res.send('It works');
});
