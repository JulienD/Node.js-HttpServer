var http = require("http");
var url  = require("url");


function start(route, handle) {
	function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Requête reçue pour le chemin " + pathname + ".");
    request.setEncoding("utf8");
    var i= 0
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      i++;
      console.log("Paquet POST reçu '" +  i +  "'.");
    });
    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });
	}
	http.createServer(onRequest).listen(8888);
	console.log('Démarrage du serveur. port: 8888');
};

exports.start = start;