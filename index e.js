const express = require("express");
const app =express();
const port =8080;

app.get('/',(req,res)=>{
    res.send('GET request to the Homepage');
});
app.post('/',(req,res)=>{
    res.send('POST request to the Homepage');
});
app.get('/about',(req,res)=>{
    res.send('Aboutpage');
});
app.all('*',(req,res)=>{
    res.status(404).send('404-Page Not Found');
});

app.listen(port ,()=>{
    console.log(`http://localhost:${port}`);
});