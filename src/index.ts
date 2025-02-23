import Fastify from "fastify";
import rateLimit from "@fastify/rate-limit";
import { messageRoutes } from "./routes/message.routes";
import fastifyJwt from "@fastify/jwt";
import cors from "@fastify/cors";
import "dotenv/config";
import { authRoutes } from "./routes/auth.routes";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

const fastify = Fastify({
  ajv: {
    customOptions: { strict: false }, // Permite palavras-chave desconhecidas como "example"
  },
  logger: {
    level: "info",
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  },
});

// 🛠️ Registre o JWT primeiro!
fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || "supersecretkey",
});

// Configuração do CORS
fastify.register(cors, {
  origin: ["localhost"], // Permitir apenas este domínio
  methods: ["POST"], // Apenas POST permitido
});

// Proteção contra requisições excessivas
fastify.register(rateLimit, {
  max: 100, // Máximo de 100 requisições
  timeWindow: "1 minute", // A cada 1 minuto
});



fastify.register(swagger, {
  swagger: {
    info: {
      title: "Minha API",
      description: "Documentação da API",
      version: "1.0.0",
    },
    host: "localhost:3000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
});

fastify.register(swaggerUI, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
});


// 📌Rota para autenticar
fastify.register(authRoutes);
// 📌Rota para mensagem do whatsapp
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
