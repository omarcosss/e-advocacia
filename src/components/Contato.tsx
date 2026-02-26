"use client";

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

export default function Contato() {
  return (
    <Section id="contato" contentClassName="justify-center items-center flex">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        <h2 className="font-brand font-bold text-3xl">Contato</h2>
        <p>
          No escritório E Advocacia, somos referência no setor! Aqui, discutimos
          casos enquanto saboreamos nosso café. Entre em contato e descubra como
          podemos ajudar você!
        </p>
        <form action="" className="flex flex-col gap-4 w-full">
          <div className="flex w-full gap-4">
            <Input name="name" label="Nome" />
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
          <Input name="email" label="Email" />
          <TextArea name="message" label="Mensagem" />
          <Button>Enviar mensagem</Button>
        </form>
      </div>
    </Section>
  );
}
