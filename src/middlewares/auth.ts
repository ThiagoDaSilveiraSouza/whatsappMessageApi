import { FastifyReply, FastifyRequest } from "fastify";

export async function verifyToken(req: FastifyRequest, reply: FastifyReply) {
  try {
    await req.jwtVerify();
  } catch (err) {
    reply.status(401).send({ error: "Acesso negado!" });
  }
}
