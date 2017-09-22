var express = require("express");
var app = express();

app.use('/', express.static(__dirname + '/dist'));

app.get('/version', function (req,res) {
    res.send({"version": process.env.CODESIG});
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
