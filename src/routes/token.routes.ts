import { FastifyInstance } from "fastify";

export async function tokenRoutes(fastify: FastifyInstance) {
  fastify.post("/token", async (_, reply) => {
    const token = fastify.jwt.sign({ user: "admin" }, { expiresIn: "1h" });
    return reply.send({ token });
  });
}
