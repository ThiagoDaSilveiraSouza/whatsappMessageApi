// src/docs/auth.swagger.ts
export const loginSchemaSwagger = {
  description: "Realiza login e retorna um token JWT",
  tags: ["Auth"],
  body: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: { type: "string", format: "email", example: "admin@email.com" },
      password: { type: "string", example: "123456" },
    },
  },
  response: {
    200: {
      description: "Login bem-sucedido",
      type: "object",
      properties: {
        token: { type: "string", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
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
    401: {
      description: "Credenciais inválidas",
      type: "object",
      properties: {
        error: { type: "string", example: "Credenciais inválidas" },
      },
    },
  },
};

export const createUserSchemaSwagger = {
  description: "Cria um novo usuário",
  tags: ["Auth"],
  body: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: { type: "string", format: "email", example: "user@email.com" },
      password: { type: "string", minLength: 6, example: "senha123" },
    },
  },
  response: {
    201: {
      description: "Usuário criado com sucesso",
      type: "object",
      properties: {
        message: { type: "string", example: "Usuário criado com sucesso" },
        newUser: {
          type: "object",
          properties: {
            email: { type: "string", example: "user@email.com" },
            password: { type: "string", example: "senha123" },
          },
        },
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
    401: {
      description: "Usuário já existe",
      type: "object",
      properties: {
        error: { type: "string", example: "Usuário já existe" },
      },
    },
  },
};
