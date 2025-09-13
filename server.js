const http = require('http');
const fs = require('fs');
const path = require('path');

let conceptos = [];

// Servir archivos estáticos
function servirArchivo(filePath, contentType, res) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Archivo no encontrado');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}

const server = http.createServer((req, res) => {
  // Rutas de archivos públicos
  if (req.url === '/' && req.method === 'GET') {
    servirArchivo(path.join(__dirname, 'public', 'index.html'), 'text/html', res);
  } else if (req.url === '/style.css' && req.method === 'GET') {
    servirArchivo(path.join(__dirname, 'public', 'style.css'), 'text/css', res);
  } else if (req.url === '/script.js' && req.method === 'GET') {
    servirArchivo(path.join(__dirname, 'public', 'script.js'), 'application/javascript', res);

  // API REST
  } else if (req.url === '/api/conceptos' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(conceptos));

  } else if (req.url.match(/^\/api\/conceptos\/\d+$/) && req.method === 'GET') {
    const id = parseInt(req.url.split('/').pop());
    const concepto = conceptos.find(c => c.id === id);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(concepto || {}));

  } else if (req.url === '/api/conceptos' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      const { nombre, descripcion } = JSON.parse(body);
      const nuevo = { id: conceptos.length + 1, nombre, descripcion };
      conceptos.push(nuevo);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(nuevo));
    });

  } else if (req.url === '/api/conceptos' && req.method === 'DELETE') {
    conceptos = [];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ mensaje: 'Todos eliminados' }));

  } else if (req.url.match(/^\/api\/conceptos\/\d+$/) && req.method === 'DELETE') {
    const id = parseInt(req.url.split('/').pop());
    conceptos = conceptos.filter(c => c.id !== id);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ mensaje: `Concepto ${id} eliminado` }));

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
