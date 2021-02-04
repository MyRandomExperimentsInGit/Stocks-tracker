const express = require('express');
const app = express();
const yfData = require('./DataFetcher.js')

app.listen(3000, function () {
    console.log('server running on port 3000');
})


//http://localhost:3000/tracker/AAPL/operation/getHistoricData/2020-11-01/2020-11-08
console.log("Fetching info")

app.get('/tracker/:trackerid/operation/:opid/:fromdate?/:todate?', getData);


function getData(req, res) {
    console.log("req.params.tracker" + req.params.trackerid)
    console.log("req.params.operation" + req.params.opid)
    switch (req.params.opid) {
        case "getPrice":
            var Data = yfData.getPrice(req.params.trackerid)
            res.send(Data)
            break;
        case "getHistoricData":
            var Data = yfData.getHistoricData(req.params.trackerid, req.params.fromdate, req.params.todate)
            res.send(Data)
            break;
        case "fiftyDayAverage":
            var Data = yfData.getFiftyDayAverage(req.params.trackerid)
            res.send(Data)
            break;
        default:
            res.send("Invalid data");
    }
}

