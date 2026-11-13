import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Termos de Uso | E Advocacia",
  description: "Condições de uso do site da E Advocacia.",
};

export default function TermosDeUso() {
  return (
    <Section contentClassName="max-w-3xl flex flex-col gap-6 pt-12">
      <h1 className="font-brand text-4xl">Termos de Uso</h1>
      <p className="text-sm opacity-60 italic">
        Texto de exemplo para fins de portfólio. Não possui validade jurídica.
      </p>

      <h2 className="font-bold text-xl">1. Finalidade do site</h2>
      <p>
        Este site apresenta informações gerais sobre a E Advocacia e seus
        canais de contato. O conteúdo não constitui aconselhamento jurídico.
      </p>

      <h2 className="font-bold text-xl">2. Relação advogado-cliente</h2>
      <p>
        O envio de mensagem pelo formulário não cria vínculo profissional nem
        garante resposta ou aceitação de caso.
      </p>

      <h2 className="font-bold text-xl">3. Propriedade intelectual</h2>
      <p>
        Textos, imagens e marca presentes no site não podem ser reproduzidos
        sem autorização prévia.
      </p>

      <h2 className="font-bold text-xl">4. Alterações</h2>
      <p>Estes termos podem ser atualizados a qualquer momento, sem aviso prévio.</p>
    </Section>
  );
}
