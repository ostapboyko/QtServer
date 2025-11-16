import { WebSocket } from "ws";
import { http } from "http";

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", ws => {
    console.log("Client connected");
    ws.send("Hello from server");
});

server.listen(process.env.PORT || 3000);

