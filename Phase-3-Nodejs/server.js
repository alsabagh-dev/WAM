const http = require('http');
const app=  require('./app');
const port = process.env.port || 8888;//8888 is default port
const server = http.createServer(app);
//Start server
server.listen(port);    