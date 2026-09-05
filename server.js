const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    // Set common response header
    res.setHeader("Content-Type", "application/json");

    // GET /
    if (req.method === "GET" && req.url === "/") {

        res.writeHead(200);

        res.end(JSON.stringify({
            success: true,
            message: "Welcome to my Node.js server!",
            route: "/",
            method: "GET"
        }));
    }

    // GET /about
    else if (req.method === "GET" && req.url === "/about") {

        res.writeHead(200);

        res.end(JSON.stringify({
            success: true,
            message: "This is my backend learning project.",
            technology: "Node.js"
        }));
    }

    // GET /users
    else if (req.method === "GET" && req.url === "/users") {

        const users = [
            { id: 1, name: "Rahul" },
            { id: 2, name: "Priya" },
            { id: 3, name: "Aman" }
        ];

        res.writeHead(200);

        res.end(JSON.stringify({
            success: true,
            users: users
        }));
    }

    // Unknown route
    else {

        res.writeHead(404);

        res.end(JSON.stringify({
            success: false,
            message: "Route not found"
        }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});