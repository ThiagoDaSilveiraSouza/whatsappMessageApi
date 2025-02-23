import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("E-mail inválido"), // Verifica se o e-mail tem um formato válido
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"), // Senha mínima de 6 caracteres
});

export type LoginSchema = z.infer<typeof loginSchema>; // Cria um tipo baseado no schema
