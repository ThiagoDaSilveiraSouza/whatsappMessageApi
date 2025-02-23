import { FastifyInstance } from "fastify";
import { sendMessage } from "../services/whatsapp.service";
import { messageSchema } from "../schemas/message.schema";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middlewares";
import { messageSwagger } from "../docs/message.swagger";

export async function messageRoutes(fastify: FastifyInstance) {
  fastify.post("/send-message", { preHandler: verifyTokenMiddleware, schema: messageSwagger }, async (request, reply) => {
    // Valida os dados da requisição
    const validation = messageSchema.safeParse(request.body);

    if (!validation.success) {
      return reply.status(400).send({
        error: "Erro de validação",
        details: validation.error.format(),
      });
    }

    const { phone, message } = validation.data;

    try {
      const response = await sendMessage(phone, message);
      return reply.send({ success: true, response });
    } catch (error) {
      return reply.status(500).send({ error: "Erro ao enviar a mensagem" });
    }
  });
}
