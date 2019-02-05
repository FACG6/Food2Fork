const fs = require('fs');
const path = require('path');
const query = require('querystring')
const requesthttp = require('request');
const handelHomePage = (request, response) => {
    let filepath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filepath, (error, file) => {
        if (error) {
            response.writeHead(500, { 'content-type': 'text/html' });
            response.end('<h2>Server error</h2>');
        } else {
            response.writeHead(200, { 'content-type': 'text/html' });
            response.end(file);
        }
    })
}
const handelPublicPage = (request, response) => {
    let endpint = request.url;
    let extention = path.extname(endpint).substr(1);
    // console.log(extention)
    const contentType = {
        js: "text/javascript",
        css: "text/css",
        html: "text/html",
        json: "application/json",
        ico: "image/x-icon"
    }
    let fileName = endpint.split('/');
    let pathFile = path.join(__dirname, '..', ...fileName);
    fs.readFile(pathFile, (error, file) => {
        if (error) {
            response.writeHead(500, { 'content-type': 'text/html' });
            response.end('<h2>Server error</h2>');
        }
        else {
            response.writeHead(200, { 'content-Type': contentType[extention] })
            response.end(file);
        }
    })

}
const handelHttpRequest = (request, response) => {
    let allData = '';
    request.on('data', (chunk) => {
        allData += chunk
    })
    console.log(allData);

    request.on('end', () => {
        const queryStr = query.parse(allData).text1
        requesthttp(`https://www.food2fork.com/api/search?key=37c6e084840c16686fbab78977514ecb&q=${queryStr}`, (err, res, body) => {
            console.log(res);
            response.writeHead(200, {
                'Content-Type': 'text/html'
            })
            const paresBody = JSON.parse(body);
            console.log(paresBody);

            response.end(paresBody);
        })
            
            

    })
    // console.log(JSON.parse(body).recipes[0].title);
})
}


module.exports = {
    handelHomePage,
    handelPublicPage,
    handelHttpRequest
}
