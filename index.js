var server = require('./server.js');
var router = require('./router.js')
var requestHandlers = require('./requestHandlers.js');

// Get menu items
var handle = requestHandlers.getMenuItems();

server.start(router.route, handle);