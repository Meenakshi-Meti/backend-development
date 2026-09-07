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

    // GET /contact
else if (req.method === "GET" && req.url === "/contact") {

    res.writeHead(200);

    res.end(JSON.stringify({
        success: true,
        message: "Contact page",
        email: "example@gmail.com"
    }));
}

// GET /status
else if (req.method === "GET" && req.url === "/status") {

    res.writeHead(200);

    res.end(JSON.stringify({
        success: true,
        server: "running",
        status: "OK"
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