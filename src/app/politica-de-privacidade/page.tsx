import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Política de Privacidade | E Advocacia",
  description: "Como a E Advocacia trata os dados pessoais enviados pelo site.",
};

export default function PoliticaDePrivacidade() {
  return (
    <Section contentClassName="max-w-3xl flex flex-col gap-6 pt-12">
      <h1 className="font-brand text-4xl">Política de Privacidade</h1>
      <p className="text-sm opacity-60 italic">
        Texto de exemplo para fins de portfólio. Não possui validade jurídica.
      </p>

      <h2 className="font-bold text-xl">1. Dados coletados</h2>
      <p>
        Coletamos apenas os dados enviados voluntariamente pelo formulário de
        contato: nome, telefone, e-mail e a descrição do caso.
      </p>

      <h2 className="font-bold text-xl">2. Finalidade</h2>
      <p>
        Os dados são usados exclusivamente para responder à sua solicitação e,
        se houver interesse, agendar uma conversa inicial.
      </p>

      <h2 className="font-bold text-xl">3. Sigilo</h2>
      <p>
        As informações do seu caso são tratadas com sigilo profissional e não
        são compartilhadas com terceiros sem autorização, salvo por obrigação
        legal.
      </p>

      <h2 className="font-bold text-xl">4. Seus direitos</h2>
      <p>
        Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), você
        pode solicitar acesso, correção ou exclusão dos seus dados pelo e-mail
        contato@eadvocacia.adv.br.
      </p>
    </Section>
  );
}
