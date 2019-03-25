var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');

function staticRoot(staticPath, req, res){
    //绑定静态资源所在的根目录为staticPath
    //req浏览器发过来的请求，res服务器返回的信息
    var pathObj = url.parse(req.url, true);   //对req.url进行解析

    if(pathObj.pathname === '/'){
        //默认找index.html
        pathObj.pathname += 'index.html';
    };
    var filePath = path.join(staticPath, pathObj.pathname); //拼装成文件URL

    fs.readFile(filePath, 'binary', function(err, fileContent){
        if(err){
            res.writeHead(404, 'not found');
            res.end('<h1>404 Not Found</h1>');
        }
        else{
            res.writeHead(200, 'ok');
            res.write(fileContent, 'binary');
            res.end();
        }
    });   //通过文件路径找到文件并返回

}






//req浏览器发过来的请求，res服务器返回的信息
var server = http.createServer(function(req,res){
    //绑定静态资源所在的根目录为
    staticRoot(path.join(__dirname,'sample'),req ,res)
});
server.listen(8080);
console.log('visit http://localhost:8080');