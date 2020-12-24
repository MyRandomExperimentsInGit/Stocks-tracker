# Setup

1. Install Node 
2. Download this project
3. Run Setup.cmd present in root folder 

# How to run backend 

1. Naviagte to Communicator folder and do 
```
node communicator.js
```

2. Once the server is running open a browser and type http://localhost:3000/stocks?operation=<>&tracker=<>

    a. Operation currently takes these parameters 
    
        > netincome

        > balancesheet

    b. Tracker takes the name of the stock (for example: AAPL, TSLA) 


So your querry will end up looking like this : 
http://localhost:3000/stocks?operation=balancesheet&tracker=AAPL

In addition to the querry result being displayed in the browser, you can also find it stored in \Communicator\stockdata.json

## Note

For sample result data look at \Communicator\stockdata.json

# TODOs

1. Move python code from Communicator folder to Algos folder and adapt it in node js.
2. Once the movement is done move the part of code where we check what command has been passed to a seperate file and adapt it in communicator.js 
3. json.dump in python script is downloading the data to local machine, find a workaround. (try : remove json.dump and replace it will string.replace -> replace single quotes with double quotes)
