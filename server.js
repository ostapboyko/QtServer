import { WebSocketServer } from "ws";

const PORT = 3000;
const wss = new WebSocketServer({ port: PORT });

wss.on("connection", (ws) => {
    console.log("Client connected.");
    ws.on("message", (msg) => {
        ws.send("ECHO: " + msg);
    });
    ws.on("close", () => {
        console.log("Client disconnected.");
    })
});