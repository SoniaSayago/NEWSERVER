const http = require('http');
const json = require('./package.json');

const server = http.createServer(function (req, res) {
    const versionJSON = {"version": json.version};
    const descriptionJSON = {"description": json.description};
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(versionJSON));
        res.end(' versión creada');
    }

    else if (req.url === '/description'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(descriptionJSON));
        res.end();
    }

    else if (req.url === '/description'){
        const ip = res.socket.remoteAddress;
        const port = res.socket.remotePort;
        res.end(`Your IP address is ${ip} and your source port is ${port}.`);
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
