var yahoo = require('yahoo-financial-data');

exports.getPrice = function(tracker){
    yahoo.price(tracker, function (err, data) {
        console.log("Price: " + data);
        return data;
    });
}

exports.getHistoricData = function(tracker,fromDate,toDate){
    //'close', "2020-11-01", "2020-11-08", '1d',
    console.log("from date "+ fromDate);
    console.log("to date "+ toDate );
    yahoo.history(tracker,'close', fromDate, toDate, '1d', function (err, data) {
        console.log("Historic data: "+ data);
        return data;
    });
}

exports.getFiftyDayAverage = function(tracker){
    yahoo.fiftyDayAverage(tracker,  function (err, data) {
        console.log("Fifty day data: "+ data);
        return data;
    });
}