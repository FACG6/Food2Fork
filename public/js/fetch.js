const fetch = (method, url, value, callBack) =>{
    const http = new XMLHttpRequest();
    http.onreadystatechange=()=>{
        if(http.readyState === 4 && http.status === 200) {
            const respons = JSON.parse(http.responseText()) ;
            callBack(respons)
        
        }

    }
    http.open(method, url)
    http.send(value)
}