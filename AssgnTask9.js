const http = require('http');
const handler=require('./AssgnTask9Handler');


const server = http.createServer(handler);

server.listen('3000');

