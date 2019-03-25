# node static server 
require('path')：path 这个模块会处理我们的 URL ，因为在 Mac、Windows、Linux 上文件路径写法是不同的。

require('fs')：fs 模块用于去读写文件。

require('url')：url 模块可自动解析 URL去得到一些信息，相当于我们直接使用一个 location。即：把 URL 进行解析然后得到这些数据，url 模块可把 URL 作为参数然后进行解析得到一个对象，然后我们就可以使用某些部分了，而不用我们自己再使用正则进行提取。

fs.readFile(filePath, 'binary', function(err, fileContent){}：binary 表示用二进制的方式去读取。

res.end('<h1>404 Not Found</h1>')：相当于：

res.write('<h1>404 Not Found</h1>');
res.end();



res.write(fileContent, 'binary')：通过二进制的方式发出读到的文件。

var server = http.createServer(function(req, res){
staticRoot(path.join(__dirname, 'static'), req, res);
})：
staticRoot 这个函数的功能就是把某一个路径当成一个静态文件路径。即，一个请求过来后，我们交给 staticRoot 这个函数去实现，这个函数有三个参数：


第一个就是我把哪个路径名传递进去当成静态文件路径 path.join(__dirname, 'static')；
第二个就是请求 req；
第三个就是响应 res。
staticRoot(path.join(__dirname, 'static'), req, res) 这样写而不是直接写绝对路径的原因：
1. 代码存放文件的位置可能会发生变动；
2. 在不同系统（Mac、Windows、Linux）都可以用。
