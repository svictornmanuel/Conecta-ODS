import app from "./app.js";
import http from "http";


const server = http.createServer(app);
const PORT = Number(process.env.PORT ?? 4000);
server.listen(4000, () => {
  console.log(`Server running at http://localhost:4000 ${PORT}`);
});
