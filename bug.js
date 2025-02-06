const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//Unhandled promise rejection
//The async function never ends and does not throw an error or reject, the program just keeps running