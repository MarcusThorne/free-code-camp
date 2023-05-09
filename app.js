const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Home Page')
    }

    if(req.url === '/about') {
        // Blocking code
        for(let i = 0; i < 1000; i++) {
            for(let j = 0; j < 1000; j++) {
                console.log(`${i}, ${j}`);
            }
        }

        res.end('About Page')
    }

    res.end('Error Page')
})

server.listen(3000, () => {
    console.log('Server is listening on port: 3000...');
})
