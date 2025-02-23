export const messageSwagger = {
  tags: ["Messages"],
  description: "Endpoint para envio de mensagens via WhatsApp",
  body: {
    type: "object",
    required: ["phone", "message"],
    properties: {
      phone: { type: "string", example: "+5511999999999" },
      message: { type: "string", example: "Olá, isso é um teste!" },
    },
  },
  response: {
    200: {
      description: "Mensagem enviada com sucesso",
      type: "object",
      properties: {
        success: { type: "boolean", example: true },
        response: { type: "string", example: "Mensagem enviada com sucesso" },
      },
    },
    400: {
      description: "Erro de validação",
      type: "object",
      properties: {
        error: { type: "string", example: "Erro de validação" },
        details: { type: "object" },
      },
    },
    500: {
      description: "Erro ao enviar a mensagem",
      type: "object",
      properties: {
        error: { type: "string", example: "Erro ao enviar a mensagem" },
      },
    },
  },
};
