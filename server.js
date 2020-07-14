// Importing Modules

const express = require('express');
const path = require('path') 
const fs = require('fs');
const bodyParser = require('body-parser');

// Initialise Server

const app1 = express();
const app2 = express();
const app3 = express();
const app4 = express();
const app5 = express();
const app6 = express();
const app7 = express();
const app8 = express();

// Port Declarations

const PORT1 = 8081;
const PORT2 = 8082;
const PORT3 = 8083;
const PORT4 = 8084;
const PORT5 = 8085;
const PORT6 = 8086;
const PORT7 = 8087;
const PORT8 = 8088;

// Listens to node 1

app1.get('/', (req, res) => res.sendFile(path.join (__dirname + "/public/index.html")));      // Points the browser to Homepage    
app1.use( express.static( __dirname + '/public' ));                                           // Public folder declared as static
app1.use(bodyParser.text());
app1.post('/submit', (req,res) => 
    fs.writeFile(path.join(__dirname+ "/data/nodeData/node1.json"), req.body, (err) => {
    if (err) throw err;
    console.log('Data written to file');
}));                                      
app1.listen(PORT1, () => console.log("Server started on port " + PORT1));                     // Listens to specified port

// Listens to node 2

app2.get('/', (req, res) => res.sendFile(path.join (__dirname + "/public/index.html")));      // Points the browser to Homepage
app2.use( express.static( __dirname + '/public' ));                                           // Public folder declared as static  
app2.use(bodyParser.text())
app2.post('/submit', (req,res) => 
    fs.writeFile(path.join(__dirname+ "/data/nodeData/node2.json"), req.body, (err) => {
    if (err) throw err;
    console.log('Data written to file');
}));                                       
app2.listen(PORT2, () => console.log("Server started on port " + PORT2));                     // Listens to specified port

// Listens to node 3

app3.get('/', (req, res) => res.sendFile(path.join (__dirname + "/public/index.html")));      // Points the browser to Homepage
app3.use( express.static( __dirname + '/public' ));                                           // Public folder declared as static  
app3.use(bodyParser.text())
app3.post('/submit', (req,res) => 
    fs.writeFile(path.join(__dirname+ "/data/nodeData/node3.json"), req.body, (err) => {
    if (err) throw err;
    console.log('Data written to file');
}));                                      
app3.listen(PORT3, () => console.log("Server started on port " + PORT3));                     // Listens to specified port

// Listens to node 4

app4.get('/', (req, res) => res.sendFile(path.join (__dirname + "/public/index.html")));      // Points the browser to Homepage
app4.use( express.static( __dirname + '/public' ));                                           // Public folder declared as static  
app4.use(bodyParser.text())
app4.post('/submit', (req,res) => 
    fs.writeFile(path.join(__dirname+ "/data/nodeData/node4.json"), req.body, (err) => {
    if (err) throw err;
    console.log('Data written to file');
}));                                     
app4.listen(PORT4, () => console.log("Server started on port " + PORT4));                     // Listens to specified port

// Listens to node 5

app5.get('/', (req, res) => res.sendFile(path.join (__dirname + "/public/index.html")));      // Points the browser to Homepage
app5.use( express.static( __dirname + '/public' ));                                           // Public folder declared as static  
app5.use(bodyParser.text())
app5.post('/submit', (req,res) => 
    fs.writeFile(path.join(__dirname+ "/data/nodeData/node5.json"), req.body, (err) => {
    if (err) throw err;
    console.log('Data written to file');
}));                                     
app5.listen(PORT5, () => console.log("Server started on port " + PORT5));                     // Listens to specified port

// Listens to node 6

app6.get('/', (req, res) => res.sendFile(path.join (__dirname + "/public/index.html")));      // Points the browser to Homepage
app6.use( express.static( __dirname + '/public' ));                                           // Public folder declared as static  
app6.use(bodyParser.text())
app6.post('/submit', (req,res) => 
    fs.writeFile(path.join(__dirname+ "/data/nodeData/node6.json"), req.body, (err) => {
    if (err) throw err;
    console.log('Data written to file');
}));                                      
app6.listen(PORT6, () => console.log("Server started on port " + PORT6));                     // Listens to specified port

// Listens to node 7

app7.get('/', (req, res) => res.sendFile(path.join (__dirname + "/public/index.html")));      // Points the browser to Homepage
app7.use( express.static( __dirname + '/public' ));                                           // Public folder declared as static  
app7.use(bodyParser.text())
app7.post('/submit', (req,res) => 
    fs.writeFile(path.join(__dirname+ "/data/nodeData/node7.json"), req.body, (err) => {
    if (err) throw err;
    console.log('Data written to file');
}));                                      
app7.listen(PORT7, () => console.log("Server started on port " + PORT7));                     // Listens to specified port

// Listens to node 8

app8.get('/', (req, res) => res.sendFile(path.join (__dirname + "/public/index.html")));      // Points the browser to Homepage
app8.use( express.static( __dirname + '/public' ));                                           // Public folder declared as static  
app8.use(bodyParser.text())
app8.post('/submit', (req,res) => 
    fs.writeFile(path.join(__dirname+ "/data/nodeData/node8.json"), req.body, (err) => {
    if (err) throw err;
    console.log('Data written to file');
}));                                      
app8.listen(PORT8, () => console.log("Server started on port " + PORT8));                     // Listens to specified port
