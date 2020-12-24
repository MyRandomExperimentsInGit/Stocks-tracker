// import express JS module into app 
// and creates its variable. 
var express = require('express'); 
var fs = require('fs');
var app = express(); 
  
// Creates a server which runs on port 3000 and  
// can be accessed through localhost:3000 
app.listen(3000, function() { 
    console.log('server running on port 3000'); 
} ) 
  
// Function getData() is executed whenever  
// url is of the form localhost:3000/stocks 
app.get('/stocks', getData); 
  
function getData(req, res) { 
      
    var spawn = require("child_process").spawn; 
      
    // E.g : http://localhost:3000/stocks?operation=netincome&tracker=AAPL
    var process = spawn('python',["./DataCollector.py",req.query.operation,req.query.tracker] ); 
  
    process.stdout.on('data', function(data) { 
        res.send(data); 
        fs.writeFileSync('stockdata.json', data);
        // let jdata = JSON.stringify(data);
        // fs.writeFileSync('stockdata.json', jdata);
        console.log("reading from written file")
        fs.readFile('stockdata.json', (err, rawdata) => {
            if (err) throw err;
            let parsedData = JSON.parse(rawdata);
            console.log(JSON.stringify(parsedData));
        });
        
        console.log('This is after the read call');
    } ) 
} 