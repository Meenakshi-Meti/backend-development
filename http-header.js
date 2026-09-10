const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    // Reading request headers
    console.log("User Agent:", req.headers["user-agent"]);
    console.log("Host:", req.headers.host);

    // Setting response headers
    res.setHeader("Content-Type", "application/json");
    res.setHeader("X-Powered-By", "Node.js");
    res.setHeader("Cache-Control", "no-cache");

    // Handle different routes
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200);

        const response = {
            message: "HTTP Headers Example",
            method: req.method,
            status: "Success"
        };

        res.end(JSON.stringify(response));
    } 
    
    else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200);

        const response = {
            message: "This is the About page",
            server: "Node.js"
        };

        res.end(JSON.stringify(response));
    } 
    
    else {
        res.writeHead(404);

        const response = {
            error: "Route not found"
        };

        res.end(JSON.stringify(response));
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});