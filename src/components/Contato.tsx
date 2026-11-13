"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { enviarContato } from "@/app/actions";
import Button from "./Button";
import Input from "./Input";
import Section from "./Section";
import TextArea from "./TextArea";

const maskBrazilianPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

type Status = "idle" | "loading" | "success" | "error";

export default function Contato() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("loading");
    setFeedback("");

    try {
      const result = await enviarContato(new FormData(form));

      if (result.ok) {
        form.reset();
        setStatus("success");
        setFeedback(
          "Recebemos sua mensagem. Nossa equipe retorna em até 1 dia útil.",
        );
      } else {
        setStatus("error");
        setFeedback(result.error);
      }
    } catch {
      setStatus("error");
      setFeedback(
        "Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.",
      );
    }
  };

  return (
    <Section id="contato" contentClassName="justify-center items-center flex">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        <h2 className="font-brand font-bold text-3xl">Contato</h2>
        <p>
          Conte resumidamente o seu caso. Analisamos cada mensagem com sigilo
          e retornamos para agendar uma conversa inicial.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex w-full gap-4">
            <Input
              name="name"
              label="Nome"
              autoComplete="name"
              required
            />
            <Input
              name="phone"
              label="Telefone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={15}
              mask={maskBrazilianPhone}
              required
            />
          </div>
          <Input
            name="email"
            label="E-mail"
            type="email"
            autoComplete="email"
            required
          />
          <TextArea name="message" label="Mensagem" required />

          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 accent-[var(--color-accent)]"
            />
            <span>
              Concordo com o tratamento dos meus dados conforme a{" "}
              <Link
                href="/politica-de-privacidade"
                className="underline underline-offset-4"
              >
                Política de Privacidade
              </Link>
              .
            </span>
          </label>

          <Button
            type="submit"
            loading={status === "loading"}
            disabled={status === "loading"}
          >
            Enviar mensagem
          </Button>

          <p
            role="status"
            aria-live="polite"
            className={
              status === "success"
                ? "text-sm text-accent"
                : status === "error"
                  ? "text-sm text-red-600 dark:text-red-400"
                  : "sr-only"
            }
          >
            {feedback}
          </p>
        </form>
      </div>
    </Section>
  );
}
