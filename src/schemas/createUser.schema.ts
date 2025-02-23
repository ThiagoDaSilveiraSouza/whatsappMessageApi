import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email("E-mail inválido.").min(1, "Campo obrigatório."),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
  name: z.string().min(1, "Campo obrigatório."),
  phone: z.string().min(1, "Campo obrigatório."),
});


export type CreateUserSchema = z.infer<typeof createUserSchema>;