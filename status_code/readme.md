http 是所有的webserver都要实现的   
- req + res
状态码： http响应的一部分
    具体数值：浏览器 用户代理 发送正确的代码
        1xx   请求正在处理
        2xx   请求成功处理
        3xx   告知浏览器重定向redirect (服务器端发送一个3xx的状态码他就会处理)要跳转新的页面
            301 永久跳转 会让浏览器缓存 http://localhost:8080/ 不会再走服务器
            302 临时跳转
statusCode 200 告知浏览器成功
seHeader 告知浏览器 我们要输送的内容(数据类型)是text/plain

hello world 响应体