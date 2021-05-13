const http = require('http');
const json = require('./package.json');

const server = http.createServer(function (req, res) {
    const versionJSON = {"version": json.version};
    const data = {"data": 'Hola mundo'};
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(versionJSON));
        res.end(' versión creada');
    }

    if (req.url === '/hola'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(data));
        res.end(' tu primer hola mundo');
    }
    else if (req.url === '/hora'){
        const today = new Date();
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.write(`La fecha y hora de hoy es ${today.toISOString()}.`);
        res.end();
    } 

    else { 
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.write('Ruta inválida, intenta otra ruta');
        res.end();
    }
    
}).listen(5000);
