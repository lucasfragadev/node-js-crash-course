import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async(req, res) => {
  try {
    // GET if GET reuquest
    if (req.method === 'GET') {
      let filePath;
      if (req.url === '/') {
        filePath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html');
      } else {
        throw new Error('Not Found');
      }
      
      const data = await fs.readFile(filePath);
      res.setHeader('Contet-Type', 'text/html')
      res.write(data);
      res.end();
    } else {
      throw new Error('Metodo não disponivel')
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain'});
    res.end('Server Error');
  }
});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});



// req = REQUEST / res = RESPONSE
// res.setHeader('Content-Type', 'text/html');
// res.statusCode = 404;
// console.log(req.url);
// console.log(req.method);

// console.log(__filename, __dirname);

//   if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/html'});
//     res.end('<h1>Homepage</h1>');
//   } else if (req.url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/html'});
//     res.end('<h1>About</h1>');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/html'});
//     res.end('<h1>Not Found</h1>');
//   }