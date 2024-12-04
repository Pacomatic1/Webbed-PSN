
var util = require('util');
var exec = require('child_process').exec;
var http = require('http');

var command = 'curl -s --cacert /Users/macbook/Documents/play.pem https://a0.ww.np.dl.playstation.net/tpl/np/NPUA80662/NPUA80662-ver.xml'
var resp = "Not loaded yet..."
http
  .createServer((req, res) => {
     

    getFile();
    console.log("reloading...ii..")

    res.writeHead(200, {'Content-Type': 'application/xml', 'Access-Control-Allow-Origin': '*'});
    res.write(resp);
    res.end();
  })
  .listen(13000);
  

  async function getFile() {
  child = exec(command, function(error, stdout, stderr){

    resp = stdout;
   
    
    });
  }
