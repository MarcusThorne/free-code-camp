const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello world!')
    }

    if (req.url === '/about') {
        res.end('This is us!')
    }

    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find this page!</p>
        <a href='/'>Home</a>
    `)
})

server.listen(3000)
