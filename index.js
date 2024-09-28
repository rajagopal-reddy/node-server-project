import {createServer} from 'http';
import cars from './data.js'

const server = createServer((request, response) => {

  const url = new URL(request.url, `http://localhost/80`);
  const id =url.searchParams.get('id');
  
  response.writeHead(200, {'Content-Type': 'text/html', charset: 'utf-8'});

  const content = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Node Server</title>
    </head>
    <body>
      ${id ? getCarData(id) : carData()}
    </body>
  </html>
  `;
  response.end(content);

});

const carData = () => 
  `
  <h1>Cars</h1>
  <ul>
      ${cars.map(carDataList).join('\n')}
  </ul>`
;

const carDataList = ({id, make, model}) => `<li><a href="?id=${id}">${make} ${model}</a></li>`

function getCarData(id) {
  const car = cars.find(c => c.id == id);

  if (car) {
    return `<h2>${car.make} ${car.model}</h2>`;
  } else {
    return `<p>Car not found</p>`;
  }
}


server.listen(80,() => {
  console.log(`Server running at http://localhost:${server.address().port}`);
});