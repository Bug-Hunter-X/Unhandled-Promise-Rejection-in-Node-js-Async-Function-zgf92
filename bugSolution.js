//To fix this we use a setTimeout to prevent the program from hanging indefinately
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

//To fix this we use a setTimeout to prevent the program from hanging indefinately
//If the timeout is reached we will throw an error