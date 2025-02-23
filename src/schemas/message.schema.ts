import { z } from "zod";

export const messageSchema = z.object({
  phone: z.string()
    .min(10, "O telefone deve ter no mínimo 10 dígitos")
    .regex(/^\d+$/, "O telefone deve conter apenas números"),
  message: z.string()
    .min(1, "A mensagem não pode estar vazia")
    .trim() // Remove espaços extras
    .max(500, "A mensagem não pode ter mais de 500 caracteres"),
});
