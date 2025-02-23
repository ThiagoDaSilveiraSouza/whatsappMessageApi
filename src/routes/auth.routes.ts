import { FastifyInstance } from "fastify";
import { loginSchema, LoginSchema } from "../schemas/login.schema";

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/login", async (request, reply) => {
    // Valida os dados da requisição
    const validation = loginSchema.safeParse(request.body);

    if (!validation.success) {
      return reply.status(400).send({
        error: "Erro de validação",
        details: validation.error.format(),
      });
    }

    const { email, password } = validation.data as LoginSchema;

    try {
      const user = {
        id: 1,
        email: "admin@email.com",
        password: "123456"
      };

      if (user.email !== email || user.password !== password) {
        return reply.status(401).send({ error: "Credenciais inválidas" });
      }

      // Gera um token JWT
      const token = fastify.jwt.sign({ id: user.id, email: user.email }, { expiresIn: "1h" });

      return reply.send({ token });
    } catch (error) {
      return reply.status(500).send({ error: "Erro ao efetuar login" });
    }

  });
  fastify.post("/create-user", async (request, reply) => {
    // Valida os dados da requisição
    const validation = loginSchema.safeParse(request.body);
  })
  fastify.post("/logout", async (request, reply) => {
    // Valida os dados da requisição
    const validation = loginSchema.safeParse(request.body);
  })
  fastify.post("update-user", async (request, reply) => {
    // Valida os dados da requisição
    const validation = loginSchema.safeParse(request.body);
  })
}
