import Fastify from "fastify";
import { messageRoutes } from "./routes/message.routes";

const fastify = Fastify({ logger: true });

// Registra as rotas
fastify.register(messageRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    console.log("🚀 Servidor rodando em http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
