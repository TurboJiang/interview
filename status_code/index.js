const http =require('http');
const server = http.createServer((req,res)=>{
    // 响应用户的请求：响应头 响应体
    // 告知浏览器这次请求成功，可以显示内容了
    res.statusCode = 200;
    // 告知浏览器发送数据内容的类型：text文本
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
});
server.listen(3000);