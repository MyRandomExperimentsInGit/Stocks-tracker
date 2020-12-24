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
