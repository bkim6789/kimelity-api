var express = require('express');
var router = express.Router();
var unirest = require('unirest');

var fakeHistory = require('../model/fake-history');
var fakeMarket = require('../model/fake-market');

router.get('/quotes', function(req, res, next) {
    var symbols = req.get('symbols');
    var financeReq = unirest('GET', `https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/${symbols}`);

    //todo: share these
    financeReq.headers({
        'x-rapidapi-key': '7c8a4bfccdmshb18b0fefee0416ap15f8b1jsnbc33f7a93cdc',
        'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
        'useQueryString': true
    });
    
    
    financeReq.end(financeRes => {
        if (financeRes.error) throw new Error(financeRes.error);

        res.send(financeRes.body);
    });
});

router.get('/history', function (req, res, next) {
    // var symbol = req.get('symbol');
    // var financeReq = unirest('GET', 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data');

    // financeReq.query({
    //     symbol,
    // });

    // financeReq.headers({
    //     'x-rapidapi-key': '7c8a4bfccdmshb18b0fefee0416ap15f8b1jsnbc33f7a93cdc',
    //     'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    //     'useQueryString': true
    // });


    // financeReq.end(financeRes => {
    //     if (financeRes.error) {
    //         console.log('error:', error);
    //         throw new Error(financeRes.error);
    //     }

    //     res.send(financeRes.body);
    // });
    res.send(fakeHistory);
});

router.get('/market', function (req, res, next) {
    // var symbol = req.get('symbol');
    // var financeReq = unirest('GET', 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data');

    // financeReq.query({
    //     symbol,
    // });

    // financeReq.headers({
    //     'x-rapidapi-key': '7c8a4bfccdmshb18b0fefee0416ap15f8b1jsnbc33f7a93cdc',
    //     'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    //     'useQueryString': true
    // });


    // financeReq.end(financeRes => {
    //     if (financeRes.error) {
    //         console.log('error:', error);
    //         throw new Error(financeRes.error);
    //     }

    //     res.send(financeRes.body);
    // });
    res.send(fakeMarket);
});


module.exports = router;