let {handelHomePage,handelPublicPage} =require('./handler')

const router = (request,response)=>{
    let endpoint =request.url;
    if(endpoint ==='/'){
        handelHomePage(request,response);
    }
    else if(endpoint.indexOf('/public')!==-1){
       handelPublicPage(request,response);
    }
    // else if (endpoint === '/food'){
    //      handelHttpRequest(request,response);
    //  }
    else {
        response.writeHead(404,{'content-Type':'text/html'});
        response.end('<h2>Server error</h2>');
    }
}

module.exports=router;