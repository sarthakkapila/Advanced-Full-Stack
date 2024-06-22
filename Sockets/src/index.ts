import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';

// 1 create a http server
 const server = http.createServer(function(req:any, res:any){
    console.log({ message: "Recived request from" + req.url});
    res.end("You sent a req ans this a ress");
 })

 // Ws instance
 const wss = new WebSocketServer({ server });           // noServer: true can be used
 wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

// Send a message it gets broadcasted to everyone using ForEach considering everyone is part of the same room
// Individual messages can also be sent

    ws.on('message', function message(data){
        wss.clients.forEach(function each(client){
            if(client.readyState == WebSocket.OPEN){
                client.send(data);
            }
        });
    });
ws.send("Hello Saarrrrr ur computer has virus")
 })
 server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});