<<<<<<< HEAD
console.log("Hello Node.js!");
console.log("I am starting my backend development journey.");



=======
const math = require("./math");

console.log("Addition :", math.add(10,5));
console.log("Subtraction :", math.sub(10,5));
console.log("Multiplication :",math.multiply(10,5));
<<<<<<< HEAD
>>>>>>> 6da32ea (Learn Node.js Modules and exports)
=======

//fs module

const fs = require("fs");

fs.writeFile("data.txt","Learning Nide.js File System",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File created successfully!");

    fs.readFile("data.txt","utf8",(err,data)=> {
        if(err){
            console.log(err);
            return;
        }

        console.log("File Content:",data);
    });
});

//path module => works with paths and very useful when working with files and folders
const path = require("path");

const filePath ="/workspace/backend-development/node-basics/modules/app.js";

console.log("File Name :" , path.basename(filePath));
console.log("Directory:" ,path.dirname(filePath));
console.log("Extension:",path.extname(filePath));
console.log("Full Path:",path.resolve(filePath));

//os module => This teaches how Node can interact with the system.

const os = require("os");

console.log("Operating System:" , os.platform());
console.log("CPU Architecture:" ,os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory:",os.totalmem());
console.log("Free Memory:",os.freemen());
console.log("Home Directory:",os.homedir());

//http =>create a server , Express is built on top of Node's HTTP capabilities.
const http = require("https");
const server = http.createServer((req,res) => {
    res.write(200 ,{
        "Content-Type":"text/plain"
    });
    res.end("Hello from Node.js Server");

});

server.listen(3000,()=>{
    console.log("Server running on https://localhost:3000");
});

// events => Event Handling

const EventEmitter = require("events");

const eventEmitter = new EventEmiiter();

eventEmitter.on("message" , (name) =>{
    console.log(`Hello ${name}!`);
});

eventEmitter.emit("message","Meenakshi");


//url =>This becomes useful when working with HTTP requests and APIs.
const {URL} = require("url");

const myUrl = new URL(
    "https://example.com/products?id=101&category=books"
);

console.log("Protocol:",myUrl.protocol);
console.log("Host:",myUrl.host);
console.log("Path:" ,myUrl.pathname);
console.log("ID:" , myUrl.searchParams.get("id"));
console.log("Category:",myUrl.searchParams.get("category"));



//crypto => Security

const crypto = require("crypto");

const password ="mySecretPassword";

const hash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

console.log("Original:",password);
console.log("Hash:",hash);


