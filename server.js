import { WebSocketServer } from "ws";
import * as http from "http";

const server = http.createServer();
const wss = new WebSocketServer({ server });

wss.on("connection", ws => {
    console.log("Client connected");
    ws.send("Hello from server");
    ws.on("message", (msg) => {
        console.log("message: " + msg.toString());
    });
});

server.listen(process.env.PORT || 3000);
