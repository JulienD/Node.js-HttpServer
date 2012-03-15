var exec = require("child_process").exec;
var querystring = require("querystring");

/*
 * Menu router.
 */
function getMenuItems() {
	console.log('getMenuItems');
	var items = new Array()
	items['/'] = start;
	items['/start'] = start;
	items['/upload'] = upload;
	return items;
}
exports.getMenuItems = getMenuItems;

/*
 * Start page callback.
 */
function start(response, postData) {
  console.log("Le gestionnaire 'start' est appelé.");
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="data" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Envoyer" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
exports.start = start;

/*
 * Upload page callback.
 */
function upload(response, postData) {
  console.log("Le gestionnaire 'upload' est appelé.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Vous avez envoyé : " + querystring.parse(postData).data);
  response.end();
}
exports.upload = upload;