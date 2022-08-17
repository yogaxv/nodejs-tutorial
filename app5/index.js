const http = require('http');
const fs = require('fs');

const port = 3000;

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err){
            res.writeHead(404);
            res.write("File not found");
        } else {
            res.write(data);
        }
        res.end();
    })
}

http
    .createServer((req, res) => {
        const url = req.url;

        res.writeHead(200, {
            'Content-type': 'text/html',
        });

        switch (url) {
            case '/about':
                renderHTML('./about.html', res);
                break
            case '/contact':
                res.write('<h1>contact</h1>')
                res.end();
                break
            default:
                // res.write('Hello world');
                renderHTML('./index.html', res);
                break
        }
    })
    .listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })