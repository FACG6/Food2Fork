const fs =require('fs');
const path =require('path');
const handelHomePage =(request,response)=>{
    let filepath=path.join(__dirname,'..','public','index.html');
    fs.readFile(filepath,(error,file)=>{
        if(error){
            response.writeHead(500,{'content-type':'text/html'});
            response.end('<h2>Server error</h2>');
        }else{
            response.writeHead(200,{'content-type':'text/html'});
            response.end(file);
        }
    })
}
const handelPublicPage =(request,response)=>{
    let endpint=request.url;
 let extention=path.extname(endpint).substr(1) ;
 console.log(extention)
 const contentType={
    js: "text/javascript",
    css: "text/css",
    html: "text/html",
    json: "application/json",
    ico: "image/x-icon"
 }
 let fileName=endpint.split('/');
 let pathFile=path.join(__dirname,'..',...fileName);
 fs.readFile(pathFile,(error,file)=>{
     if (error){
        response.writeHead(500,{'content-type':'text/html'});
        response.end('<h2>Server error</h2>');
     }
     else{
         response.writeHead(200,{'content-Type':contentType[extention]})
     }
 })

}

module.exports= {handelHomePage,
    handelPublicPage}
