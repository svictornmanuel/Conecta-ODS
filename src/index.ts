import app from "./app";
import { ServerBootstrap } from "./infraestructure/bootstrap/server.bootstrap";
import { conectDB } from "./infraestructure/config/data-base"

const serverBootstrap = new ServerBootstrap(app);

(async () => {
  try {
    const instance = [
      conectDB(),
      serverBootstrap.initialize
    ];
    await Promise.all(instance);
  } catch (error) {
    console.log("Error al iniciar la aplicación: ", error),
    process.exit(1)
  }
})();
