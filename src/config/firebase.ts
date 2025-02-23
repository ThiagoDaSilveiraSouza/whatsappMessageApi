import admin from "firebase-admin";

// 🔹 Carrega as credenciais do Firebase (Service Account)
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore(); // Banco de dados Firestore
export const auth = admin.auth(); // Serviço de autenticação
