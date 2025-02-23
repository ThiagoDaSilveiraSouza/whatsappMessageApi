import axios from "axios";

const WHATSAPP_API_URL = "https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages";
const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";

export async function sendMessage(phone: string, message: string) {
  try {
    // const response = await axios.post(
    //   WHATSAPP_API_URL,
    //   {
    //     messaging_product: "whatsapp",
    //     to: phone,
    //     text: { body: message },
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${ACCESS_TOKEN}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // return response.data;
    return { success: true, message: "Mensagem enviada com sucesso!" };
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    throw new Error("Falha no envio da mensagem");
  }
}
