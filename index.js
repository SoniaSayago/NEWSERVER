const http = require('http');
const json = require('./package.json');

const server = http.createServer(function (req, res) {
    const versionJSON = {"version": json.version};
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(versionJSON));
        res.end('versión creada');
    }

    else if (req.url === '/hora'){
        const today = new Date();
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(today.toISOString());
        res.end(`La fecha y hora de hoy es ${today}.`);
    } 

    else { 
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.write('Ruta inválida, intenta otra ruta');
        res.end('Ruta inválida');
    }
    
}).listen(5000);
