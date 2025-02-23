import { z } from "zod";

export const messageSchema = z.object({
  phone: z
    .string()
    .min(10, { message: "O telefone deve ter pelo menos 10 dígitos." })
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Número de telefone inválido. Use o formato internacional." }),

  message: z
    .string()
    .min(1, { message: "A mensagem não pode estar vazia." })
    .max(500, { message: "A mensagem não pode ter mais de 500 caracteres." }),
});
