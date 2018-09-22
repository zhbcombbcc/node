// 加载http模块
var http = require('http');
// 创建一个http服务器
var server = http.createServer();

server.on('request', function(req, res){
    res.write('hello world，你好世界');
    res.end();
});

server.listen(8080, function(){
    console.log('服务器启动了，请访问：http://localhost:8080');
});