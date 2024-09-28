import {createServer} from 'http';
import cars from './data.js'

const server = createServer((request, response) => {
  
  response.writeHead(200, {'Content-Type': 'text/html', charset: 'utf-8'});

  const content = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Node Server</title>
    </head>
    <body>
      <h1>Node Server</h1>
      <ul>
      ${cars.map(carData).join('')}
      </ul>
    </body>
  </html>
  `;
  response.end(content);

});

const carData = ({make, model}) => `<li>${make} ${model}</li>`

server.listen(80,() => {
  console.log(`Server running at http://localhost:${server.address().port}`);
});