import "dotenv/config";
import { Server } from "socket.io"; // <-- Import the Socket.IO server
import { createClient } from "redis";

const url = process.env.REDIS_URL;
console.log("LOG:  ~ file: realtime.js ~  redis url", url);

export default (server) => {
  const real = {};
  const client = createClient({ url });
  const pubsub = client.duplicate();

  real.start = async (prod = false) => {
    const io = new Server(prod ? server : server.httpServer, {
      path: "/web-app1/socket.io",
    });
    io.on("connection", async (socket) => {
      if (!client.isOpen) await client.connect();
      let message = "Web Socket Connected! - ";
      message += prod ? "(Production)" : "(Dev)";
      socket.emit("message", message);
      client.subscribe("test", (message) => io.emit("message", message));
    });
  };

  return real;
};
