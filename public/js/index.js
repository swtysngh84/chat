var socket=io();
//socket is ready  to listen the request and response
    
socket.on('connect',()=>{
        console.log('connected to server');
        //user connected to server
    });
    socket.on('disconnect',()=>{
        console.log('Disconnected');
                //user disconnected from server

    });
//enable to listen to custom emails send by server.
socket.on('newMsg',function(msg){
    console.log('new msg :',msg);
    //enable to send email to server
/*socket.emit('createMsg',{
    from:'swty',
    text:'good morning..!!'
})*/
});