const http =require('http');
const server = http.createServer((req,res)=>{
    // 写入一个响应的头
    // res.writeHead(302,{//重定向状态码
    //     Location:'http://www.mi.com'
    // })
    // res.end();
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');

    // 301 运行之后再改变状态码为200 依旧是原页面 不进行跳转 永久跳转
    // 302 运行之后再改变状态码为200 会跳转 临时跳转
});
server.listen(8080);