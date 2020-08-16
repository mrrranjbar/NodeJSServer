var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        var content = route(handle,pathname);
        response.writeHead(200,{"Content-Type": "text/plain"});
        response.write(content);
        response.end();
    }
    
    http.createServer(onRequest).listen(8080);
    console.log("server has started!");   
}

exports.start = start;

