const path=require('path');
const express=require('express');
const http=require('http');
const socketIO=require('socket.io');
const publicpath=path.join(__dirname,'../public');
//console.log(publicpath);
const port=process.env.PORT || 3000;
var app=express();
var server=http.createServer(app);
var io=socketIO(server);
app.use(express.static(publicpath));
//to register new connection event listener 
io.on('connection',(socket)=>{
    console.log('new connection');
socket.emit('newMsg',{
    from:'server',
    text:'gm',
    createdAt:123
    //send data to user
});
    socket.on('createMsg',function(msg){
        console.log(msg);
        //receive email from user
    })
    socket.on('disconnect',()=>{
        console.log('Disconnected');
        //user disconnected from server
        
    });
});
server.listen(port,()=>{
    console.log(`app started at port ${port}`);
});