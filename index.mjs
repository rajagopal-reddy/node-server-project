import {createServer} from 'http';
const server = createServer((request, response) => {
  let message = 'Hello World\n';
  response.writeHead(200, {'Content-Type': 'text/html', charset: 'utf-8'});
  response.end(message);
});
server.listen(80,() => {
  console.log(`Server running at http://localhost:${server.address().port}`);
});