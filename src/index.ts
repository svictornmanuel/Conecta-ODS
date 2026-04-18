import app from "./infraestructure/web/app";
import { ServerBootstrap } from "./infraestructure/bootstrap/server.bootstrap";
import { connectDB } from "./infraestructure/config/data-base";

const serverBootstrap = new ServerBootstrap(app);

/**
 * Función tipo autoinvocada
 */

(async () => {
  try {
    const instance = [
      connectDB(), //Conexion a la BD
      serverBootstrap.initialize(), //Inicializacion del servidor
    ];
    await Promise.all(instance);
  } catch (error) {
    console.log("Error al iniciar la aplicacion", error);
    process.exit(1);
  }
})();
