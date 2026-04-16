import app from "./app";
import { ServerBootstrap } from "./bootstrap/server.bootstrap";

const serverBootstrap = new ServerBootstrap(app);
serverBootstrap.initialize();

/**
 * Función tipo clasica
 */
async function startServer() {
  try {
    const instance = [serverBootstrap.initialize];
    await Promise.all(instance);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Función tipo flecha
 */

const startServerFlecha = async () => {
  try {
    const instance = [serverBootstrap.initialize];
    await Promise.all(instance);
  } catch (error) {
    console.log(error);
  }
};
/**
 * Invocación de funciones
 */
startServer();
startServerFlecha();

/**
 * Función tipo autoinvocada
 */

(async () => {
  try {
    const instance = [serverBootstrap.initialize];
    await Promise.all(instance);
  } catch (error) {
    console.log(error);
  }
})();
