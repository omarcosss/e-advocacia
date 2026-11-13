import { ChatBubble } from "iconoir-react";
import Link from "next/link";
import Button from "./Button";
import Section from "./Section";

export default function CtaRecorrente() {
  return (
    <Section
      className="border-y border-border"
      contentClassName="flex flex-col items-center gap-6 text-center"
    >
      <h2 className="font-brand text-3xl font-bold max-w-2xl">
        Entenda sua situação antes de decidir.
      </h2>
      <p className="max-w-xl">
        Converse com a nossa equipe e saiba quais caminhos existem para o seu caso.
      </p>
      <Button asChild>
        <Link href="#contato">
          <ChatBubble width={20} height={20} aria-hidden="true" />
          Agendar conversa inicial
        </Link>
      </Button>
    </Section>
  );
}
