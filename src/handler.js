const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
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
    request.on('data', (chanck) => {
        allData += chanck;
    })
    let paresBody='';
    request.on('end', () => {
        let convertedData = JSON.stringify(allData);
        console.log(allData)
        console.log(convertedData)
        
         requesthttp(`https://www.food2fork.com/api/search?key=200d285938753c0a75c05696eff29466&q=${allData}`, (err, res, body) => {
       paresBody = JSON.parse(body);
     if(err){
        response.writeHead(500, { 'Content-Type': 'text/html' })
        response.end('<h2>Server error</h2>');
     }else{

         response.writeHead(200, { 'Content-Type': 'application/json' })
         response.end(JSON.stringify(paresBody));
     }
    })
 })
}


module.exports = {
    handelHomePage,
    handelPublicPage,
    handelHttpRequest
}
