//modulo dotenv
const dotenv = require("dotenv");
dotenv.config();

//modulo server
const http = require("http");
const port = process.env.P0RT || 9999;
const host = process.env.HOST || localhost;

http.createServer((req, res ) => {
    res.writeHead(200, {
        "Content-type": "text/html; charset=utf-8"
    })
    res.end("<h1>sono classi js</h1>");
})
.listen(port, host, () => {
    console.log(`server avviato su http://${host}:${port}`);
});