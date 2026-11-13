"use server";

export type ContatoResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};

/**
 * Recebe o formulário de contato e valida os dados no servidor.
 *
 * Projeto de portfólio: a mensagem não é enviada a ninguém.
 * Para entregar de verdade, troque o bloco "entrega" por um e-mail
 * (Resend, SMTP...), uma integração com CRM ou um webhook.
 */
export async function enviarContato(formData: FormData): Promise<ContatoResult> {
  const name = text(formData, "name");
  const phone = text(formData, "phone");
  const email = text(formData, "email");
  const message = text(formData, "message");
  const consent = formData.get("consent") === "on";

  if (name.length < 2) {
    return { ok: false, error: "Informe seu nome completo." };
  }

  if (phone.replace(/\D/g, "").length < 10) {
    return { ok: false, error: "Informe um telefone válido com DDD." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { ok: false, error: "Informe um e-mail válido." };
  }

  if (message.length < 10) {
    return { ok: false, error: "Descreva brevemente seu caso (mínimo de 10 caracteres)." };
  }

  if (!consent) {
    return { ok: false, error: "É necessário concordar com a Política de Privacidade." };
  }

  // entrega: ponto de integração (ver comentário acima)

  return { ok: true };
}
