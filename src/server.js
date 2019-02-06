const http = require('http');
const router = require('./router');
const server = http.createServer(router);
const port = process.env.PORT || 5000;
server.listen(5000, () => {
    console.log(`server running on ${port} port`);
})