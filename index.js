const  Http = require('http');
const server  = Http.createServer()
server.on('request', function (req, res) {
    res.setHeader('Content-type', 'text/html;charset=utf-8');
    res.write('<h3>Hello</h3>')
    res.end();
});
server.listen(8080,  () => {
    console.log('llll');
})