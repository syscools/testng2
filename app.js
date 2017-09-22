require("dotenv").load();
var fs = require("fs");
var express = require("express");
var app = express();

app.use('/', express.static(__dirname + '/dist'));

app.get('/status', function (req,res) {
    /*
    try {
        res.send({"version": process.env.appts});
    } catch (err) {
        res.send({"status": "still building dist/"});
    }
    */

    fs.readFile(".env","utf8",(err,contents) => {
        res.send(contents);
    });
});

app.get('/env', function (req,res) {
    var html = "<h1>Welcome</h1><hr><ul>";
    for (x in process.env) {
        var elem = `<li>${x} = ${process.env[x]}</li>`;
        html += elem;
    }
    html += "</ul>";
    res.send(html);
});

let port = process.env.PORT ? process.env.PORT : 6379;
app.listen(port,function () {
    console.log("listening %s",port);
});
