const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {

    console.log('alguien se ha conectado');

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send(message)
    });

    ws.on('close', function close(message) {
        console.log('alguien se ha desconectado', message);
    });

    ws.send('something');
});

server.listen(8080, function listening() {
    console.log('Listening on %d', server.address().port);
});