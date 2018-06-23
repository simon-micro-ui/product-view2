//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/product-view2'));

app.get('/index.html', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/dist/product-view2/index.html'));
});
app.get('/product-view2.js', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/dist-npm/product-view2/product-view2.js'));
});

console.log("Starting server on port 8082");
app.listen(process.env.PORT || 8082);